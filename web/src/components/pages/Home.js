import React from "react";
import HomeTemplate from "../templates/Home";

const HomePage = props => {
  const projectsRef = React.createRef();
  const articlesRef = React.createRef();

  // TODO Merge functions
  function handleScrollToProjects(event) {
    window.scroll({
      top: projectsRef.current.offsetTop - 54,
      behavior: 'smooth'
    })
  }
  function handleScrollToArticles(event) {
    window.scroll({
      top: articlesRef.current.offsetTop - 54,
      behavior: 'smooth'
    })
  }

  return (
    <HomeTemplate handleScrollToProjects={handleScrollToProjects} handleScrollToArticles={handleScrollToArticles} projectsRef={projectsRef} articlesRef={articlesRef}  showMediaIcons={props.showMediaIcons}/>
  )
}

export default HomePage
