import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import foodLogo from "../../logo.jpg";

const Header = () => {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    //console.log("Header rendered");
  }, []);

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={foodLogo} />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          <li>
            <button className="login" onClick={() => setIsLogin(!isLogin)}>
              {isLogin ? "Logout" : "Login"}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
