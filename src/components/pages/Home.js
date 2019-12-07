import React, {useEffect} from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import MyProjects from "../organisms/MyProjects";
import MyInformations from "../organisms/MyInformations";
import MyIntroduction from "../organisms/MyIntroduction";
import ShapesParallaxBackground from "../molecules/ShapesParallaxBackground";
import WelcomeMessage from "../organisms/WelcomeMessage";
import MyArticles from "../organisms/MyArticles";

const Home = props => {

  return (
    <div>
        <div style={{height: '80vh'}} className="position-relative bg-home">
          <div className="position-absolute w-100 h-100">
            <Container className="w-100 h-100 d-flex flex-column align-items-center justify-content-center text-center">
              <WelcomeMessage/>
            </Container>
          </div>

          {/*<ShapesParallaxBackground/>*/}
        </div>

      <div className="bg-clear p-5">
        <Container>
          <MyIntroduction/>
        </Container>
      </div>

      <Container className="py-5">
        <MyInformations/>
      </Container>

      <div className="bg-clear">
        <Container className="py-5">
          <MyProjects/>
        </Container>
      </div>

      <div className="bg-dark text-white p-5">
        <Container>
          <MyArticles/>
        </Container>
      </div>

      <div>
        Want to contact me ????
        Mail
        Send message from this site
      </div>

    </div>
  )
}

export default Home
