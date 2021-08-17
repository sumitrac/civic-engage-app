import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import contact from './contact.css'

const contactForm = () => {
    return (
        <div style={{ display: 'block', 
        width: 700, 
        padding: 30,
        textAlign: 'center',
        }}>
            <h3>Send a Message!</h3>
            <Form className="form">
                <Form.Group>
                    <Form.Label>Enter your full name:</Form.Label>
                    <Form.Control type="text" 
                                placeholder="Enter your name" />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Enter your email address:</Form.Label>
                    <Form.Control type="email" 
                                placeholder="Enter your email address" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Example textarea</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>

                <Button variant="primary" type="submit">
                Click here to submit form
                </Button>
            </Form>
        </div>
    );
    }

export default contactForm;