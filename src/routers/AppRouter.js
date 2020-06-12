import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Homepage from "../pages/Homepage";
import HatsPage from "../pages/HatsPage";

const AppRouter = () => (
  <div>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop/hats" component={HatsPage} />
      </Switch>
    </BrowserRouter>
  </div>
);

export default AppRouter;
