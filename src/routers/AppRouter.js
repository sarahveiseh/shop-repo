import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Homepage from "../pages/Homepage";
import HatsPage from "../pages/HatsPage";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TopsPage from "../pages/TopsPage";
import BottomsPage from "../pages/BottomsPage";
import MenPage from "../pages/MenPage";
import WomenPage from "../pages/WomenPage";

const AppRouter = () => (
  <div>
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/shop/hats" component={HatsPage} />
          <Route exact path="/shop/top" component={TopsPage} />
          <Route exact path="/shop/bottom" component={BottomsPage} />
          <Route exact path="/shop/men" component={MenPage} />
          <Route exact path="/shop/women" component={WomenPage} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  </div>
);

export default AppRouter;
