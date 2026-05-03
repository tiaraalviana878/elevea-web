import "./Insights.css";

const insightsData = [
  {
    category: "Strategy • 2026",
    title: "Why Transformation Efforts Fail",
    desc: "Many organizations focus on structure but ignore behavior and mindset.",
   link: "https://www.mckinsey.com/capabilities/transformation/our-insights/unlocking-success-in-digital-transformations"
  },
  {
    category: "Leadership • 2026",
    title: "The Future of Leadership",
    desc: "Modern leaders must adapt to complexity, uncertainty, and change.",
    link: "https://www.mckinsey.com/capabilities/people-and-organizational-performance/our-insights/what-effective-leadership-looks-like-today"
  },
  {
    category: "People • 2026",
    title: "Building High-Performance Teams",
    desc: "Performance is driven by culture, clarity, and accountability.",
    link: "https://hbr.org/2016/06/the-secrets-of-great-teamwork"
  }
];

function Insights() {
  return (
    <section className="section insights" id="insights">
      <div className="container">

        <h2 className="insight-title">Insights & Perspectives</h2>

        <div className="insight-grid">

          {insightsData.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="insight-card"
            >
              <small className="insight-meta">{item.category}</small>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <span className="read-more">Read More →</span>
            </a>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Insights;