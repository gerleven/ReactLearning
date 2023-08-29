import { NavLink } from "react-router-dom";
import "../../App.css";

const NavBar = () => {
  return (
    <div className="Nav-bar">
      <NavLink to="/" className={"App-link"}>Home</NavLink>
      <NavLink to="/hooks" className={"App-link"}>Hooks</NavLink>
      <NavLink to="/context" className={"App-link"}>Context</NavLink>
    </div>
  );
};

export default NavBar;
