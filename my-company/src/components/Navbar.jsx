import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={styles.navbar}>
      <ul style={styles.navList}>
        <li style={styles.navItem}>
          <Link to="/" style={styles.link}> Home </Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/About" style={styles.link}> About </Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/Services" style={styles.link}> Services </Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/Contact" style={styles.link}> Contact </Link>
        </li>
      </ul>
    </nav>
  );
}


// Inline styles
const styles = {
  navbar: {
    borderRadius:'5px',
    backgroundColor: "#333",
    padding: "15px",
    textAlign: "center",
  },
  navList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "flex",
    justifyContent: "center",
    gap: "20px",
  },
  navItem: {
    display: "inline",
  },
  link: {
    color: "white",
    textDecoration: "none",
    fontSize: "18px",
    fontWeight: "bold",
    padding: "10px 15px",
    borderRadius: "5px",
    transition: "background 0.3s",
  },
};

export default Navbar;
