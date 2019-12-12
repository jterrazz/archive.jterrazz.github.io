import React from "react";

const DropdownLabel = props => {
  const positionStyle = {
    right: 0,
    bottom: 0,
    marginBottom: "130%"
  }

  return (
    <div className="mydropdown position-relative">
      <div className="mydropdown-toggle">{props.children}</div>
      <div className="position-absolute mydropdown-label animated" style={positionStyle}>
        <p className="py-1 px-2 bg-dark text-white font-weight-600 small text-nowrap rounded m-0">
          {props.label}
        </p>
      </div>
    </div>
  )
}

export default DropdownLabel
