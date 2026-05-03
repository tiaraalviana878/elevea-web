import "./VisionMission.css";

function VisionMission() {
  return (
    <section className="vision-mission">

      <h2 className="vm-title">Vision & Mission</h2>

      <div className="vm-layout">

        {/* LEFT CHART */}
        <div className="vm-chart">
          <svg viewBox="0 0 300 200" className="chart">

            <polyline
              points="10,160 60,140 110,150 160,110 210,120 260,60"
              fill="none"
              stroke="rgba(201,164,92,0.2)"
              strokeWidth="4"
            />

            <polyline
              points="10,160 60,140 110,150 160,110 210,120 260,60"
              fill="none"
              stroke="#c9a45c"
              strokeWidth="4"
              className="live-line"
            />

            <circle r="6" fill="#c9a45c">
              <animateMotion
                dur="3s"
                repeatCount="indefinite"
                path="M10,160 L60,140 L110,150 L160,110 L210,120 L260,60"
              />
            </circle>

          </svg>
        </div>

        {/* RIGHT CONTENT */}
        <div className="vm-content">

          {/* ✅ MISSION DI ATAS */}
          <div className="vm-block">
            <h3>MISSION</h3>
            <p>
              We exist to elevate people and organizations by unlocking their full potential
              and building future-ready capabilities through business transformation,
              human capital strategy, and leadership development.
            </p>
          </div>

          <div className="vm-divider"></div>

          {/* ✅ VISION DI BAWAH */}
          <div className="vm-block">
            <h3>VISION</h3>
            <p>
              To become a trusted global partner in transforming organizations and
              developing leaders for a future-ready world.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default VisionMission;