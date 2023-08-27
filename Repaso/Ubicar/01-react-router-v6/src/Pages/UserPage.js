import React from "react";
import { Link, useParams } from "react-router-dom";

const UserPage = () => {
  const { id, name } = useParams();
  
  return (
    <>
        <h3>User {id} {name!=undefined?<span>- {name}</span>:<></>}</h3>
        
        <Link to="/">Back</Link>
    </>
  );
};

export default UserPage;
