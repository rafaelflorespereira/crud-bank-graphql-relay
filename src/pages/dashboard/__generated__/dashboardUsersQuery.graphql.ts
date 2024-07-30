/**
 * @generated SignedSource<<fc43b9194010b7ec8908a8345062c177>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ClientRequest, ClientQuery } from 'relay-runtime';
export type dashboardUsersQuery$variables = Record<PropertyKey, never>;
export type dashboardUsersQuery$data = {
  readonly users: ReadonlyArray<{
    readonly email: string | null | undefined;
    readonly id: string;
    readonly name: string | null | undefined;
  }>;
};
export type dashboardUsersQuery = {
  response: dashboardUsersQuery$data;
  variables: dashboardUsersQuery$variables;
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
    "name": "dashboardUsersQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "dashboardUsersQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "2a6d49f1e3f03fc006fefbf2dd2d1d22",
    "id": null,
    "metadata": {},
    "name": "dashboardUsersQuery",
    "operationKind": "query",
    "text": null
  }
};
})();

(node as any).hash = "03420517d288ee6fcb61856dfcf5929c";

export default node;
