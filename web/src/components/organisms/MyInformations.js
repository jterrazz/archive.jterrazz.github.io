import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Parallax} from "react-scroll-parallax";
import Terminal from "../molecules/Terminal";
import { useTranslation } from "react-i18next";
import Button from "react-bootstrap/Button";
import ProgressBar from "react-bootstrap/ProgressBar";

const MyInformations = props => {
  const { t } = useTranslation();

  return (
    <div>
      <h2 className="mb-4">{t('myInformationsTitle')}</h2>

      <Row>
        <Col xs={5}>
          <p className="mb-4">
            {t('myInformationsText')}
          </p>

          <Button variant="dark" className="rounded-pill mt-4" onClick={props.handleScrollToArticles}>{t('myInformationsArticleBtn')}</Button>
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
