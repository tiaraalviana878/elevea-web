import { useNavigate } from "react-router-dom";
import "./CorePillars.css";

function CorePillars() {
  const navigate = useNavigate();

  return (
    <section className="section">
      <div className="container">

        <h2 className="title">Two Core Pillars</h2>

        <div className="pillars-grid">

          <div className="pillar-card">
            <h3>Organizational Transformation</h3>
            <p>
              Improving systems, structure, and performance across organizations.
            </p>

            <button 
              className="learn-btn"
              onClick={() => navigate("/transformation")}
            >
              Learn More →
            </button>
          </div>

          <div className="pillar-card">
            <h3>Leadership Development</h3>
            <p>
              Developing strong, adaptive leaders for modern organizations.
            </p>

            <button 
              className="learn-btn"
              onClick={() => navigate("/leadership")}
            >
              Learn More →
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}

export default CorePillars;