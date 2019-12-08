import React from "react";
import { ParallaxProvider } from 'react-scroll-parallax';
import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import TheNavBar from "./components/organisms/TheNavBar";
import HomePage from "./components/pages/Home";
import TheFooter from "./components/organisms/TheFooter";
import WelcomeModal from "./components/organisms/WelcomeModal";
import ContactPage from "./components/pages/Contact";

export default function App() {
  return (
    <Router>
      <TheNavBar/>
        <ParallaxProvider>
          <Switch>
            <Route path="/">
              <HomePage/>
            </Route>
            <Route path="/contact">
              <ContactPage/>
            </Route>
          </Switch>
        </ParallaxProvider>
      <TheFooter/>
      <WelcomeModal/>
    </Router>
  );
}
