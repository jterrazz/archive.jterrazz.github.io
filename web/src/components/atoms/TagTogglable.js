import React from "react";
import './TagTogglable.scss'

const TagTogglable = props => {
  const onClick = () => {
    if (props.onToggle) {
      props.onToggle(!props.selected);
    }
  };

  return (
    <button onClick={onClick} className={props.className + " border d-inline-flex align-items-center tag-togglable animated" + (props.selected ? " active" : "") + (props.small ? " small": "")}>
      <span>{props.children}</span>
      <span className="plus animated"/>
    </button>
  )
};

export default TagTogglable
