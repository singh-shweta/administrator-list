import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import Administrators from "./components/administrators";
import NewAdminForm from "./components/newAdminForm";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/dashboard" component={Administrators} />
        <Route path="/admin/new" component={NewAdminForm} />
        <Redirect from="/" exact to="/dashboard" />
      </Switch>
    );
  }
}

export default App;
