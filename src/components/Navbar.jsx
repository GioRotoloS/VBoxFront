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
import logo from "../img/vboxlogo3.png";

function Menu({ direction, ...args }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <div>
      <Navbar style={{
        background: '#0c5aa9'
      }}>
        <NavbarBrand href="/">
        <img src={logo} alt="" style={{
          marginLeft: 20,
          width: '100%',
          height: 20
        }}/>
        </NavbarBrand>
        
        <div style={{
          marginLeft: 750,
          color: 'white'
        }}>Usuario</div>
        <navbar>
          <Nav className="me-auto" navbar>
            <UncontrolledDropdown isOpen={dropdownOpen} toggle={toggle} direction={direction} nav style={{
              marginRight: 50,
            }}>
              <DropdownToggle nav caret style={{
                color: 'white'
              }}>
                Opciones
              </DropdownToggle>
              <DropdownMenu {...args}>
                <DropdownItem href='/config'>Configuraciones</DropdownItem>
                <DropdownItem divider />
                <DropdownItem href='/login'>Salir</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </navbar>
      </Navbar>
    </div>
  );
}

export default Menu;