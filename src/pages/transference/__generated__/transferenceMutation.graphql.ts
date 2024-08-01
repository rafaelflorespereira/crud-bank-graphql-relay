/**
 * @generated SignedSource<<648bfdf132b1152355d034a2cd78f801>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ClientRequest, Mutation } from 'relay-runtime';
export type CreateTransactionInput = {
  amount: number;
  fromId: string;
  toId: string;
};
export type transferenceMutation$variables = {
  input: CreateTransactionInput;
};
export type transferenceMutation$data = {
  readonly createTransference: {
    readonly id: string;
  } | null | undefined;
};
export type transferenceMutation = {
  response: transferenceMutation$data;
  variables: transferenceMutation$variables;
};

const node: ClientRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
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
            "name": "input",
            "variableName": "input"
          }
        ],
        "concreteType": "Transaction",
        "kind": "LinkedField",
        "name": "createTransference",
        "plural": false,
        "selections": [
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
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "transferenceMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "transferenceMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "209d669aeddebb47f744bbdb02ad4584",
    "id": null,
    "metadata": {},
    "name": "transferenceMutation",
    "operationKind": "mutation",
    "text": null
  }
};
})();

(node as any).hash = "85b664a2f1e147d48711f9fa321f3d1a";

export default node;
