function Approach() {
  return (
    <section style={{
      background: "#071a2f",
      color: "white",
      padding: "80px 60px",
      textAlign: "center"
    }}>
      <h2 style={{ marginBottom: "40px" }}>Our Approach</h2>

      <div style={{
        display: "flex",
        justifyContent: "space-around",
        gap: "20px"
      }}>
        
        <div>
          <h3>Diagnose</h3>
          <p>Understand root challenges</p>
        </div>

        <div>
          <h3>Design</h3>
          <p>Create tailored solutions</p>
        </div>

        <div>
          <h3>Deliver</h3>
          <p>Execute with impact</p>
        </div>

      </div>
    </section>
  );
}

export default Approach;