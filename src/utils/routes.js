import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Header } from "../components/Header";
import Home from "../page/Home";
import WatchedPage from "../page/WatchedPage";
import MustWatchPage from "../page/MustWatchPage";

export const Routes = () => (
  <BrowserRouter>
  <Header/>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/watched" component={WatchedPage} />
      <Route path="/mustwatch" component={MustWatchPage}/>
    </Switch>
  </BrowserRouter>
);
