/**
 * @generated SignedSource<<ab0a859a471f333fdd4f9f4dc91f6dc7>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type userInfoDashboardFragment$data = {
  readonly email: string | null | undefined;
  readonly id: string;
  readonly name: string | null | undefined;
  readonly " $fragmentType": "userInfoDashboardFragment";
};
export type userInfoDashboardFragment$key = {
  readonly " $data"?: userInfoDashboardFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"userInfoDashboardFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "userInfoDashboardFragment",
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
      ]
    }
  ],
  "type": "User",
  "abstractKey": null
};

(node as any).hash = "14b29dae1761d6f6d24da459f91b58e8";

export default node;
