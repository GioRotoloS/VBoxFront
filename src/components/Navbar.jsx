import React, { useContext, useState } from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import { AuthContext } from "../utils/authContext";
import logo from "../img/vboxlogo3.png";

function Menu({ direction, ...args }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const { currentUser, logout } = useContext(AuthContext);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <div>
      <Navbar style={{
        background: '#0c5aa9',
        width: "100%"
      }}>
        <NavbarBrand href="/home">
        <img src={logo} alt="" style={{
          marginLeft: 20,
          width: '100%',
          height: 20
        }}/>
        </NavbarBrand>
        
        <div style={{
          marginLeft: 750,
          color: 'white'
        }}>{currentUser?.name}</div>
        <Navbar>
          <Nav className="me-auto" navbar>
            <UncontrolledDropdown isOpen={dropdownOpen} toggle={toggle} direction={direction} nav>
              <DropdownToggle nav caret style={{
                color: 'white'
              }}>
                Opciones
              </DropdownToggle>
              <DropdownMenu {...args}>
                <DropdownItem href='/config'>Configuraciones</DropdownItem>
                <DropdownItem divider />
                <DropdownItem onClick={logout} href="/">Salir</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Navbar>
      </Navbar>
    </div>
  );
}

export default Menu;