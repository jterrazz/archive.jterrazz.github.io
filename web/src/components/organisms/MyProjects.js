import React, {useState} from "react";
import TagTogglable from "../atoms/TagTogglable";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import ProjectCell from "../molecules/ProjectCell";

const MyProjects = props => {
  const TAGS = ['Personal', 'Professional', 'Hackathons'];
  const PROJECTS = [
    { name: "Hypertube", link: "https://github.com/", date: new Date(), description: "A project about XXX", category: "Personal", tags: ["Frontend", "Backend", "React", "NextJS", "NodeJS", "Koa"] },
  ]
  const [tags, setTags] = useState(TAGS.map(tag => ({ name: tag, active: false })));

  const filteredProjects = PROJECTS

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

      <Row>
        {filteredProjects.map(project => <ProjectCell project={project}/>)}
      </Row>

      + 36 projects on github

      Find all my projects on github and devpost

    </div>
  )
};

export default MyProjects
