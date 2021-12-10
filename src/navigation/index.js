import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import {HomePage,ChartDesignerHomePage,ChartDesignerCreatePage} from "../../src/pages";

function Navigation() {
  return (
    <BrowserRouter>
        <Switch>
          <Route path="/" component={HomePage} exact/>
          <Route path="/chart-designer" component={ChartDesignerHomePage} exact/>
          <Route path="/chart-designer/new" component={ChartDesignerCreatePage} exact/>
        </Switch>
    </BrowserRouter>
  );
}

export default Navigation;
