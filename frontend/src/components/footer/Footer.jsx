import "./Footer.css";
import "./Footer-mobile.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="soil-layer">
        <div className="footer-content">
          <h2>Morning Bird Cafe</h2>

          <p>
            Fresh mornings. Good coffee. Better days.
          </p>

          <p className="footer-copyright">
            © 2026 Morning Bird Cafe
          </p>
        </div>
      </div>

      <div
        className="mixed-layer"
        aria-hidden="true"
      ></div>

      <div
        className="rock-layer"
        aria-hidden="true"
      ></div>

    </footer>
  );
}

export default Footer;