import React from "react";
import config from "../../config";
import {ParallaxBanner} from "react-scroll-parallax/cjs";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {useTranslation} from "react-i18next";

const MyIntroduction = props => {
  const { t } = useTranslation();

  return (
    <div>
      <div className="position-relative">
        <ParallaxBanner
          className="w-100 mx-auto mb-3 mb-md-5"
          layers={[
            {
              image: '/images/anonymous.png',
              amount: 0.2,
            },
          ]}
          style={{
            height: '320px',
            marginTop: -120
          }}
        />
        <div className="position-absolute d-flex justify-content-center" style={{left: 0, right: 0, top: -22}}>
          <div className="bg-dark d-flex justify-content-center align-items-center" style={{width: 44, height: 44}}>
            <img src="/images/arrow-down.svg" width={18}/>
          </div>
        </div>
      </div>

      <Row>
        <Col xs={12} md={8}>
          <h2 className="mb-3 mb-md-5">
            {t('myIntroductionTitle')}
          </h2>
          <p className="font-weight-500 mb-3 mb-md-5" dangerouslySetInnerHTML={{__html: t('myIntroductionText')}}/>
        </Col>
      </Row>

      <p className="text-uppercase font-weight-bold mb-3 mb-md-5"><a href={"mailto:" + config.email} className="text-dark">{config.email}</a></p>
    </div>
  )
}

export default MyIntroduction
