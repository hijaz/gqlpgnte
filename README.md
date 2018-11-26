## Comparison of pagination performance / cache degradation in GraphQL Clients (Apollo, Relay & Urql)

The 3 clients paginate over results from the github graphql endpoint (https://developer.github.com/v4/).

replace <GITHUB_TOKEN> with your github api token to be able to hit github graphql endpoint.

(Urql does not provide an out of the box pagination api and what I quickly threw together to make it paginate is not ideal.)
