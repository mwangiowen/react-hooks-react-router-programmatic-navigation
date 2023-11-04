import React from "react";
import { NavLink, useHistory } from "react-router-dom";

const linkStyles = {
  width: "100px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "none",
  color: "white",
};

const activeLinkStyles = {
  background: "darkblue",
};

const buttonStyles = {
  padding: "10px 20px",
  backgroundColor: "blue",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};

function Navbar({ setIsLoggedIn }) {
  const history = useHistory();

  function handleLogout() {
    setIsLoggedIn(false);
    history.push("/login");
  }

  return (
    <div>
      <NavLink to="/" exact style={linkStyles} activeStyle={activeLinkStyles}>
        Home
      </NavLink>
      <NavLink to="/about" style={linkStyles} activeStyle={activeLinkStyles}>
        About
      </NavLink>
      <button onClick={handleLogout} style={buttonStyles}>
        Logings
      </button>
    </div>
  );
}

export default Navbar;
