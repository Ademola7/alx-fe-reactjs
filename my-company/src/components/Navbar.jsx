import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px",
        backgroundColor: "#333",
      }}
    >
      <Link style={{ color: "#fff" }} to="/">
        Home
      </Link>
      <Link style={{ color: "#fff" }} to="/about">
        About
      </Link>
      <Link style={{ color: "#fff" }} to="/services">
        Services
      </Link>
      <Link style={{ color: "#fff" }} to="/contact">
        Contact
      </Link>
    </nav>
  );
}

export default Navbar;
