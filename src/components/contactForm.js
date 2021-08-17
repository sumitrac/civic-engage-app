import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const contactForm = () => {
    return (
        <div style={{ display: 'block', 
                    width: 700, 
                    padding: 30,
                    }}>
        <h4 style={{
            textAlign:'center',
        }}>Send a message!</h4>
        <Form>
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