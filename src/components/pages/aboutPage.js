import { white } from 'ansi-colors';
import { whiteBright } from 'chalk';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
// import { Image } from 'react-bootstrap';
// import about from './about.css';
import capitol2 from './capitol2.jpg'

const aboutPage = () => {
    return (
    <div 
        style={{
            class: 'capitol2',
            backgroundImage: `url(${capitol2})`,
            backgroundSize: 'cover',
            height: '100vh',
            fontSize: 30,
            color: '#FOF8FF'
        }} >

        <Container>
            <Row>
                <Col>Civic Engage project was created during the class of 2021 cohort 15 at Ada Developers Academy.This project provides platform organizers to recruit community members to give public testimony in local government.</Col>
                <Col>Civic Engage project was created during the class of 2021 cohort 15 at Ada Developers Academy.This project provides platform organizers to recruit community members to give public testimony in local government.</Col>
            </Row>
            <Row>
                <Col>1 of 3</Col>
                <Col>2 of 3</Col>
                <Col>3 of 3</Col>
            </Row>
        </Container>

        <h1>This is an about page!</h1>
        <h1>Civic Engage APP</h1>
        <p>Civic Engage project was created during the class of 2021 cohort 15 at Ada Developers Academy.This project provides platform organizers to recruit community members to give public testimony in local government. </p>
    </div>
    );
    };

export default aboutPage;