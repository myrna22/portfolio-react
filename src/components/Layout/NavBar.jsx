import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

export default function NavBar() {
    return (
        <Navbar  className="Navbar" variant="light" sticky="top">
            <Container>
                <Navbar.Brand href="/">Mirna Portfolio</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="#about">About</Nav.Link>
                    <Nav.Link href="#education">Education</Nav.Link>
                    <Nav.Link href="#experience">Experience</Nav.Link>
                    <Nav.Link href="#skills">Skills</Nav.Link>
                    <Nav.Link href="#contact">Contact</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}
