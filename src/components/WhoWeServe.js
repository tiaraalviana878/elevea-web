import { Landmark, HeartPulse, Cpu, Factory, ShoppingBag, Users } from "lucide-react";
import "./WhoWeServe.css";

function WhoWeServe() {
  return (
    <section className="section serve">

      <h2 className="serve-title">Who We Serve</h2>

      <p className="serve-sub">
        Trusted by organizations across industries to drive transformation and growth.
      </p>

      <div className="serve-line">

        <div className="serve-item">
          <Landmark size={18} />
          <span>Financial Services</span>
        </div>

        <div className="serve-item">
          <ShoppingBag size={18} />
          <span>Consumer & Retail</span>
        </div>

        <div className="serve-item">
          <HeartPulse size={18} />
          <span>Healthcare</span>
        </div>

        <div className="serve-item">
          <Factory size={18} />
          <span>Industrials</span>
        </div>

        <div className="serve-item">
          <Cpu size={18} />
          <span>Technology</span>
        </div>

        <div className="serve-item">
          <Users size={18} />
          <span>Public Sector</span>
        </div>

      </div>

    </section>
  );
}

export default WhoWeServe;