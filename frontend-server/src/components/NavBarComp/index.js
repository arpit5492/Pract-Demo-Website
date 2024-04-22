import "./_navbar.scss";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar">
      <ul>
        <li><Link to="/" style={{textDecoration: "none"}}>Home</Link></li>
        <li><Link to="/login" style={{textDecoration: "none"}}>Login</Link></li>
      </ul>
    </div>
  )
}

export default NavBar;