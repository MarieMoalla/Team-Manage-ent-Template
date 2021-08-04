import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { Default } from "./Layouts/Index";

// Route Views


import userProfile from "../src/Views/userProfile";

// eslint-disable-next-line import/no-anonymous-default-export
export default [
  {
    path: "/",
    exact: true,
    layout: Default,
    component: () => <Redirect to="/userProfile" />
  },
  {
    path: "/userProfile",
    layout: Default,
    component: userProfile
  }
];
