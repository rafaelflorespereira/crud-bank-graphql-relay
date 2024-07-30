/**
 * @generated SignedSource<<cff71cc8a14f1fa300da0ad6d76cab25>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ClientRequest, ClientQuery } from 'relay-runtime';
export type dashboardUserQuery$variables = {
  userId: string;
};
export type dashboardUserQuery$data = {
  readonly user: {
    readonly email: string | null | undefined;
    readonly id: string;
    readonly name: string | null | undefined;
  };
};
export type dashboardUserQuery = {
  response: dashboardUserQuery$data;
  variables: dashboardUserQuery$variables;
};

const node: ClientRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "userId"
  }
],
v1 = [
  {
    "kind": "ClientExtension",
    "selections": [
      {
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "id",
            "variableName": "userId"
          }
        ],
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "user",
        "plural": false,
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "dashboardUserQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "dashboardUserQuery",
    "selections": (v1/*: any*/)
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

(node as any).hash = "01b2ce1d9fbe296456365b15241721c3";

export default node;
