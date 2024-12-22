import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
`;

const Icon = styled.i`
  color: #dad5c3;
  float: left;
`;
const Navegation = styled.div`
  width: 170px;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  & a {
    display: block;
    text-decoration: none;
    width: 145px;
    height: 100%;
    line-height: 50px;
    font-size: 15px;
    text-transform: uppercase;
    box-sizing: border-box;
    color: var(--text-color);
    padding-left: 20px;
    border-radius: 35px;
    transition: 0.4s;
  }
  & i {
    padding-right: 5px;
  }
  & a:hover {
    font-size: 18px;
    padding-left: 30px;
    border: 1px solid rgba(255, 255, 255, 0.1);
  }
`;

function Menu() {
  return (
    <Nav className="navbar-expand-md">
      <button
        className="navbar-toggler"
        data-toggle="collapse"
        data-target="#navtarget"
      >
        <Icon className="fas fa-bars"></Icon>
      </button>
      <Navegation className="collapse navbar-collapse" id="navtarget">
        <NavLink to="/">
          <i className="fas fa-box-open"></i>
          Project
        </NavLink>
        <NavLink to="skills">
          <i className="fas fa-user-graduate"></i>Skills
        </NavLink>
        <NavLink to="mycv">
          <i className="fas fa-book-open"></i>My CV
        </NavLink>
        <NavLink to="about">
          <i className="fas fa-solid fa-address-card"></i>About
        </NavLink>
      </Navegation>
    </Nav>
  );
}

export default Menu;
