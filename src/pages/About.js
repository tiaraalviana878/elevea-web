import "./About.css";
import { useEffect } from "react";

function About() {

  useEffect(() => {
    const elements = document.querySelectorAll(".fade-up");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    }, { threshold: 0.2 });

    elements.forEach(el => observer.observe(el));
  }, []);

  return (
    <section className="section about-page" id="about">
      <div className="container about-grid">

        {/* LEFT */}
        <div className="about-left fade-up"></div>

        {/* RIGHT */}
        <div className="about-right fade-up delay-1">

          <h2 className="about-title">
            Elevating Organizations.<br />
            <span>Empowering Leaders.</span>
          </h2>

          <div className="about-line"></div>

          {/* PURPOSE */}
          <div className="about-block">
            <h4>Our Purpose</h4>
            <p>
              We exist to elevate organizations and empower leaders by unlocking their full potential. 
              Through business transformation, human capital strategy, and leadership development, 
              we enable sustainable growth in an increasingly complex world.
            </p>
          </div>

          {/* VISION */}
          <div className="about-block">
            <h4>Vision</h4>
            <p>
              To become a trusted global partner in transforming organizations and developing 
              future-ready leaders.
            </p>
          </div>

          {/* MISSION */}
          <div className="about-block">
            <h4>Mission</h4>
            <p>
              We exist to elevate people and organizations by unlocking their full potential
              and building future-ready capabilities through business transformation,
              human capital strategy, and leadership development.
            </p>
          </div>

          {/* VALUES */}
          <div className="about-block">
            <h4>Values</h4>

            <div className="about-values">
              <div className="value-item">
                <span>Integrity</span>
                <p>We uphold the highest standards in everything we do.</p>
              </div>

              <div className="value-item">
                <span>Humble Confidence</span>
                <p>We lead with clarity while remaining open to learn.</p>
              </div>

              <div className="value-item">
                <span>Ownership</span>
                <p>We take responsibility for outcomes, not just actions.</p>
              </div>

              <div className="value-item">
                <span>Continuous Growth</span>
                <p>We believe progress is a continuous journey.</p>
              </div>

              <div className="value-item">
                <span>Impact Focus</span>
                <p>We measure success by meaningful and lasting results.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;