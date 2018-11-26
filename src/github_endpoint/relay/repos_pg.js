import React, { Component } from "react";
import styled from "styled-components";
import { createPaginationContainer, graphql } from "react-relay";
import moment from "moment";

class Repos extends Component {
  perf = [];

  handleLoadMore = () => {
    window.startTime = Date.now();
    this.props.relay.loadMore(15);
  };

  render() {
    const repos = this.props.search.search.edges || [];

    window.endTime = Date.now();
    const perfRec = `Time Taken: ${window.endTime -
      window.startTime} --- number of repos: ${repos.length}`;
    this.perf.push(perfRec);
    console.log(perfRec);

    return (
      <>
        <LoadMoreButton onClick={this.handleLoadMore}>Load More</LoadMoreButton>

        <ul>
          {repos.map(({ node }, idx) => (
            <li key={idx}>
              <h3>
                {node.name} - {node.owner.login}
              </h3>
              <p>{node.description}</p>
              <p>
                ★ {node.stargazers.totalCount} -{" "}
                {node.primaryLanguage && node.primaryLanguage.name}{" "}
              </p>
            </li>
          ))}
          {this.props.loading && <h2>Loading more...</h2>}
        </ul>
      </>
    );
  }
}

const LoadMoreButton = styled.button`
  position: fixed;
  right: 50px;
`;

const createPageQuery = cursor => {
  const date = new moment(new Date()).subtract(1, "weeks");
  const formattedDate = date.format("YYYY-MM-DD");
  return {
    query: `created:>${formattedDate} sort:stars-desc`,
    after: cursor ? cursor : null
  };
};

export default createPaginationContainer(
  Repos,
  {
    search: graphql`
      fragment reposPg_search on Query
        @argumentDefinitions(
          query: { type: "String!" }
          after: { type: "String", defaultValue: null }
        ) {
        search(first: 15, query: $query, type: REPOSITORY, after: $after)
          @connection(key: "reposPg_search") {
          pageInfo {
            startCursor
            endCursor
            hasNextPage
            hasPreviousPage
          }
          edges {
            node {
              ... on Repository {
                name
                owner {
                  login
                }
                description
                stargazers {
                  totalCount
                }
                primaryLanguage {
                  name
                }
              }
            }
          }
        }
      }
    `
  },
  {
    direction: "forward",
    getFragmentVariables(prevVars, totalCount) {
      return {
        ...prevVars,
        count: totalCount
      };
    },
    getVariables(props, { count, cursor }, fragmentVariables) {
      return {
        count,
        cursor,
        ...createPageQuery(props.search.search.pageInfo.endCursor)
      };
    },
    query: graphql`
      query reposPgQuery($query: String!, $cursor: String) {
        ...reposPg_search @arguments(query: $query, after: $cursor)
      }
    `
  }
);
