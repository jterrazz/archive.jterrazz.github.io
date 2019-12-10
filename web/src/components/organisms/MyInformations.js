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
          <p>Scalable, easy to read code</p>
          <p>State of the art documentations</p>
          <p>The latest technos / best practice in Web /Software development</p>
          <p>A real care about design, both on the code and on the visual</p>
          <p>Alumni of the innovative and best french programming school 42</p>
        </Col>

        <Col xs={7}>
          <Parallax x={[20, 0]}>
            <Terminal/>
          </Parallax>
        </Col>
      </Row>

      Articles
    </div>
  )
};

export default MyInformations
