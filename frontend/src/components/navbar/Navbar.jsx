import "./Navbar.css";
import "./Navbar-mobile.css";
import ChickLogo from "../logo/Chickenlogo.jsx";

function Navbar() {
  return (
    <nav className="navbar" aria-label="Main navigation">
      <ChickLogo />

      <div className="navbar-links">
        <a href="#menu">Menu</a>
        <a href="merch">Merch</a>
        <a href="#locations">Locations & Hours</a>
      </div>
    </nav>
  );
}

export default Navbar;