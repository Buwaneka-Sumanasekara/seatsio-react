import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import {HomePage,ChartDesignerHomePage,ChartDesignerCreatePage,EventManagerPage,AllEventsPage} from "../../src/pages";

function Navigation() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/"  exact element={<HomePage />} />
          <Route path="/chart-designer" exact element={<ChartDesignerHomePage />} />
          <Route path="/chart-designer/:id" exact element={<ChartDesignerCreatePage />} />
          <Route path="/chart-designer/new" exact element={<ChartDesignerCreatePage />} />
          <Route path="/events" exact element={<AllEventsPage />} />
          <Route path="/event/:id" exact element={<EventManagerPage />} />
        </Routes>
    </BrowserRouter>
  );
}

export default Navigation;
