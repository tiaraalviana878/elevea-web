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
        <div className="about-left fade-up">
        </div>

        {/* RIGHT */}
        <div className="about-right fade-up delay-1">
          <h2 className="about-title">
            Transforming Organizations.<br />
            <span>Empowering People.</span>
          </h2>

          <div className="about-line"></div>

          <p>
            Elevea Consulting is a strategic partner for organizations 
            seeking sustainable growth and transformation.
          </p>

          <p>
            We combine business strategy, human capital development, 
            and leadership transformation to help organizations 
            navigate complexity and achieve long-term impact.
          </p>

          <div className="about-points">
            <div>Business Transformation</div>
            <div>Leadership Development</div>
            <div>Human Capital Strategy</div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;