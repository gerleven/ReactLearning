import { useState, useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  Link,
  Navigate,
  Outlet,
  useParams,
  useNavigate,
  useLocation,
} from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const handleOnClick = (m: any) => {
    let a = data;
    debugger;
  };

  const [data, setData] = useState({} as any);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
        const json = await response.json();
        setData(json);
        // throw new Error("Error");
        
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    let myPromise = fetchData();
    // myPromise.then(()=>{alert("Dito esta aqui")});
  }, []);

  
  function HomeDefault() {
    return (
      <>
        <div className="App">
          <button onClick={() => handleOnClick("chau")}>Test</button>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.tsx</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
      </>
    );
  }

  const MyHome = () => {
    let {param1,param2} = useParams()
    return <>
      <div className="App">
        <header className="App-header">
          <p>My Home {param1}-{param2}</p>
        </header>
      </div>
    </>
};

  const ErrorPage = () => (
    <>
      <div className="App">
        <h3>Not Found!</h3>
      </div>
    </>
  );

  return (
    <BrowserRouter>
      <Link className="App-link-custom" to="/">Default Home</Link>
      <Link className="App-link-custom" to="/myHome/1/hola">My Home</Link>
      <Routes>
        <Route path="/" element={<HomeDefault />}></Route>
        <Route path="/myHome/:param1/:param2" element={<MyHome />}></Route>
        <Route path="/miHome" element={<Navigate to="/myHome" />}></Route>
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
