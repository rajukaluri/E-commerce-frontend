import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{
      padding: "15px",
      background: "#2874f0",
      color: "white",
      display: "flex",
      gap: "20px"
    }}>
      <Link style={{ color: "white" }} to="/">Home</Link>
      <Link style={{ color: "white" }} to="/cart">Cart</Link>
      <Link style={{ color: "white" }} to="/login">Login</Link>
      <Link style={{ color: "white" }} to="/signup">Signup</Link>
    </nav>
  );
}
