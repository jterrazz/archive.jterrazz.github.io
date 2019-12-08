import React, {useEffect} from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import MyProjects from "../organisms/MyProjects";
import MyInformations from "../organisms/MyInformations";
import MyIntroduction from "../organisms/MyIntroduction";
import ShapesParallaxBackground from "../molecules/ShapesParallaxBackground";
import WelcomeMessage from "../organisms/WelcomeMessage";
import MyArticles from "../organisms/MyArticles";

const HomePage = props => {

  return (
    <div>
        <div style={{height: '80vh'}} className="position-relative bg-home">
          <div className="position-absolute w-100 h-100">
            <Container className="w-100 h-100 d-flex flex-column align-items-center justify-content-center text-center">
              <WelcomeMessage/>
            </Container>
          </div>
          <div className="position-absolute w-100 d-flex justify-content-center" style={{bottom: 0, marginBottom: -20}}>
            <img src="/images/waving-hand.svg" width={42}/>
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

      <div>
        <Container className="py-5">
          <MyProjects/>
        </Container>
      </div>

      <div className="bg-dark text-white p-5">
        <Container>
          <MyArticles/>
        </Container>
      </div>

      <div className="bg-dark text-white">
        <Container>
          <div className="bg-primary p-5">
            Whant to contact me?
            <span className="text-dark">Let's get started!</span>
            <Button>Email me</Button>
            <Button>Access form</Button>
          </div>
        </Container>
      </div>

    </div>
  )
}

export default HomePage
