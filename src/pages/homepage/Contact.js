import { useState } from "react";
import React from "react";
import { Form, Button } from "react-bootstrap";
import "../../pages/styles.css";
import {Row,Col} from "react-bootstrap";
import { faPhone,faEnvelope } from '@fortawesome/free-solid-svg-icons'

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
      
    </div>
  );
};

export default Contact;
