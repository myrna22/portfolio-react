
import React, { Component } from 'react';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Education from '../Education/Education';
import Experience from '../Experience/Experience';
import Skills from '../Skills/Skills';

class Home extends Component {
    render() {
        return (
            <>
                <About/>
                <Education/>
                <Experience/>
                <Skills/>
                <Contact/>
            </>
        );
    }
}

export default (Home);