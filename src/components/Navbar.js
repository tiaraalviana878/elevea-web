import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

function Navbar() {
  const navigate = useNavigate();

  const goToHomeSection = (id) => {
    navigate("/");

    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
      });
    }, 100);
  };

  return (
    <nav className="navbar">
      <div className="container nav-content">

        <img src={logo} alt="logo" className="nav-logo" />

        <div className="nav-links">

          <Link to="/">Home</Link>
          <Link to="/about">About</Link>

          {/* INI SEKARANG BUKAN BUTTON */}
          <a onClick={() => goToHomeSection("services")}>
            Services
          </a>

          <a onClick={() => goToHomeSection("insights")}>
            Insights
          </a>

          <a 
  href="https://docs.google.com/forms/d/e/1FAIpQLScOXFycD61llaxt4sWHQT68GxSsTyZ9oQkkgGvoTFjqz57ZBQ/viewform"
  target="_blank"
  rel="noopener noreferrer"
>
  Contact
</a>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;