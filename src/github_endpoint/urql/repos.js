import React, { Component } from "react";
import styled from "styled-components";

class Repos extends Component {
  perf = [];

  render() {
    if (this.props.entries === null && !this.props.loading)
      return <p>Starting....</p>;
    if (!this.props.entries && this.props.loading) return <p>Loading....</p>;
    const repos = this.props.entries || [];

    window.endTime = Date.now();
    if (!this.props.loading) {
      const perfRec = `Time Taken: ${window.endTime -
        window.startTime} --- number of repos: ${repos.length}`;
      this.perf.push(perfRec);
      console.log(perfRec);
    }

    return (
      <>
        <LoadMoreButton
          onClick={() => {
            window.startTime = Date.now();
            this.props.onLoadMore();
          }}
        >
          Load More
        </LoadMoreButton>

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

export default Repos;
