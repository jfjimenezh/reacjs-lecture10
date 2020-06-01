import React from "react";

import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

import Home from "../components/home";
import NotFound from "../components/notFound";
import SingIn from "../components/singIn";
import SingUp from "../components/singUp";
import verUsuarios from "../components/verUsuarios";

function AppRoutes() {
  return (
    <Router>
      <Switch>
        <Route exact={true} path='/' component={Home} />
        <Route exact={true} path='/SingUp' component={SingUp} />
        <Route exact={true} path='/SingIn' component={SingIn} />
        <Route exact={true} path='/notFound' component={NotFound} />
        <Route exact={true} path='/verUsuarios' component={verUsuarios} />
        <Redirect to='/notFound' />
      </Switch>
    </Router>
  );
}

export default AppRoutes;
