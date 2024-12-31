import { NavLink } from "react-router-dom";

function Menu() {
  return (
    <nav className="naveg navbar-expand-md">
      <button
        className="navbar-toggler"
        data-toggle="collapse"
        data-target="#navtarget"
      >
        <i className="burg fas fa-bars"></i>
      </button>
      <div className="navDiv collapse navbar-collapse" id="navtarget">
        <NavLink to="/">
          <i className=" fas fa-box-open"></i>
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
      </div>
    </nav>
  );
}

export default Menu;
