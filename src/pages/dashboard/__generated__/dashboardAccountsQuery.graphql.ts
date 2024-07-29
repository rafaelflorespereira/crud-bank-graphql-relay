/**
 * @generated SignedSource<<1b0b511bb2a1914c76207983b4b3a6e1>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ClientRequest, ClientQuery } from 'relay-runtime';
export type dashboardAccountsQuery$variables = Record<PropertyKey, never>;
export type dashboardAccountsQuery$data = {
  readonly accounts: ReadonlyArray<{
    readonly credits: ReadonlyArray<{
      readonly amount: number;
      readonly total: number;
    } | null | undefined> | null | undefined;
    readonly currentBalance: number | null | undefined;
    readonly debits: ReadonlyArray<{
      readonly amount: number;
      readonly total: number;
    } | null | undefined> | null | undefined;
    readonly id: string;
    readonly transactions: ReadonlyArray<{
      readonly amount: number;
      readonly date: string;
      readonly type: string;
    } | null | undefined> | null | undefined;
    readonly user: {
      readonly name: string | null | undefined;
    };
  }>;
};
export type dashboardAccountsQuery = {
  response: dashboardAccountsQuery$data;
  variables: dashboardAccountsQuery$variables;
};

const node: ClientRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "currentBalance",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "amount",
  "storageKey": null
},
v4 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "total",
    "storageKey": null
  },
  (v3/*: any*/)
],
v5 = {
  "alias": null,
  "args": null,
  "concreteType": "Credit",
  "kind": "LinkedField",
  "name": "credits",
  "plural": true,
  "selections": (v4/*: any*/),
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "concreteType": "Debit",
  "kind": "LinkedField",
  "name": "debits",
  "plural": true,
  "selections": (v4/*: any*/),
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "date",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "type",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "dashboardAccountsQuery",
    "selections": [
      {
        "kind": "ClientExtension",
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Account",
            "kind": "LinkedField",
            "name": "accounts",
            "plural": true,
            "selections": [
              (v0/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "User",
                "kind": "LinkedField",
                "name": "user",
                "plural": false,
                "selections": [
                  (v1/*: any*/)
                ],
                "storageKey": null
              },
              (v2/*: any*/),
              (v5/*: any*/),
              (v6/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "Transaction",
                "kind": "LinkedField",
                "name": "transactions",
                "plural": true,
                "selections": [
                  (v3/*: any*/),
                  (v7/*: any*/),
                  (v8/*: any*/)
                ],
                "storageKey": null
              }
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
    "name": "dashboardAccountsQuery",
    "selections": [
      {
        "kind": "ClientExtension",
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Account",
            "kind": "LinkedField",
            "name": "accounts",
            "plural": true,
            "selections": [
              (v0/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "User",
                "kind": "LinkedField",
                "name": "user",
                "plural": false,
                "selections": [
                  (v1/*: any*/),
                  (v0/*: any*/)
                ],
                "storageKey": null
              },
              (v2/*: any*/),
              (v5/*: any*/),
              (v6/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "Transaction",
                "kind": "LinkedField",
                "name": "transactions",
                "plural": true,
                "selections": [
                  (v3/*: any*/),
                  (v7/*: any*/),
                  (v8/*: any*/),
                  (v0/*: any*/)
                ],
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
    "cacheID": "3de14903d911caf4e11fbde7d4817ae4",
    "id": null,
    "metadata": {},
    "name": "dashboardAccountsQuery",
    "operationKind": "query",
    "text": null
  }
};
})();

(node as any).hash = "b83d54d39e942a3b87408e502a9d6199";

export default node;
