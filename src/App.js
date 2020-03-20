import React, { Component } from "react";

import Layout from "./components/Layout";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./App.css";

import Home from "./views/Home";
import UserDetail from "./views/UserDetail";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/detail/:userId" component={UserDetail} />
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
