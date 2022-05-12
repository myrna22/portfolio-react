import React from 'react'
import { Card, Col, Row } from 'react-bootstrap';

export default function About() {
    return (
        <Card id='about'>
            <Row className="padd">
                <Col>
                    <h4>About me</h4>
                    <p>I am web developer</p>
                    <p>I am an enthusiastic, self-motivated, reliable, responsible and hard working person. I am a mature team worker and adaptable to all challenging situations.</p>
                    <p> I am always try a new things and always prove to myself that i can. I am able to work well under pressure and adhere to strict deadlines.</p>
                </Col>
                <Col>
                    <h4>Information</h4>
                    <p><strong>Email:</strong><br/>mirnazayada80@yahoo.com</p>
                    <p><strong>Date of Birth:</strong><br/>10. March. 1980</p>
                </Col>
            </Row>
           

            
        </Card>
    );
}
