import React, {useState} from "react";
import TagTogglable from "../atoms/TagTogglable";
import Button from "react-bootstrap/Button";

const ProjectsGrid = props => {
  const TAGS = ['Personal', 'Professional', 'Hackathons'];
  const [tags, setTags] = useState(TAGS.map(tag => ({ name: tag, active: false })));

  const onTagToggle = name => active => {
    setTags(tags.map(el => el.name === name ? ({ name, active }) : el))
  };

  return (
    <div>
      <h2 className="mb-4">My projects</h2>
      <span className="font-weight-600 mr-2">Tags:</span>
      {tags.map(tag =>
        <TagTogglable className="mr-2" key={tag.name} onToggle={onTagToggle(tag.name)} selected={tag.active}>{tag.name}</TagTogglable>
      )}
      <Button variant="transparent" className="font-weight-600 text-muted">Select
        all</Button>
    </div>
  )
};

export default ProjectsGrid
