import "./chickenlogo.css";
import "./chickenlogo-mobile.css";

function ChickLogo() {
  return (
    <a href="#home" className="chick-logo" aria-label="Home">
      <span className="chick-logo__sprite" aria-hidden="true" />
    </a>
  );
}

export default ChickLogo;