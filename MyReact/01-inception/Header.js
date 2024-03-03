import logo from "./pikachu.jpeg";
import user from "./user.png";

function Header() {
  return (
    <div className="header">
      <img src={logo} alt="logo" />
      <input type="search" placeholder="Search..." className="search" />
      <img src={user} alt="user" />
    </div>
  );
}

export default Header;
