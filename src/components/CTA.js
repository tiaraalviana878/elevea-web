import "./CTA.css";

function CTA() {
  return (
    <section className="cta">
      <div className="container cta-wrap">

        <p className="cta-label">START THE JOURNEY</p>

        <h2 className="cta-title">
          Let’s build meaningful transformation — together.
        </h2>

        <p className="cta-desc">
          Partner with us to unlock potential, strengthen leadership,
          and create lasting impact for your organization.
        </p>

        <div className="cta-actions">

          {/* CONTACT US → WHATSAPP */}
          <a 
            href="https://wa.me/6285353233216?text=Hello%20Elevea,%20I%20would%20like%20to%20schedule%20a%20consultation."
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            BOOK CONSULTATION
          </a>

        </div>

      </div>
    </section>
  );
}

export default CTA;