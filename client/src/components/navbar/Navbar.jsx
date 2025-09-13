import "./navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="navbar">
      <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
        <span className="logo">AleBooking</span>
      </Link>
      {user ? (
        <div className="navContainer">
          <div className="profile">
            <FontAwesomeIcon icon={faUser} />
            <span>{user.username}</span>
          </div>
        </div>
      ) : (
        <div className="navContainer">
          <div className="navItems">
            <button className="navButton">Register</button>
            <button className="navButton">Login</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
