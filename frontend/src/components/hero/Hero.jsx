import "./Hero.css";
import "./Hero-mobile.css";

function Hero() {
  return (
    <section id="home" className="hero">

      <img
        src="/Morning-Bird-Cafe-at-Sunrise.png"
        alt="Morning Bird Cafe on a warm sunny morning"
        className="hero-image"
      />

      <a
        href="#order"
        className="hero-order-button"
      >
        Start Your Order
        <span aria-hidden="true"> →</span>
      </a>

    </section>
  );
}

export default Hero;