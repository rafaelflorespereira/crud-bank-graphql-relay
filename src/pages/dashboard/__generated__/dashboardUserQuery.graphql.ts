/**
 * @generated SignedSource<<8d17b41b0554a38cd263722fb01e2baf>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ClientRequest, ClientQuery } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type dashboardUserQuery$variables = Record<PropertyKey, never>;
export type dashboardUserQuery$data = {
  readonly node: {
    readonly __id?: string;
    readonly " $fragmentSpreads": FragmentRefs<"userInfoDashboardFragment">;
  } | null | undefined;
};
export type dashboardUserQuery = {
  response: dashboardUserQuery$data;
  variables: dashboardUserQuery$variables;
};

const node: ClientRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "id",
    "value": 1
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "dashboardUserQuery",
    "selections": [
      {
        "kind": "ClientExtension",
        "selections": [
          {
            "alias": null,
            "args": (v0/*: any*/),
            "concreteType": null,
            "kind": "LinkedField",
            "name": "node",
            "plural": false,
            "selections": [
              {
                "kind": "InlineFragment",
                "selections": [
                  (v1/*: any*/),
                  {
                    "args": null,
                    "kind": "FragmentSpread",
                    "name": "userInfoDashboardFragment"
                  }
                ],
                "type": "User",
                "abstractKey": null
              }
            ],
            "storageKey": "node(id:1)"
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
    "name": "dashboardUserQuery",
    "selections": [
      {
        "kind": "ClientExtension",
        "selections": [
          {
            "alias": null,
            "args": (v0/*: any*/),
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
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "id",
                "storageKey": null
              },
              {
                "kind": "InlineFragment",
                "selections": [
                  (v1/*: any*/),
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
                "type": "User",
                "abstractKey": null
              }
            ],
            "storageKey": "node(id:1)"
          }
        ]
      }
    ]
  },
  "params": {
    "cacheID": "318c622352f41136691e8a7d9bdfabc9",
    "id": null,
    "metadata": {},
    "name": "dashboardUserQuery",
    "operationKind": "query",
    "text": null
  }
};
})();

(node as any).hash = "9c4e25cd90c798cc6f6c79f8ee4a0e3d";

export default node;
