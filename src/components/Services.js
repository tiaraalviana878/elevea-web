import { BarChart3, Users2, Briefcase } from "lucide-react";
import "./Services.css";

function Services() {
  return (
    <section className="services" id="services">
      <div className="container">

        <h2 className="title">What We Do</h2>

        <p className="services-sub">
          We deliver integrated solutions to transform organizations, develop leaders,
          and build sustainable performance.
        </p>

        <div className="services-grid">

          {/* 1 */}
          <div className="service-card">
            <div className="service-icon">
              <BarChart3 size={22} />
            </div>

            <h3>Business Transformation</h3>
            <p>
              We help organizations design and execute strategies, improve operating
              models, and drive sustainable change.
            </p>
          </div>

          {/* 2 */}
          <div className="service-card">
            <div className="service-icon">
              <Users2 size={22} />
            </div>

            <h3>Human Capital Strategy</h3>
            <p>
              Build people strategies, organizational capabilities, and performance
              systems that fuel growth and engagement.
            </p>
          </div>

          {/* 3 */}
          <div className="service-card">
            <div className="service-icon">
              <Briefcase size={22} />
            </div>

            <h3>Leadership Development</h3>
            <p>
              Develop leaders at all levels to lead with clarity, influence, and impact
              in complex environments.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Services;