import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';
import logo from "../img/nofotos.png";

function Menu() {

  return (
    <div className="navbar">
      <Navbar>
        <NavbarBrand className="logo" href="/">
        <img src={logo} alt="" />
        </NavbarBrand>
          <Nav navbar className="container">
            <UncontrolledDropdown>
              <DropdownToggle nav>
                <h2> Options</h2>
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>Option 1</DropdownItem>
                <DropdownItem>Option 2</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText>
            <h1>User</h1>
          </NavbarText>
      </Navbar>
    </div>
  );
}

export default Menu;