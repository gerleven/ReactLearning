import React from "react";
import { NavLink, Link, useNavigate} from "react-router-dom";
import "./navbar.css";

const id = 10;

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <NavLink
        to="/users"
        className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : "" }
      >
        {"Users - "}
      </NavLink>
      
      <NavLink
        to="/about"
        style={({ isActive, isPending }) => {
          return {
            fontWeight: isPending ? "bold" : "",
            color: isActive ? "red" : "black",
          };
        }}
      >
        About -{" "}
      </NavLink>
      <NavLink className={({ isActive }) => (isActive ? "active" : "")} to="/">
        Home -{" "}
      </NavLink>
        {/* En el className de Link no solo podemos pasarle un string, no acepta funciones como NavLink */}
      <Link className="active" to={`/user/${id + 1}`}>
        go to about/11
      </Link>
      <span>{"----"}</span><button onClick={()=>{navigate("/")}}>Back to Home</button><br/>
    </>
  );
};

export default Navbar;
