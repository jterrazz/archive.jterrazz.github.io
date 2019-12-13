import React from "react";
import {Link} from "react-router-dom";
import Container from "react-bootstrap/Container";
import SocialMediaIcons from "../molecules/SocialMediaIcons";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {useTranslation} from "react-i18next";

const TheFooter = props => {
  const {t} = useTranslation()

  return (
    <footer className="bg-dark text-white py-md-5 py-3 text-md-left text-center">
      <Container>
        <Row>
          <Col xs={12} md={4}>
            <div className="small">
              <Link to="/" className="text-white">
                <h5 className="font-weight-800">jterrazz.com</h5>
              </Link>
              <div>@2019</div>
            </div>
          </Col>
          <Col xs={12} md={4} className="d-flex justify-content-center align-items-center my-3">
            <SocialMediaIcons variant={props.variant}/>
          </Col>
          <Col xs={12} md={4}>
            <div className="text-muted text-md-right text-center small">
              <div>{t('footerMadeWith')} <span role="img" aria-label="love">❤️</span> (&
                ReactJS)
              </div>
              <div>{t('footerHostedOn')} GitHub Pages</div>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default TheFooter
