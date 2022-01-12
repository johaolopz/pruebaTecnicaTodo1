import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import Pokemon from "./Pokemon";
import TermsAndConditions from "./TermsAndConditions";
import Home from "./Home";
import Error404 from "./Error404";

import MoveDetails from "./MoveDetails";

const Router = () => {
  return (
    <BrowserRouter>
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
