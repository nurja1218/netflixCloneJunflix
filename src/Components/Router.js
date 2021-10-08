import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "Routes/Home";
import TV from "Routes/TV";
import Detail from "Routes/Detail";
import Search from "Routes/Search";

export default () => (
  <Router>
    <>
      <Route path="/" exact component={Home} />
      <Route path="/tv" exact component={TV} />
      <Route path="/detail" exact component={Detail} />
      <Route path="/search" exact component={Search} />
    </>
  </Router>
);
