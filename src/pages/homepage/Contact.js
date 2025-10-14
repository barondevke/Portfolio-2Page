import { useState } from "react";
import React from "react";
import { Form, Button } from "react-bootstrap";
import "../../pages/styles.css";
import {Row,Col} from "react-bootstrap";
import { faPhone,faEnvelope,} from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = () => {
  const onSubmit = (e) => {
    alert("Message sent");
  };

  return (
    <div className="contactPage mt-32">
      <h1 style={{ color: "white" }} className="hireMe">
        Contact Me
      </h1>
      <Row>
      <Col>
          <div style={{display:'flex',flexDirection:'row'}}>
          <FontAwesomeIcon icon={faPhone} style={{color: "white",margin:'5% 5%'}} size='2x' /><h4 style={{margin:'5% 0',color:"white"}}>0797703639</h4>
          </div>
          </Col>
      </Row>    
          <Row>
          <Col>
          <div style={{display:'flex',flexDirection:'row'}}>
          <FontAwesomeIcon icon={faEnvelope} style={{color: "white", margin:'5% 5%'}} size='2x' /><h4 style={{margin:'5% 0',color:"white"}} >ndabasteve1@gmail.com</h4>
          </div>
          </Col>



      </Row>

      <Row>
      <Col>
      <a  href="https://www.linkedin.com/in/steve-baron-50154b2a2/" // <-- Replace with your actual profile
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: 'flex',
        alignItems: 'center',
        textDecoration: 'none',
        color: 'inherit',
        margin:'5% 5%'
      }}
    >
  <div style={{ display: 'flex', flexDirection: 'row',   backgroundColor: 'white',
          padding: '6px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center' }}>
    
     
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
        width="24"
        height="24"
        fill="black"
        
      >
        <path d="M100.28 448H7.4V148.9h92.88zm-46.44-341C24.34 107 0 82.67 0 53.9A53.87 53.87 0 0 1 53.84 0c29.53 0 53.56 24.34 53.56 53.9 0 28.77-24.03 53.1-53.56 53.1zM447.9 448h-92.68V302.4c0-34.7-.7-79.4-48.43-79.4-48.5 0-55.9 37.8-55.9 76.9V448h-92.6V148.9h88.9v40.8h1.3c12.4-23.6 42.5-48.4 87.5-48.4 93.6 0 110.8 61.5 110.8 141.3V448z"/>
      </svg>
      </div>
      <h4 style={{marginLeft:'5%',color:"white"}}>Steve Baron</h4>
    </a>
  
</Col>





      </Row>
      
    </div>
  );
};

export default Contact;
