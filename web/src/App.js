import React, {useState} from "react";
import { ParallaxProvider } from 'react-scroll-parallax';
import {
  HashRouter as Router,
  Switch,
  Route,
  withRouter
} from "react-router-dom";

import TheNavBar from "./components/organisms/TheNavBar";
import HomePage from "./components/pages/Home";
import TheFooter from "./components/organisms/TheFooter";
import WelcomeModal from "./components/organisms/WelcomeModal";
import ContactPage from "./components/pages/Contact";
import SocialMediaIcons from "./components/molecules/SocialMediaIcons";
import ScrollBarPreview from "./components/molecules/ScrollBarPreview";

function App(props) {
  let last_known_scroll_position = 0;
  let ticking = false;
  const [showMediaIcons, setShowMediaIcons] = useState(true);

  function doSomething(scroll_pos) {
    if (scroll_pos > window.innerHeight / 2) {
      setShowMediaIcons(false);
    } else {
      setShowMediaIcons(true);
    }
  }

  window.addEventListener('scroll', function(e) {
    last_known_scroll_position = window.scrollY;

    if (!ticking) {
      window.requestAnimationFrame(function() {
        doSomething(last_known_scroll_position);
        ticking = false;
      });

      ticking = true;
    }
  });

  const theme = props.location.pathname === "/" ? "primary" : "";

  return (
    <Router>
      <TheNavBar/>

      <div className="position-fixed h-100 d-flex align-items-center mr-3 d-" style={{right: 0}}>
        <ScrollBarPreview/>
      </div>
      <ParallaxProvider>
        <Switch>
          <Route path="/contact">
            <ContactPage/>
          </Route>
          <Route path="/">
            <HomePage showMediaIcons={showMediaIcons}/>
          </Route>
        </Switch>
      </ParallaxProvider>
      <TheFooter variant={theme}/>
      <WelcomeModal/>
    </Router>
  );
}

const RoutedApp = withRouter(App);

export default function() {
  return (
    <Router>
      <RoutedApp/>
    </Router>
  );
}
