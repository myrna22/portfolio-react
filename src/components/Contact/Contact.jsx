import React from 'react'
import { Button, Card, Form } from 'react-bootstrap';
import { useRef, useState } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
    const formRef = useRef()
    const [done, setDone] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(
            "service_kr5s9v3",
            "template_6nssrdx",
            formRef.current,
            "JhGc-iyKL1Uf1o-Oi"
        )
        .then(
            (result) => {
                setDone(true)
            }
        )
    }    
    return (
        <>
            <h3 id='contact'>Contact me</h3>
            <Card>
            <Form className='padd' ref={formRef} onSubmit={handleSubmit}>
                    <Form.Group   controlId="Name">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control type="text" placeholder="Your Name" name="user_name" />
                    </Form.Group>
                    <Form.Group   controlId="Subject">
                        <Form.Label>Subject</Form.Label>
                        <Form.Control type="text" placeholder="Subject"  name="user_subject" />
                    </Form.Group>
                    <Form.Group   controlId="exampleForm.ControlInput1">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com"  name="user_email" />
                    </Form.Group>
                    <Form.Group   controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Message</Form.Label>
                        <Form.Control as="textarea" rows={3}  name='message'/>
                    </Form.Group>
                    <Button buttonType='submit'>Send</Button>
                    {done && "Thank You...."}
                </Form>
            </Card>
        </>
    )
}

export default (Contact);
