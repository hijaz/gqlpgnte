import React, { Component } from "react";
import "../../App.css";
import { default as Repos } from "./repos_pg";
import { QueryRenderer } from "react-relay";
import moment from "moment";
import { graphql } from "react-relay";

class App extends Component {
  state = {
    cursor: null
  };

  query = graphql`
    query appPgQuery($query: String!, $after: String) {
      ...reposPg_search @arguments(query: $query, after: $after)
    }
  `;

  createPageQuery = cursor => {
    const date = new moment(new Date()).subtract(1, "weeks");
    const formattedDate = date.format("YYYY-MM-DD");
    return {
      query: `created:>${formattedDate} sort:stars-desc`,
      after: cursor ? cursor : null
    };
  };

  handleLoadMore = cursor => {
    this.setState({
      cursor: cursor
    });
  };

  render() {
    return (
      <QueryRenderer
        environment={this.props.env}
        query={this.query /** trendingRepositoriesGQLQuery*/}
        variables={this.createPageQuery(this.state.cursor)}
        render={({ error, props }) => {
          if (error) {
            return <div>Error!</div>;
          }
          if (!props) {
            return <div>Loading...</div>;
          }
          return (
            <Repos
              search={props}
              //entries={props.search.edges}
              onLoadMore={() => {
                this.handleLoadMore(props.search.pageInfo.endCursor);
              }}
            />
          );
        }}
      />
    );
  }
}

export default App;
