import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import TheNavBar from "./components/organisms/TheNavBar";
import Home from "./components/pages/Home";

export default function App() {
  return (
    <Router>
      <TheNavBar/>
      <div>
        <Switch>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
