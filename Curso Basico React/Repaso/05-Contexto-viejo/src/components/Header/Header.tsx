import logo from "../../logo.svg";
import "../../App.css";
const Header = () => {
  return (
    <>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <img src={logo} className="App-logo" alt="logo" />
        <p>Advanced <code>React</code> course.</p>
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    </>
  );
};

export default Header;
