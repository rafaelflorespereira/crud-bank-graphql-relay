/**
 * @generated SignedSource<<7ef5da923d6e2f007f05fc1c17948344>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ClientRequest, ClientQuery } from 'relay-runtime';
export type dashboard1Query$variables = Record<PropertyKey, never>;
export type dashboard1Query$data = {
  readonly users: ReadonlyArray<{
    readonly email: string | null | undefined;
    readonly id: string;
    readonly name: string | null | undefined;
  }>;
};
export type dashboard1Query = {
  response: dashboard1Query$data;
  variables: dashboard1Query$variables;
};

const node: ClientRequest = (function(){
var v0 = [
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
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "name",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "email",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "dashboard1Query",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "dashboard1Query",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "bce2b277ac9e5f5ede8074cea69e6c9d",
    "id": null,
    "metadata": {},
    "name": "dashboard1Query",
    "operationKind": "query",
    "text": null
  }
};
})();

(node as any).hash = "c859002e4f0674e804fc0074f3cc4895";

export default node;
