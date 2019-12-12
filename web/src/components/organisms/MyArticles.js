import React from "react";
import Row from "react-bootstrap/Row";
import {useTranslation} from "react-i18next";
import ArticleCell from "../molecules/ArticleCell";

const MyArticles = props => {
  const {t} = useTranslation();

  return (
    <div>
      <h2>{t('myArticlesTitle')}</h2>
      <p className="text-muted mb-5">{t('myArticlesSubtitle')}</p>
      <Row className="mb-5">
        {props.articles.map(article => <ArticleCell {...article}/>)}
      </Row>
      <a href="https://medium.com/a-42-journey">
        <p className="font-italic text-white font-weight-500">{t('myArticlesMore')}</p>
      </a>
    </div>
  )
}

export default MyArticles
