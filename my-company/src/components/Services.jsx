import React from 'react'
import logo from "../assets/images/logo512.png";
import service1 from "../assets/images/service1.png";
import service2 from "../assets/images/service2.png";
import service3 from "../assets/images/service3.png";



function Services() {
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
         <h1 style={styles.heading}>Our Services</h1>
         <ul style={styles.list}>
           <li style={styles.listItem}>Technology Consulting</li>
           <li style={styles.listItem}>Market Analysis</li>
           <li style={styles.listItem}>Product Development</li>
         </ul>
         <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
  <img src={service3} alt="Service 1" style={{ width: '250px', borderRadius: '20px' }} />
  <img src={service2} alt="Service 2" style={{ width: '250px', borderRadius: '20px' }} />
  <img src={service1} alt="Service 3" style={{ width: '250px', borderRadius: '20px' }} />
</div>
       </div>
    </>
  )
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
    list: {
      display: 'flex', 
      justifyContent: 'center', 
      gap: '80px',
      textAlign:'center',
      listStyleType: "none",
      padding: 0,
    },
    listItem: {
      fontSize: "18px",
      color: "#33691e",
      margin: "10px 0",
    },
  };

export default Services