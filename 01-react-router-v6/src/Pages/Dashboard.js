import React from "react";
import { useNavigate, Link, Routes, Route } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <>
      <h3>Dashboard</h3>
      <button onClick={handleClick}>Go Home</button><br></br>
      <button onClick={()=>{navigate("welcome")}}>Go to subComponent Welcome</button><br></br>
      <button onClick={()=>{navigate("options")}}>Go to subComponent Options</button><br></br>

      <Link to="welcome">Go to subComponent Welcome</Link><br></br>
      <Link to="options">Go to subComponent Options</Link><br></br><br></br>

      <Routes>
        <Route path="/welcome" element={<h3>Welcome!</h3>} /> {/*En el proximo ejercicio vemos como hacer para no tener los Route distribuidos en los subcomponentes y tenerlos todos juntos en el App.js*/}
        <Route path="/options" element={<h3>Options!</h3>} />
      </Routes>
    </>
  );
};

export default Dashboard;
