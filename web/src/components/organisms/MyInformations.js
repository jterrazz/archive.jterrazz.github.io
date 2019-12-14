import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Parallax} from "react-scroll-parallax";
import Terminal from "../molecules/Terminal";
import { useTranslation } from "react-i18next";
import Button from "react-bootstrap/Button";

const MyInformations = props => {
  const { t } = useTranslation();

  return (
    <div>
      <h2 className="mb-3 mb-md-4">{t('myInformationsTitle')}</h2>

      <Row>
        <Col xs={12} md={5} className="mb-3 mb-md-4">
          <p className="mb-3 mb-md-4"  dangerouslySetInnerHTML={{__html: t('myInformationsText')}}/>

          <Button variant="dark" className="rounded-pill" onClick={props.handleScrollToArticles}>{t('myInformationsArticleBtn')}</Button>
        </Col>

        <Col xs={12} md={7}>
          <div className="d-none d-md-block">
            <Parallax x={[20, 0]}>
              <Terminal/>
            </Parallax>
          </div>
        </Col>
      </Row>
    </div>
  )
};

export default MyInformations
