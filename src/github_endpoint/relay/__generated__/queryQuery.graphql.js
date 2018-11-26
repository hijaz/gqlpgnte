/**
 * @flow
 * @relayHash 51cd41b05c1dded0130dc41606501c50
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type queryQueryVariables = {|
  query: string,
  cursor?: ?string,
|};
export type queryQueryResponse = {|
  +search: {|
    +pageInfo: {|
      +startCursor: ?string,
      +endCursor: ?string,
      +hasNextPage: boolean,
      +hasPreviousPage: boolean,
    |},
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +name?: string,
        +owner?: {|
          +login: string
        |},
        +description?: ?string,
        +stargazers?: {|
          +totalCount: number
        |},
        +primaryLanguage?: ?{|
          +name: string
        |},
      |}
    |}>,
  |}
|};
export type queryQuery = {|
  variables: queryQueryVariables,
  response: queryQueryResponse,
|};
*/


/*
query queryQuery(
  $query: String!
  $cursor: String
) {
  search(first: 15, query: $query, type: REPOSITORY, after: $cursor) {
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
            __typename
            login
            id
          }
          description
          stargazers {
            totalCount
          }
          primaryLanguage {
            name
            id
          }
        }
        ... on Node {
          id
        }
        __typename
      }
      cursor
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "query",
    "type": "String!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "cursor",
    "type": "String",
    "defaultValue": null
  }
],
v1 = {
  "kind": "Variable",
  "name": "query",
  "variableName": "query",
  "type": "String!"
},
v2 = {
  "kind": "Literal",
  "name": "type",
  "value": "REPOSITORY",
  "type": "SearchType!"
},
v3 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "pageInfo",
  "storageKey": null,
  "args": null,
  "concreteType": "PageInfo",
  "plural": false,
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "startCursor",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "endCursor",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "hasNextPage",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "hasPreviousPage",
      "args": null,
      "storageKey": null
    }
  ]
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "__typename",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "login",
  "args": null,
  "storageKey": null
},
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "description",
  "args": null,
  "storageKey": null
},
v8 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "stargazers",
  "storageKey": null,
  "args": null,
  "concreteType": "StargazerConnection",
  "plural": false,
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "totalCount",
      "args": null,
      "storageKey": null
    }
  ]
},
v9 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "cursor",
  "args": null,
  "storageKey": null
},
v10 = [
  {
    "kind": "Variable",
    "name": "after",
    "variableName": "cursor",
    "type": "String"
  },
  {
    "kind": "Literal",
    "name": "first",
    "value": 15,
    "type": "Int"
  },
  v1,
  v2
],
v11 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "queryQuery",
  "id": null,
  "text": "query queryQuery(\n  $query: String!\n  $cursor: String\n) {\n  search(first: 15, query: $query, type: REPOSITORY, after: $cursor) {\n    pageInfo {\n      startCursor\n      endCursor\n      hasNextPage\n      hasPreviousPage\n    }\n    edges {\n      node {\n        ... on Repository {\n          name\n          owner {\n            __typename\n            login\n            id\n          }\n          description\n          stargazers {\n            totalCount\n          }\n          primaryLanguage {\n            name\n            id\n          }\n        }\n        ... on Node {\n          id\n        }\n        __typename\n      }\n      cursor\n    }\n  }\n}\n",
  "metadata": {
    "connection": [
      {
        "count": null,
        "cursor": "cursor",
        "direction": "forward",
        "path": [
          "search"
        ]
      }
    ]
  },
  "fragment": {
    "kind": "Fragment",
    "name": "queryQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": "search",
        "name": "__Search_search_connection",
        "storageKey": null,
        "args": [
          v1,
          v2
        ],
        "concreteType": "SearchResultItemConnection",
        "plural": false,
        "selections": [
          v3,
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "edges",
            "storageKey": null,
            "args": null,
            "concreteType": "SearchResultItemEdge",
            "plural": true,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "node",
                "storageKey": null,
                "args": null,
                "concreteType": null,
                "plural": false,
                "selections": [
                  v4,
                  {
                    "kind": "InlineFragment",
                    "type": "Repository",
                    "selections": [
                      v5,
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "owner",
                        "storageKey": null,
                        "args": null,
                        "concreteType": null,
                        "plural": false,
                        "selections": [
                          v6
                        ]
                      },
                      v7,
                      v8,
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "primaryLanguage",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "Language",
                        "plural": false,
                        "selections": [
                          v5
                        ]
                      }
                    ]
                  }
                ]
              },
              v9
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "queryQuery",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "search",
        "storageKey": null,
        "args": v10,
        "concreteType": "SearchResultItemConnection",
        "plural": false,
        "selections": [
          v3,
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "edges",
            "storageKey": null,
            "args": null,
            "concreteType": "SearchResultItemEdge",
            "plural": true,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "node",
                "storageKey": null,
                "args": null,
                "concreteType": null,
                "plural": false,
                "selections": [
                  v11,
                  v4,
                  {
                    "kind": "InlineFragment",
                    "type": "Repository",
                    "selections": [
                      v5,
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "owner",
                        "storageKey": null,
                        "args": null,
                        "concreteType": null,
                        "plural": false,
                        "selections": [
                          v4,
                          v6,
                          v11
                        ]
                      },
                      v7,
                      v8,
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "primaryLanguage",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "Language",
                        "plural": false,
                        "selections": [
                          v5,
                          v11
                        ]
                      }
                    ]
                  }
                ]
              },
              v9
            ]
          }
        ]
      },
      {
        "kind": "LinkedHandle",
        "alias": null,
        "name": "search",
        "args": v10,
        "handle": "connection",
        "key": "Search_search",
        "filters": [
          "query",
          "type"
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'c1e3c5ec94dd6b27f1eec38cc7085fe3';
module.exports = node;
