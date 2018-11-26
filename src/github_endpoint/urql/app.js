import React, { Component } from "react";
import "../../App.css";
import Repos from "./repos";
import { trendingRepositoriesGQLQuery } from "./query";
import moment from "moment";
import { Connect, query } from "urql";

class App extends Component {
  createPageQuery = cursor => {
    const date = new moment(new Date()).subtract(1, "weeks");
    const formattedDate = date.format("YYYY-MM-DD");
    return query(trendingRepositoriesGQLQuery, {
      query: `created:>${formattedDate} sort:stars-desc`,
      cursor: cursor ? cursor : null
    });
  };

  state = {
    cursor: null,
    cachedPageQueries: [],
    pageQuery: this.createPageQuery(),
    pageData: []
  };

  mergeWithCachedRecords = (cache, pageData, pageQuery, data) => {
    if (data) {
      if (this.state.cachedPageQueries.length) {
        const promises = this.state.cachedPageQueries.map(pageQuery => {
          return cache.read(pageQuery).then(value => {
            return value.search.edges;
          });
        });
        Promise.all(promises).then(results => {
          console.log(results);
          pageData = results;
          const newCachedPageQueries = this.state.cachedPageQueries.slice(0);
          newCachedPageQueries.push(this.state.pageQuery);
          this.setState({
            cursor: data.search.pageInfo.endCursor,
            cachedPageQueries: newCachedPageQueries,
            pageData: this.state.pageData.concat(data.search.edges)
          });
        });
      } else {
        const newCachedPageQueries = this.state.cachedPageQueries.slice(0);
        newCachedPageQueries.push(this.state.pageQuery);
        this.setState({
          cursor: data.search.pageInfo.endCursor,
          cachedPageQueries: newCachedPageQueries,
          pageData: data.search.edges
        });
      }
    }
  };

  handleLoadMore = cursor => {
    this.setState({
      pageQuery: this.createPageQuery(cursor)
    });
  };

  render() {
    return (
      <div>
        <h1>Last Week Trending Repositories</h1>
        {this.state.cachedPageQueries.includes(this.state.pageQuery) ? (
          <Repos
            entries={this.state.pageData}
            onLoadMore={() => {
              this.handleLoadMore(this.state.cursor);
            }}
          />
        ) : (
          <Connect query={this.state.pageQuery}>
            {({ cache, loaded, fetching, refetch, data, error, addTodo }) => {
              if (error) return <p>{error.message}</p>;
              this.mergeWithCachedRecords(
                cache,
                this.state.pageData,
                this.state.pageQuery,
                data
              );

              return (
                <Repos
                  entries={this.state.pageData}
                  onLoadMore={() => {
                    this.handleLoadMore(this.state.cursor);
                  }}
                />
              );
            }}
          </Connect>
        )}
      </div>
    );
  }
}

export default App;
