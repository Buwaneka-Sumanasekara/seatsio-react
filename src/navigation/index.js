import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import HomePage from "../../src/pages/Home";

function Navigation() {
  return (
    <BrowserRouter>
        <Switch>
          <Route path="/" component={HomePage} exact/>
          <Route path="/events" component={HomePage} exact/>
        </Switch>
    </BrowserRouter>
  );
}

export default Navigation;
