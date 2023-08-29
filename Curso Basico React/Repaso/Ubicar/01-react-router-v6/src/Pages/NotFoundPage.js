import React from "react";
import {useNavigate, useLocation } from "react-router-dom";

const NotFoundPage = () => {
  const url = useLocation();
    const navigate = useNavigate();
    
    return ( <>
    <h3>Not Found</h3>
    <p>the url <i><b>"{url.pathname}"</b></i> was not found</p>
    <button onClick={()=>{navigate("/")}}>Volver</button>
    </> );
};

export default NotFoundPage;
