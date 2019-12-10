import React from "react";
import config from "../../config";
import {ParallaxBanner} from "react-scroll-parallax/cjs";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const MyIntroduction = props => {
  return (
    <div>
      <div className="position-relative">
        <ParallaxBanner
          className="w-100 mx-auto mb-5"
          layers={[
            {
              image: '/images/anonymous.png',
              amount: 0.2,
            },
          ]}
          style={{
            height: '300px',
            marginTop: -120
          }}
        />
        <div className="position-absolute d-flex justify-content-center" style={{left: 0, right: 0, top: 0}}>
          <div className="bg-primary p-5">
            <img src="/images/arrow-down.svg" width={25}/>
          </div>
        </div>
      </div>

      <Row>
        <Col className="mb-4" xs={8}>
          <h2 className="mb-5">
            Hey there *waves*, my name is Jean-Baptiste, developer, XXX and XXX.
          </h2>
          <p className="mb-5 font-weight-500">I love connecting brands and companies with their customers through performant code, design cared interfaces.
            I can help you with ...<span>But enough about me, how can I help you ?</span></p>
        </Col>
      </Row>

      <p className="text-uppercase font-weight-bold mb-5"><a href={"mailto:" + config.email} className="text-dark">{config.email}</a></p>
    </div>
  )
}

export default MyIntroduction
