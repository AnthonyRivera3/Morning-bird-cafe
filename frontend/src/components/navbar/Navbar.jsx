import "./Navbar.css";
import "./Navbar-mobile.css";
import ChickLogo from "../logo/Chickenlogo.jsx";

function Navbar() {
  return (
    <nav className="navbar" aria-label="Main navigation">
    
    <div className="sun" aria-hidden="true"></div>

    <div className="cloud cloud-one" aria-hidden="true"></div>
    <div className="cloud cloud-two" aria-hidden="true"></div>
    <div className="cloud cloud-three" aria-hidden="true"></div>

      <ChickLogo />

      <div className="navbar-links">
        <a href="#menu">Menu</a>
        <a href="#order">Order</a>
        <a href="#merch">Merch</a>
        <a href="#locations">Locations & Hours</a>
      </div>
    </nav>
  );
}

export default Navbar;