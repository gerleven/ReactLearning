import React from "react";
import { NavLink, Link, Routes, Route, useNavigate } from "react-router-dom";


const HomePage = () => {
  const navigate = useNavigate();
  
  return (
    <>
    
      <h3>Hello World!</h3>
      <button onClick={()=>{navigate("users")}}>Go to Users</button><br></br>
      {/* <Link to="users">Go to users</Link><br></br> */}
    </>
  );
};

export default HomePage;
