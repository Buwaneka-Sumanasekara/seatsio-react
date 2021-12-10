import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import {HomePage,ChartDesignerPage} from "../../src/pages";

function Navigation() {
  return (
    <BrowserRouter>
        <Switch>
          <Route path="/" component={HomePage} exact/>
          <Route path="/chart-designer" component={ChartDesignerPage} exact/>
        </Switch>
    </BrowserRouter>
  );
}

export default Navigation;
