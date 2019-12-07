import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Parallax} from "react-scroll-parallax";
import Terminal from "../molecules/Terminal";

const MyInformations = props => {
  return (
    <div>
      <h2 className="mb-4">About me</h2>

      <Row>
        <Col xs={5}>
          Scalable, easy to read code
          State of the art documentations
          The best practice in Web development
          A real care about design, both on the code and on the visual
          Alumni of the innovative and best french programming school 42
        </Col>

        <Col xs={7}>
          <Parallax x={[20, 0]}>
            <Terminal/>
          </Parallax>
        </Col>
      </Row>
    </div>
  )
};

export default MyInformations
