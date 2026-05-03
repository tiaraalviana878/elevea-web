import { Search, Activity, Pencil, Settings, TrendingUp } from "lucide-react";
import "./Impact.css";

function Impact() {
  return (
    <section className="impact section">
      <div className="container">

        <h2 className="impact-title">How We Create Impact</h2>

        <p className="impact-sub">
          We combine insight, strategy, and execution to deliver meaningful and lasting results.
        </p>

        <div className="impact-grid">

          <div className="impact-card">
            <div className="impact-icon">
              <Search size={22} />
            </div>
            <h3>Discover</h3>
            <p>Understand context, challenges, and aspirations.</p>
          </div>

          <div className="impact-card">
            <div className="impact-icon">
              <Activity size={22} />
            </div>
            <h3>Diagnose</h3>
            <p>Analyze data and insights to identify root causes and opportunities.</p>
          </div>

          <div className="impact-card">
            <div className="impact-icon">
              <Pencil size={22} />
            </div>
            <h3>Design</h3>
            <p>Co-create strategies and solutions tailored to client needs.</p>
          </div>

          <div className="impact-card">
            <div className="impact-icon">
              <Settings size={22} />
            </div>
            <h3>Deliver</h3>
            <p>Implement solutions with collaboration and discipline.</p>
          </div>

          <div className="impact-card">
            <div className="impact-icon">
              <TrendingUp size={22} />
            </div>
            <h3>Sustain & Elevate</h3>
            <p>Measure impact, capture learnings, and continuously improve performance.</p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Impact;