import "./WhyElevea.css";

function WhyElevea() {
  return (
    <section className="why">
      <div className="container why-wrap">

        {/* LEFT */}
        <div className="why-left">
          <p className="why-label">WHY ELEVEA</p>

          <h2 className="why-title">
            A different approach to transformation and leadership.
          </h2>

          <p className="why-desc">
            Our approach is grounded in real challenges, practical execution, 
            and long-term impact for each organization. We help organizations 
            elevate their performance and accelerate sustainable growth by 
            unlocking the potential of their people, strengthening capabilities, 
            and driving meaningful change.
          </p>
        </div>

        {/* RIGHT */}
        <div className="why-right">

          <div className="why-line-item">
            <span>01</span>
            <div>
              <h3>Tailored Approach</h3>
              <p>Every solution is designed specifically for your organization.</p>
            </div>
          </div>

          <div className="why-line-item">
            <span>02</span>
            <div>
              <h3>Execution Focused</h3>
              <p>We turn strategy into real, actionable outcomes.</p>
            </div>
          </div>

          <div className="why-line-item">
            <span>03</span>
            <div>
              <h3>Sustainable Impact</h3>
              <p>We build capabilities that continue beyond engagement.</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default WhyElevea;