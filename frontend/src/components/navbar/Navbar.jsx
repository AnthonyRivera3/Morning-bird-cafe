import './Navbar.css';
import './Navbar-mobile.css';

function Navbar() {
    return (
        <nav className="navbar" aria-label="Main navigation">
            <a href="#home" className="navbar-logo" aria-label="Home">
                <span className="bird-logo" aria-hidden="true">
                    🐤
                </span>
            </a>

            <div className="navbar-links">
                <a href="#menu">Menu</a>
                <a href="merch">Merch</a>
                <a href="#locations">Locations & Hours</a>
            </div>
        </nav>
    );
}

export default Navbar;