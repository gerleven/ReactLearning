import React from "react";
import {Link, Outlet, useNavigate} from "react-router-dom";

const UsersPage = () => {

  const navigate = useNavigate();
  
  return (
    <>
      <h3>Users!</h3>
      <Link to="juan">Juan</Link><br/>
      <Link to="german">German</Link><br/>

      <Outlet/> {/* <-- Aca apareceran los sub componentes*/}

      <button onClick={()=>{navigate("/")}}>Back</button>

    </>
  );
};

export default UsersPage;
