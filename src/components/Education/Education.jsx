import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'

export default function Education() {
    return (
        <>
            <h3 id='education'>Education</h3>
            <Card>
                <Row>
                    <Col className='main-col'>
                        <h5> March 2022 - June 202 </h5>
                        <h5>Full Stack Developer 2022 </h5>
                    </Col>
                    <Col xs={8}>
                        <h5>Matrix Master/MERN Stacks </h5>
                        <p>One Program is an three months intensive program that divided in 3 section. I have learned the concept of self-sufficiency. First part was coverd Front End (Html&Css, Javascript) whereas the second was MERN stack (Reactjs, Nodejs)</p>
                    </Col>
                </Row>

            </Card>
            <Card>
                <Row>
                    <Col className='main-col'>
                        <h5>2000 </h5>
                    </Col>
                    <Col xs={8}>
                        <h5>Syrian University </h5>
                        <h5>Diploma in Applied Chemistry </h5>
                    </Col>
                </Row>
            </Card>
        </>
    )
}
