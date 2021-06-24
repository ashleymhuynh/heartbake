import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav>
      <h1>HeartBake</h1>
      <Link to="/" id="homelink">
        Heartbake
      </Link>
      <Link to="/new" id="bake-my-heart">
        🍞Bake My Heart❤️‍🩹
      </Link>
    </nav>
  );
}
export default Navbar;
