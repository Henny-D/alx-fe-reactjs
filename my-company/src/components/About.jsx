import React from "react";
import logo from "../assets/images/logo512.png";

function About() {
  return (
    <>
      <div style={styles.container}>
        <div style={{ textAlign: "center" }}>
          <img
            src={logo}
            alt="Welcome to our company"
            style={{ width: "10%", height: "auto" }}
          />
        </div>
        <h1 style={styles.heading}>About Us</h1>
        <p style={styles.text}>
          Our company has been providing top-notch services since 1990. We
          specialize in various fields including technology, marketing, and
          consultancy.
        </p>
        <p style={styles.text}>
          Our vision is to be the global leader in technology consulting,
          helping businesses of all sizes thrive in the digital age. We
          specialize in technology consulting, market analysis, and product
          development, providing custom solutions tailored to your needs.
        </p>
      </div>
    </>
  );
}

// Inline styles
const styles = {
  container: {
    padding: "40px",
    textAlign: "center",
    backgroundColor: "#f9fbe7",
    borderRadius: "10px",
    margin: "20px",
  },
  heading: {
    color: "#827717",
    fontSize: "32px",
  },
  text: {
    color: "#33691e",
    fontSize: "18px",
  },
};

export default About;
