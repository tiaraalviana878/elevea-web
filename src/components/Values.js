import { ShieldCheck, User, Target, TrendingUp, Users } from "lucide-react";
import "./Values.css";

function Values() {
  return (
    <section className="section values">
      <div className="container">

        <h2 className="values-title">Our Values</h2>

        <div className="values-grid">

          <div className="value-item active">
            <ShieldCheck size={20} />
            <p>Integrity</p>
          </div>

          <div className="value-item active">
            <User size={20} />
            <p>Humble Confidence</p>
          </div>

          <div className="value-item active">
            <Target size={20} />
            <p>Ownership</p>
          </div>

          <div className="value-item active">
            <TrendingUp size={20} />
            <p>Continuous Growth</p>
          </div>

          <div className="value-item active">
            <Users size={20} />
            <p>Impact Focus</p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Values;