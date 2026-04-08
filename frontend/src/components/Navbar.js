import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
  <h3>🛒 Supermart</h3>

  <div>
    <a href="/">Home</a>
    <a href="/login">Login</a>
    <a href="/register">Register</a>
    <a href="/admin">Admin</a>
  </div>
</nav>
  );
}

export default Navbar;