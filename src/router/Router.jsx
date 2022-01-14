import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import React from "react";
import Pokemon from "../components/Pokemon";
import TermsAndConditions from "../components/TermsAndConditions";
import Home from "../components/Home";
import Error404 from "../components/Error404";

import MoveDetails from "../components/MoveDetails";
import Breadcrumbs from "../components/Breadcrumbs";

const Router = () => {
  return (
    <BrowserRouter>
      <Breadcrumbs />
      <Switch>
        <Route exact path="/pokemon/:name">
          <Pokemon />
        </Route>
        <Route exact path="/pokemon/:name/moves/:move">
          <MoveDetails />
        </Route>
        <Route exact path="/terms-conditions">
          <TermsAndConditions />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="*">
          <Error404 />
        </Route>
      </Switch>
      <footer>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/terms-conditions">Terms & Conditions</Link>
          </li>
        </ul>
      </footer>
    </BrowserRouter>
  );
};

export default Router;
