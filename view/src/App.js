import React, { Component } from "react";
import Admin from "layouts/Admin.js";
import Login from "views/Login.js";
import SignUp from "views/Signup.js";
import PasswordRecovery from "views/PasswordRecovery.js";
import { Route, Switch, Redirect } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/users" component={Admin} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/recover_password" component={PasswordRecovery} />
        <Redirect from="/" to="/users/dashboard" />
      </Switch>
    );
  }
}

export default App;
