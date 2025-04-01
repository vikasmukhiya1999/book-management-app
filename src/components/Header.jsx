import { NavLink } from "react-router-dom";
import "../components/style.css";

function Header() {
  return (
    <>
      <ul className="navbar">
        <li>
          <NavLink
            className={(e) => {
              return e.isActive ? "red" : "green";
            }}
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={(e) => {
              return e.isActive ? "red" : "green";
            }}
            to="/about"
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            className={(e) => {
              return e.isActive ? "red" : "green";
            }}
            to="/contact"
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </>
  );
}

export default Header;
