import {Link} from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import React from "react";
import "./TheNavBar.scss"

const TheNavBar = props => {
  return (
    <Navbar bg="white" sticky="top">
      <Link to="/">
        <Navbar.Brand className="navbar-brand text-dark">jterrazz</Navbar.Brand>
      </Link>

      <Nav className="mx-auto d-flex align-items-center">
        <div className="green-dot mr-2"/>
        <div className="small font-weight-500">Available for work</div>
      </Nav>

      <div className="small font-weight-600">
        <span className="mr-1">EN</span>
        <span>FR</span>
      </div>

      <Dropdown>
        <Dropdown.Toggle id="dropdown-custom-components">
          wefwef
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item eventKey="1">Red</Dropdown.Item>
          <Dropdown.Item eventKey="2">Blue</Dropdown.Item>
          <Dropdown.Item eventKey="3" active>
            Orange
          </Dropdown.Item>
          <Dropdown.Item eventKey="1">Red-Orange</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <button className="hamburger hamburger--collapse p-0 ml-3" type="button">
        <span className="hamburger-box">
          <span className="hamburger-inner"/>
        </span>
      </button>
    </Navbar>
  )
}

export default TheNavBar
