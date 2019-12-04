import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

const Home = props => {
  return (
    <div>
        <div style={{paddingBottom: '45%'}} className="position-relative">
          <div className="position-absolute w-100 h-100">
            <Container className="w-100 h-100 d-flex flex-column align-items-center justify-content-center text-center">
              <div className="small text-uppercase font-weight-500 text-muted">
                Hello
              </div>
              <h1>
                I create <b>clean, robust, scalable and powerful</b> applications for the new world.
              </h1>
              <Button variant="dark" className="rounded-max font-weight-500 px-3">My work</Button>
            </Container>
          </div>
        </div>

      <div className="bg-dark p-5 text-white">
        <Container>
          <h2>My stories</h2>
        </Container>
      </div>

      <Container>
        <div>
          👋
          Hey there *waves*, my name is Jean-Baptiste, developer, XXX and XXX.
          I love connecting brands and companies with their customers through performant code, design cared interfaces.
          I can help you with ...
          But enough about me, how can I help you ?

          <span>jterrazz@protonmail.com</span>
        </div>
      </Container>

    </div>
  )
}

export default Home
