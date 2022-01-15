import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import React from "react";
import Pokemon from "../components/Pokemon";
import TermsAndConditions from "../components/TermsAndConditions";
import Home from "../components/Home";
import Error404 from "../components/Error404";

import MoveDetails from "../components/MoveDetails";
import Breadcrumbs from "../components/Breadcrumbs";
import { SvgIcon } from "@mui/material";
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import "../styles/global.css"

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
        <hr/>
        <ul className="footerUl">
          <li>
            <Link to="/" className="linksFooter">
              <SvgIcon>
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
              </SvgIcon>
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link to="/terms-conditions" className="linksFooter">
              <HistoryEduIcon />
              <span>Terms & Conditions</span>
            </Link>
          </li>
        </ul>
      </footer>
    </BrowserRouter>
  );
};

export default Router;
