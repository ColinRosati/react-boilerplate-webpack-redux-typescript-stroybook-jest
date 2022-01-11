import { FC } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "views/Home/Home";

const Routes: FC = () =>(
  <Switch>
    <Route path="/">
      <Home />
    </Route>
  </Switch>
);

export default Routes;
