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
        <label className="font-weight-600 mr-2">Categories:</label>
        {tags.map(tag =>
          <TagTogglable className="mr-2" key={tag.name} onToggle={onTagToggle(tag.name)} selected={tag.active}>{t(`tags.${tag.name}`)}</TagTogglable>
        )}
        <Button variant="transparent" className="font-weight-600 text-muted">Select
          all</Button>

        {/*<label className="font-weight-600 mr-2">Tags:</label>*/}
        {/*{TAGSSS.map(tag =>*/}
        {/*  <TagTogglable className="mr-2" key={tag.name} onToggle={onTagToggle(tag.name)} selected={tag.active} small>{tag.name}</TagTogglable>*/}
        {/*)}*/}

        {/*<label>Hide unfinished projects</label>*/}
      </nav>

      <Masonry
        breakpointCols={3}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column">
        {filteredProjects.map(project => (
          <li key={project.name}>
            <ProjectCell project={project}/>
          </li>
        ))}
      </Masonry>

      <p className="font-italic">And many others available on <a href={config.githubProfileUrl}>Github</a> and <a href={config.devpostProfileUrl}>Devpost</a></p>

    </div>
  )
};

export default MyProjects
