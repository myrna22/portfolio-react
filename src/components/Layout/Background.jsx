import React from 'react'
import {  Card } from 'react-bootstrap'
import Bg from '../Images/laptop.jpg'
import ProfilePhoto from './ProfilePhoto'



export default function Background() {
    return (
        <div className='cover'>
            <Card.Img src={Bg} alt="Card image"/>
            <Card.ImgOverlay>
                <ProfilePhoto/>
            </Card.ImgOverlay>
        </div>
    )
}
