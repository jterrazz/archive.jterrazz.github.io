import React, {useState} from "react";
import TagTogglable from "../atoms/TagTogglable";
import Button from "react-bootstrap/Button";
import ProjectCell from "../molecules/ProjectCell";
import Masonry from 'react-masonry-css'
import config from "../../config";
import {useTranslation} from "react-i18next";

const MyProjects = props => {
  const {t} = useTranslation();
  const TAGS = ['personal', 'professional', 'hackathon'];

  const breakpointColumnsObj = {
    default: 3,
    990: 2,
    765: 1
  };

  const [tags, setTags] = useState(TAGS.map(tag => ({ name: tag, active: true })));

  const activeTags = tags.map(tag => tag.active ? tag.name : null).filter(tag => tag !== null)
  const filteredProjects = new Array( ...props.projects.filter(project => {
    return activeTags.indexOf(project.category) > -1
  }))

  filteredProjects.sort((a, b) => a.priority - b.priority);

  const onTagToggle = name => active => {
    setTags(tags.map(el => el.name === name ? ({ name, active }) : el))
  };

  return (
    <div>
      <h2 className="mb-4">{t('myProjectsTitle')}</h2>

      <nav className="mb-4">
        <label className="font-weight-600 mr-2 d-none d-md-inline-block">{t('myProjectsCategoriesLabel')}</label>
        {tags.map(tag =>
          <TagTogglable className="mr-2 mb-2 mb-md-0 px-3 py-2 px-md-4 py-md-3" key={tag.name} onToggle={onTagToggle(tag.name)} selected={tag.active}>{t(`tags.${tag.name}`)}</TagTogglable>
        )}
        {/*<Button variant="transparent" className="font-weight-600 text-muted">Select all</Button>*/}

        {/*<label className="font-weight-600 mr-2">Tags:</label>*/}
        {/*{TAGSSS.map(tag =>*/}
        {/*  <TagTogglable className="mr-2" key={tag.name} onToggle={onTagToggle(tag.name)} selected={tag.active} small>{tag.name}</TagTogglable>*/}
        {/*)}*/}

        {/*<label>Hide unfinished projects</label>*/}
      </nav>

      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column">
        {filteredProjects.map(project => (
          <li key={project.name} className="mb-3 mb-md-4">
            <ProjectCell project={project}/>
          </li>
        ))}
      </Masonry>

      <p className="font-italic m-0">And many others available on <a href={config.githubProfileUrl}>Github</a> and <a href={config.devpostProfileUrl}>Devpost</a></p>

    </div>
  )
};

export default MyProjects
