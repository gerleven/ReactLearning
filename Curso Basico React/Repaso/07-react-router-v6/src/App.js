import React from "react";
import { BrowserRouter, Routes, Route, NavLink, Link, Navigate, useNavigate } from "react-router-dom";
import AboutPage from "./Pages/AboutPage";
import HomePage from "./Pages/HomePage";
import UsersPage from "./Pages/UsersPage";
import NotFoundPage from "./Pages/NotFoundPage";
import Navbar from "./Components/Navbar";
import "./Components/navbar.css";
import UserPage from "./Pages/UserPage";
import Dashboard from "./Pages/Dashboard";
import "./App.css";


const id = 10;

const App = () => {
  // const navigate = useNavigate();
  return (
    <>
    <BrowserRouter>
      <div className={"navBar rounedBox"}>
        <Navbar/>
      </div>
      
      <br/>
      <br/>

      <NavLink to="/user/10">go to /user/10</NavLink><br/>  
      <NavLink to="/user/10/Juan">go to /user/10/Juan</NavLink><br/>
      <NavLink to="/users">go to /users</NavLink><br/>
      <NavLink to="/about">go to /about</NavLink><br/>
      <NavLink to="/usuarios">go to /usuarios</NavLink><br/>
      <NavLink to="/usuariosSinRetorno">go to /usuarios y sin retorno</NavLink><br/>
      <NavLink to="/dashboard">Dashboard</NavLink><br/>

      {/* <button onClick={()=>navigate("/users")}>Go to Users</button><br/> */}
      
      
      {/*if try to use useNavigate here:*/}
      {/* Uncaught Error: useNavigate() may be used only in the context of a <Router> component. */}
      {/*since this is a SPA application and the button is not inside <Routes>, it is not possible to navigate. Navigation is only possible inside of <Routes>*/}
      
      
      <div className={"rounedBox"}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />

          {/*Esta es la maera de tener los Route todos juntos en el App.js para no tenerlos distribuidos en los subcomponentes como es el caso del componente Dashboard */}
          <Route path="/users/*" element={<UsersPage />}>
            <Route path="juan" element={<h3>Juan</h3>}/>
            <Route path="german" element={<h3>German</h3>}/>
          </Route>
          
          <Route path="/usuarios" element={<Navigate replace to="/users" />} />       {/* El replace hace que /usuarios sea reemplazado por /users en vez de ser apilado encima, al volver con el navegador volverias al "/"*/}
          <Route path="/usuariosSinRetorno" element={<Navigate to="/users" />} />     {/* <-- Navigate */}
          <Route path="/user/:id" element={<UserPage />} />
          <Route path="/user/:id/:name" element={<UserPage />} /> {/* <-- paso de parametros por url */} {/* <-- hook useParams */}   {/* <-- Link */}
          <Route path="/others" element={<p>Others!</p>} />

          {/* El Dashboard tiene adentro un <Routes> con mas Route's */}
          <Route path="/dashboard/*" element={<Dashboard/>} />  {/*hook useNavigate*/} {/*subComponents o Componentes anidados*/}
          <Route path="*" element={<NotFoundPage />} />     {/*hook useLocation.pathname*/}
        </Routes>
      </div>
    </BrowserRouter>
    </>
    
  );
};

export default App;
