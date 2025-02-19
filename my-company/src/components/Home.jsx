import React from "react";
import logo from "../assets/images/logo512.png";

function Home() {
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
        <h1 style={styles.heading}>Welcome to Our Company</h1>
        <p style={styles.text}>
          We are dedicated to delivering excellence in all our services. We
          believe in integrity, innovation, and customer satisfaction. These
          principles are at the heart of everything we do
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

export default Home;
