import React, {useEffect} from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import MyProjects from "../organisms/MyProjects";
import MyInformations from "../organisms/MyInformations";
import MyIntroduction from "../organisms/MyIntroduction";
import WelcomeMessage from "../organisms/WelcomeMessage";
import MyArticles from "../organisms/MyArticles";
import {ParallaxBanner} from "react-scroll-parallax/cjs";
import {HashRouter as Router, Link} from "react-router-dom";
import ShapesParallaxBackground from "../molecules/ShapesParallaxBackground";
import config from "../../config";
import TheNavBar from "../organisms/TheNavBar";
import SocialMediaIcons from "../molecules/SocialMediaIcons";

const HomePage = props => {
  const projectsRef = React.createRef();

  function handleScrollToProjects(event) {
    window.scroll({
      top: projectsRef.current.offsetTop,
      behavior: 'smooth'
    })
  }

  return (
    <div>
      <div className={"position-fixed h-100 d-flex align-items-center ml-3 animated " + (props.showMediaIcons ? "opacity-100" : "opacity-0")}>
        <SocialMediaIcons vertical transparent/>
      </div>
        <div style={{height: '100vh'}} className="position-relative">
          <div className="position-absolute w-100 h-100">
            <Container className="w-100 h-100 d-flex flex-column align-items-center justify-content-center text-center">
              <WelcomeMessage handleScrollToProjects={handleScrollToProjects}/>
            </Container>
          </div>
          {/*<div className="position-absolute w-100 d-flex justify-content-center" style={{bottom: 0, marginBottom: -20}}>*/}
          {/*  <img src="/images/waving-hand.svg" width={42}/>*/}
          {/*</div>*/}
          {/*<ShapesParallaxBackground/>*/}
        </div>

      <div className="bg-clear p-5 ">
        <Container>
          <MyIntroduction/>
        </Container>
      </div>

      <Container className="py-5">
        <MyInformations/>
      </Container>

      <div>
        <Container className="py-5" ref={projectsRef}>
          <MyProjects projects={config.projects}/>
        </Container>
      </div>

      <div className="bg-dark text-white p-5">
        <Container>
          <MyArticles articles={config.articles}/>
        </Container>
      </div>

      <div className="bg-dark text-white">
        <Container>
          <div className="bg-primary p-5 d-flex align-items-center justify-content-between rounded">
            <h4 className="font-weight-500 m-0">
              Let's get started!
            </h4>

            <div>
              <Link to="/contact">
                <Button variant="dark">Contact form</Button>
              </Link>
              <Button variant="dark" className="ml-3">Email</Button>
            </div>
          </div>
        </Container>
      </div>

    </div>
  )
}

export default HomePage
