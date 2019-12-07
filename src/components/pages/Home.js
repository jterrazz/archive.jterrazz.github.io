import React, {useEffect} from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import ProjectsGrid from "../organisms/ProjectsGrid";
import AboutMeSection from "../organisms/AboutMeSection";
import IntroductionSection from "../organisms/IntroductionSection";
import {Parallax} from "react-scroll-parallax";

const Home = props => {

  return (
    <div>
        <div style={{height: '80vh'}} className="position-relative home-bg">
          <div className="position-absolute w-100 h-100">

            <Container className="w-100 h-100 d-flex flex-column align-items-center justify-content-center text-center">
              <div className="small text-uppercase font-weight-500 text-muted">
                Hello
              </div>
              <h1 className="mb-4">
                I create <b>clean, robust, scalable and powerful</b> applications for the new world, same quality from backend to frontend.
              </h1>
              <Button variant="dark" className="rounded-max font-weight-500 px-3">My work</Button>
            </Container>

          </div>

          <div style={{opacity: 0.8}}>
            <div className="position-absolute" style={{bottom: "5%", left: "10%"}}>
              <div className="position-relative">
                <div className="position-absolute" style={{bottom: 20, right: 20}}>
                  <Parallax y={[40, -40]}>
                  <img src="/images/shape-3.svg" width={200}/>
                  </Parallax>
                </div>
                <Parallax y={[40, -20]}>
                  <img src="/images/shape-1.svg" width={200}/>
                </Parallax>
              </div>
            </div>
            <div className="position-absolute" style={{left: -50, top: 0, transform: "rotate(-90deg)"}}>
              <Parallax x={[40, -40]}>
                <img src="/images/shape-2a.svg" width={200}/>
              </Parallax>
            </div>

            <div className="position-absolute" style={{bottom: "15%", right: "5%"}}>
              <div className="position-relative">
                <Parallax y={[70, -70]}>
                  <img src="/images/shape-4.svg" width={250}/>
                </Parallax>
                <div className="position-absolute" style={{top: -30, right: -40}}>
                  <div className="position-relative">
                    <Parallax y={[70, -70]}>
                      <img src="/images/shape-5a.svg" width={180}/>
                    </Parallax>
                    <div className="position-absolute" style={{top: 0, right: 40}}>
                      <Parallax y={[200, -200]}>
                        <img src="/images/shape-5b.svg" width={50}/>
                      </Parallax>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>



          {/*<img src="/images/shape-2a.svg" className="position-absolute" style={{top: 20, right: 20}} width={300}/>*/}
          {/*<img src="/images/shape-2b.svg" className="position-absolute" style={{top: 20, right: 20}} width={300}/>*/}
          {/*<img src="/images/shape-3a.svg" className="position-absolute" style={{top: 20, right: 20}} width={300}/>*/}
          {/*<img src="/images/shape-3.svg" className="position-absolute" style={{top: 20, right: 20}} width={300}/>*/}
          {/*<img src="/images/shape-4.svg" className="position-absolute" style={{top: 20, right: 20}} width={300}/>*/}
          {/*<img src="/images/shape-4b.svg" className="position-absolute" style={{top: 20, right: 20}} width={300}/>*/}
        </div>

      <div className="bg-clear p-5">
        <Container>
          <IntroductionSection/>
        </Container>
      </div>

      <Container className="py-5">
        <AboutMeSection/>
      </Container>

      <Container className="py-5">
        <ProjectsGrid/>
      </Container>

      <div className="bg-dark text-white p-5">
        <Container>
          <h2>My medium stories</h2>
          <p>Little explaination here</p>
          <p>Story 1</p>
          <p>Story 2</p>
          <p>Story 3</p>
          <p>Interested in learning more ? Access all my stories here</p>
        </Container>
      </div>

    </div>
  )
}

export default Home
