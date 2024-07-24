/**
 * @generated SignedSource<<cccddfce3f6449ab0fe567b71ee921e0>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ClientRequest, ClientQuery } from 'relay-runtime';
export type initializeAccountsQuery$variables = Record<PropertyKey, never>;
export type initializeAccountsQuery$data = {
  readonly users: ReadonlyArray<{
    readonly name: string | null | undefined;
  }>;
};
export type initializeAccountsQuery = {
  response: initializeAccountsQuery$data;
  variables: initializeAccountsQuery$variables;
};

const node: ClientRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "initializeAccountsQuery",
    "selections": [
      {
        "kind": "ClientExtension",
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "User",
            "kind": "LinkedField",
            "name": "users",
            "plural": true,
            "selections": [
              (v0/*: any*/)
            ],
            "storageKey": null
          }
        ]
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "initializeAccountsQuery",
    "selections": [
      {
        "kind": "ClientExtension",
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "User",
            "kind": "LinkedField",
            "name": "users",
            "plural": true,
            "selections": [
              (v0/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "id",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ]
      }
    ]
  },
  "params": {
    "cacheID": "300b84fc7570a2ebdf6061ca13b15241",
    "id": null,
    "metadata": {},
    "name": "initializeAccountsQuery",
    "operationKind": "query",
    "text": null
  }
};
})();

(node as any).hash = "c3ee2fc01d26535d65678d8d3ef3a38c";

export default node;
