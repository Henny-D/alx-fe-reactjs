import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        {/* Links to pages on the left */}
        <div style={styles.pageLinks}>
          <h3>Pages</h3>
          <ul style={styles.linkList}>
            <li><Link to="/" style={styles.link}>Home</Link></li>
            <li><Link to="/about" style={styles.link}>About</Link></li>
            <li><Link to="/services" style={styles.link}>Services</Link></li>
            <li><Link to="/contact" style={styles.link}>Contact</Link></li>
          </ul>
        </div>

        {/* Links to social media on the right */}
        <div style={styles.socialLinks}>
          <h3>Follow Us</h3>
          <ul style={styles.linkList}>
            <li><a href="https://www.facebook.com"  target="/blank" style={styles.link}>Facebook</a></li>
            <li><a href="https://www.twitter.com" target="/blank" style={styles.link}>Twitter</a></li>
            <li><a href="https://www.instagram.com" target="/blank" style={styles.link}>Instagram</a></li>
            <li><a href="https://www.linkedin.com" target="/blank" style={styles.link}>LinkedIn</a></li>
          </ul>
        </div>
      </div>

      {/* Copyright centered at the bottom */}
      <div style={styles.footerBottom}>
        <p>&copy; 2025 ALX FE. All rights reserved.</p>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: "#333",
    color: "white",
    padding: "20px 0",
    textAlign: "center",
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    padding: "0 20px",
  },
  pageLinks: {
    flex: 1,
    textAlign: "left",
    paddingLeft:"15%"
  },
  socialLinks: {
    flex: 1,
    textAlign: "right",
     paddingRight:"15%"
  },
  linkList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  link: {
    color: "white",
    textDecoration: "none",
    display: "block",
    margin: "5px 0",
  },
  footerBottom: {
    marginTop: "20px",
  },
};

export default Footer;
