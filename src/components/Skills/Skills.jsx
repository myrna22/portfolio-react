import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'


export default function Skills() {
    return (
        <div>
            <h3 id='skills'>Skills</h3>
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
        </div>
    )
}
