import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'

export default function Experience() {
    return (
        <>
            <h3 id='experience'>Experience</h3>
            <Card>
                <Row>
                    <Col className='main-col'>
                        <h5> 2022 </h5>
                        <h5>Matrix Master/MERN Stacks</h5>
                    </Col>
                    <Col xs={7}>
                        <h5>Trainer</h5>
                        <li>HTML . CSS . JavaScript . </li>
                        <li>jQuery/AJAX . Reactjs . </li>
                    </Col>
                </Row>
            </Card>
            
            <Card>
                <Row>
                    <Col className='main-col'>
                        <h5> Oct 2009 - Feb 2012 </h5>
                        <h5>Secretariat of Raqqah governorate </h5>
                    </Col>
                    <Col xs={7}>
                        <h5>Trainer</h5>
                        <li>International Computer Driving License (ICDL) program. </li>
                    </Col>
                </Row>
            </Card>
        </>
    )
}
