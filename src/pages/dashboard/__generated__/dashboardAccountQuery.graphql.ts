/**
 * @generated SignedSource<<cf1d71a0680a96fd7c0d797dffd79c86>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ClientRequest, ClientQuery } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type dashboardAccountQuery$variables = {
  accountId: string;
};
export type dashboardAccountQuery$data = {
  readonly node: {
    readonly " $fragmentSpreads": FragmentRefs<"dashboardAccountFragment">;
  } | null | undefined;
};
export type dashboardAccountQuery = {
  response: dashboardAccountQuery$data;
  variables: dashboardAccountQuery$variables;
};

const node: ClientRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "accountId"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "accountId"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
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
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "dashboardAccountQuery",
    "selections": [
      {
        "kind": "ClientExtension",
        "selections": [
          {
            "alias": null,
            "args": (v1/*: any*/),
            "concreteType": null,
            "kind": "LinkedField",
            "name": "node",
            "plural": false,
            "selections": [
              {
                "kind": "InlineFragment",
                "selections": [
                  {
                    "args": null,
                    "kind": "FragmentSpread",
                    "name": "dashboardAccountFragment"
                  }
                ],
                "type": "Account",
                "abstractKey": null
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "dashboardAccountQuery",
    "selections": [
      {
        "kind": "ClientExtension",
        "selections": [
          {
            "alias": null,
            "args": (v1/*: any*/),
            "concreteType": null,
            "kind": "LinkedField",
            "name": "node",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "__typename",
                "storageKey": null
              },
              (v2/*: any*/),
              {
                "kind": "InlineFragment",
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "User",
                    "kind": "LinkedField",
                    "name": "user",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "name",
                        "storageKey": null
                      },
                      (v2/*: any*/)
                    ],
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "currentBalance",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Credit",
                    "kind": "LinkedField",
                    "name": "credits",
                    "plural": true,
                    "selections": (v4/*: any*/),
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Debit",
                    "kind": "LinkedField",
                    "name": "debits",
                    "plural": true,
                    "selections": (v4/*: any*/),
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Transaction",
                    "kind": "LinkedField",
                    "name": "transactions",
                    "plural": true,
                    "selections": [
                      (v3/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "date",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "type",
                        "storageKey": null
                      },
                      (v2/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "type": "Account",
                "abstractKey": null
              }
            ],
            "storageKey": null
          }
        ]
      }
    ]
  },
  "params": {
    "cacheID": "e0ba57bf9ec2466ba5da769041af47a6",
    "id": null,
    "metadata": {},
    "name": "dashboardAccountQuery",
    "operationKind": "query",
    "text": null
  }
};
})();

(node as any).hash = "22431421b18feeb57e80c659fc83eee0";

export default node;
