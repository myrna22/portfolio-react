import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Experience from './components/Experience/Experience';
import Education from './components/Education/Education';
import Skills from './components/Skills/Skills';
import Page404 from './components/Layout/Page404';
import NavBar from './components/Layout/NavBar';
import Background from './components/Layout/Background';
import Footer from './components/Layout/Footer';
  function App() {
  return (
      <Router>
        <div>
          <NavBar/>
          <Background/>
          <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/about">
                <About />
              </Route>
              <Route exact path="/Education">
                <Education/>
              </Route>
              <Route exact path="/Experience">
                <Experience/>
              </Route>
              <Route exact path="/Skills">
                <Skills />
              </Route>
              <Route exact path="/contact">
                <Contact/>
              </Route>
              <Route path="/*">
                <Page404/>
              </Route>
          </Switch>
          <Footer/>
        </div>
      </Router>
  );
}

export default App;
