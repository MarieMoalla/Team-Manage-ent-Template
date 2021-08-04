import React from "react";
import { Nav } from "shards-react";

import Notification from "./Notification";
import Action from "./Action";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
  <Nav navbar className="border-left flex-row">
    <Notification />
    <Action />
  </Nav>
);