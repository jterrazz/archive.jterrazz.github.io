import React from "react";
import Row from "react-bootstrap/Row";
import {useTranslation} from "react-i18next";
import ArticleCell from "../molecules/ArticleCell";
import Col from "react-bootstrap/Col";

const MyArticles = props => {
  const {t} = useTranslation();

  return (
    <div>
      <h2>{t('myArticlesTitle')}</h2>
      <p className="text-muted mb-5">{t('myArticlesSubtitle')}</p>
      <Row className="mb-5">
        {props.articles.map(article => (
          <Col xs={12} md={4} className="mb-3 mb-md-0">
            <ArticleCell {...article}/>
          </Col>
          ))}
      </Row>
      <a href="https://medium.com/a-42-journey">
        <p className="font-italic text-white font-weight-500">{t('myArticlesMore')}</p>
      </a>
    </div>
  )
}

export default MyArticles
