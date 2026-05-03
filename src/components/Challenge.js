import { Users, AlertTriangle, Settings } from "lucide-react";
import "./Challenge.css";

function Challenge() {
  return (
    <section className="challenge">

      <h2 className="challenge-title">Why Organizations Struggle</h2>

      <p className="challenge-sub">
        Most organizations don’t fail because of effort, but because of misalignment between strategy, people, and execution.
      </p>

      <div className="challenge-grid">

        <div className="challenge-item">
          <Users className="icon" size={20} />
          <div className="text">
            <h3>Teams are busy, not effective</h3>
            <p>High activity but low impact due to unclear priorities and fragmented execution.</p>
          </div>
        </div>

        <div className="challenge-item">
          <AlertTriangle className="icon" size={20} />
          <div className="text">
            <h3>Leaders are overwhelmed</h3>
            <p>Decision fatigue and lack of structured support reduce strategic focus.</p>
          </div>
        </div>

        <div className="challenge-item no-border">
          <Settings className="icon" size={20} />
          <div className="text">
            <h3>Systems don’t support execution</h3>
            <p>Strategy fails to translate into execution and measurable outcomes.</p>
          </div>
        </div>

      </div>

    </section>
  );
}

export default Challenge;