import React from "react";
import { useState } from "react";
import logo from "../img/logo512.png";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
  };
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
        <h1 style={styles.heading}>Contact Us</h1>
        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            style={styles.input}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            style={styles.input}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            style={styles.textarea}
          />
          <button type="submit" style={styles.button}>
            Send Message
          </button>
        </form>
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
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  input: {
    width: "30%",
    padding: "10px",
    margin: "10px 0",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  textarea: {
    width: "30%",
    height: "100px",
    padding: "10px",
    margin: "10px 0",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  button: {
    backgroundColor: "#33691e",
    color: "white",
    padding: "10px 15px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
  },
};

export default Contact;
