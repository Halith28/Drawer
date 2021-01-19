import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import routes from "./routes";
import PrivateRoute from "./private_router";

import {
  // Login,
  // SignUp,
  Home,
  FormConfigure,
  Dashboard,
  ResponsiveDrawer,
  PersistentDrawerLeft,
} from "./../screens";

const RouterApp = (props) => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route path={routes.login} component={Login}/> */}
        {/* <Route path={routes.signup} component={SignUp}/> */}
        <PrivateRoute path={routes.home} component={Home} />
        <PrivateRoute path={routes.formConfigure} component={FormConfigure} />
        <PrivateRoute path={routes.dashboard} component={Dashboard} />
        <PrivateRoute path={routes.drawer} component={ResponsiveDrawer} />
        <PrivateRoute path={routes.drawer2} component={PersistentDrawerLeft} />
      </Switch>
    </Router>
  );
};

export default RouterApp;
