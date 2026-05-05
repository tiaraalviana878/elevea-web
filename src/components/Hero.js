import "./Hero.css";
import heroImg from "../assets/hero-image.png";

function Hero() {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url(${heroImg})`,
        backgroundPosition: "70% center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container hero-content">

        <h1>
          Elevating Organizations. <br />
          <span>Empowering Leaders.</span>
        </h1>

        <p>
          We help organizations and professionals unlock their full potential
          through transformation, strategy, and leadership development.
        </p>

        <div className="hero-buttons">

          {/* ✅ WORK WITH US → GOOGLE FORM */}
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScOXFycD61llaxt4sWHQT68GxSsTyZ9oQkkgGvoTFjqz57ZBQ/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            WORK WITH US
          </a>

          {/* ✅ EXPLORE → SCROLL */}
          <a href="#services" className="btn btn-outline">
            EXPLORE SERVICES
          </a>

        </div>

      </div>
    </section>
  );
}

export default Hero;