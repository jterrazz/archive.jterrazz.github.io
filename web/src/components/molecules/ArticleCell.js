import React from "react";

const ArticleCell = props => {
  return (
    <a href={props.link} className="text-white">
      <li className="article-cell bg-dark-clear rounded overflow-hidden">
        <div className="w-100 bg-img-cover position-relative" style={{ paddingBottom: "100%", backgroundImage: `url(${props.imageSrc})` }}>
          <div className="position-absolute w-100 h-100 d-flex align-items-end p-3 bg-text-hover">
            <h4 className="m-0 font-weight-600">{props.title}</h4>
          </div>
        </div>
        <div className="p-3 text-muted font-weight-500">
          <div className="text-uppercase mb-2">Article | {props.date.toDateString()}</div>
          <p className="m-0 font-weight-500">{props.description}</p>
        </div>
      </li>
    </a>
  )
}

export default ArticleCell
