import React, {useState} from "react";
import TagTogglable from "../atoms/TagTogglable";
import Button from "react-bootstrap/Button";
import ProjectCell from "../molecules/ProjectCell";
import Masonry from 'react-masonry-css'
import config from "../../config";

const MyProjects = props => {
  const TAGS = ['Personal', 'Professional', 'Hackathons'];

  const [tags, setTags] = useState(TAGS.map(tag => ({ name: tag, active: true })));

  const activeTags = tags.map(tag => tag.active ? tag.name : null).filter(tag => tag !== null)
  console.log(activeTags)
  const filteredProjects = props.projects.filter(project => {
    return activeTags.indexOf(project.category) > -1
  })

  const onTagToggle = name => active => {
    setTags(tags.map(el => el.name === name ? ({ name, active }) : el))
  };

  return (
    <div>
      <h2 className="mb-4">My projects</h2>

      <nav className="mb-4">
        <span className="font-weight-600 mr-2">Tags:</span>
        {tags.map(tag =>
          <TagTogglable className="mr-2" key={tag.name} onToggle={onTagToggle(tag.name)} selected={tag.active}>{tag.name}</TagTogglable>
        )}
        <Button variant="transparent" className="font-weight-600 text-muted">Select
          all</Button>
      </nav>

      <Masonry
        breakpointCols={3}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column">
        {filteredProjects.map(project => (
          <li>
            <ProjectCell project={project}/>
          </li>
        ))}
      </Masonry>

      <p className="font-italic">And many others available on <a href={config.githubProfileUrl}>Github</a> and <a href={config.devpostProfileUrl}>Devpost</a></p>

    </div>
  )
};

export default MyProjects
