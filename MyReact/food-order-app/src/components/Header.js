import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import foodLogo from "../../logo.jpg";
import useOnlineStatus from "../hooks/useOnlineStatus";

const Header = () => {
  const [isLogin, setIsLogin] = useState(false);
  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex justify-between shadow-lg p-3">
      <div className="flex gap-5">
        <Link to="/">
          <img className="w-28" src={foodLogo} />
        </Link>
        <button>Visakhapatnam, Andhra Pradesh, India</button>
      </div>

      <div className="flex items-center">
        <ul className="flex items-center p-4 gap-16">
          <li className="font-semibold">
            Online: {onlineStatus ? "✅" : "🔴"}
          </li>
          <li className="font-semibold">
            <Link to="/">Home</Link>
          </li>
          <li className="font-semibold">
            <Link to="/about">About</Link>
          </li>
          <li className="font-semibold">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="font-semibold">
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
