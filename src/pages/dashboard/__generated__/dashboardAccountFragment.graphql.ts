/**
 * @generated SignedSource<<ec314c83f17d2aae0424b0bc3299025e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type dashboardAccountFragment$data = {
  readonly credits: {
    readonly amount: number;
    readonly total: number;
  } | null | undefined;
  readonly currentBalance: number | null | undefined;
  readonly debits: {
    readonly amount: number;
    readonly total: number;
  } | null | undefined;
  readonly id: string;
  readonly transactions: ReadonlyArray<{
    readonly amount: number;
    readonly date: string | null | undefined;
    readonly type: string | null | undefined;
  } | null | undefined> | null | undefined;
  readonly user: {
    readonly name: string | null | undefined;
  };
  readonly " $fragmentType": "dashboardAccountFragment";
};
export type dashboardAccountFragment$key = {
  readonly " $data"?: dashboardAccountFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"dashboardAccountFragment">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "amount",
  "storageKey": null
},
v1 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "total",
    "storageKey": null
  },
  (v0/*: any*/)
];
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "dashboardAccountFragment",
  "selections": [
    {
      "kind": "ClientExtension",
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
            }
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
          "plural": false,
          "selections": (v1/*: any*/),
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "Debit",
          "kind": "LinkedField",
          "name": "debits",
          "plural": false,
          "selections": (v1/*: any*/),
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
            (v0/*: any*/),
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
            }
          ],
          "storageKey": null
        }
      ]
    }
  ],
  "type": "Account",
  "abstractKey": null
};
})();

(node as any).hash = "57176860617fe52d88bd95b7c7404214";

export default node;
