import React from 'react'
import { Row,Col,Image } from 'react-bootstrap'
import ProfileImage from '../Images/profile.jpg'

export default function ProfilePhoto() {
    return (
        <div className="pCard social">
            <Row>
                <Col>
                    <parent>
                        Mirna Zayad
                    </parent>
                    <p>
                        WED DEVELOPER
                    </p>
                </Col>
            </Row>
            <Image className="profile" src={ProfileImage} roundedCircle />  
            <Row className="social">
                <Col>
                    <a href="https://www.linkedin.com/in/mirna-zayada-b722031b2/" target='_blank' className="fa fa-linkedin"></a>
                    <a href="https://github.com/myrna22" target='_blank' className="fa fa-github"></a>
                </Col>
            </Row>
            
        </div>
    )
}
