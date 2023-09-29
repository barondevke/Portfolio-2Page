import { useState } from "react";
import React from 'react'
import { Form,Button } from "react-bootstrap";
import "../../pages/styles.css"

const Contact = () => {
  const onSubmit = (e) => {
    alert('Message sent')
  }
    

  return (
    <div className="contactPage">
        <h1 className="hireMe">Contact Me</h1>
      <Form onSubmit={onSubmit} >
      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label htmlFor="name">Name</Form.Label>
        <Form.Control type="text" className="textBox" placeholder="Enter name" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>


      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label htmlFor="email">Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
      
      
      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label htmlFor="message">Message</Form.Label>
        <Form.Control type="text" className="messageBox" placeholder="Enter message" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
  )
}

export default Contact
