import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Article = props => {
  return (
    <Col xs={4}>
      <li className="article-cell bg-dark-clear rounded overflow-hidden">
        <div className="w-100 bg-img-cover position-relative" style={{ paddingBottom: "100%", backgroundImage: `url(${props.imageSrc})` }}>
          <div className="position-absolute w-100 h-100 d-flex align-items-end p-3 bg-text-hover">
            <h3 className="m-0 font-weight-600">{props.title}</h3>
          </div>
        </div>
        <div className="p-3 text-muted font-weight-500">
          <div className="text-uppercase mb-2">Article | {props.date.toDateString()}</div>
          <p className="m-0 font-weight-500">{props.description}</p>
        </div>
      </li>
    </Col>
  )
}

const MyArticles = props => {
  const articles = [
    { imageSrc: "https://miro.medium.com/max/5312/1*P6vFidQIJazsiNkh0ijqtQ.jpeg", title: "Everything you need", date: new Date(), description: "suka" },
    { imageSrc: "https://miro.medium.com/max/5312/1*P6vFidQIJazsiNkh0ijqtQ.jpeg", title: "Everything you need", date: new Date(), description: "suka" },
    { imageSrc: "https://miro.medium.com/max/5312/1*P6vFidQIJazsiNkh0ijqtQ.jpeg", title: "Everything you need", date: new Date(), description: "suka" },
  ]
  return (
    <div>
      <h2>My medium stories</h2>
      <p className="text-muted mb-5">Articles about unix, security and web development</p>
      <Row className="mb-5">
        {articles.map(article => <Article {...article}/>)}
      </Row>
      <p className="text-muted">Interested in learning more ? Access all my stories here</p>
    </div>
  )
}

export default MyArticles
