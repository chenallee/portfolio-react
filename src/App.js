import React from 'react';
// import router components
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import UI components
import Header from './components/Header';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Projects from './components/pages/Projects';
import Footer from './components/Footer';

// import bootstrap stylesheet to make styles available to all components
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import particlesConfig from './assets/particlesjs-config.json';
import Particles from 'react-particles-js';

//import fontawesome, add brand icons to library
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeSquare, faEye, faCode } from '@fortawesome/free-solid-svg-icons'
library.add(fab, faEnvelopeSquare, faEye, faCode);

// /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
// particlesJS.load('root', './assets/particlesjs-config.json', function() {
//   console.log('callback - particles.js config loaded');
// });

function App() {
  return (

    <Router>
      <>
        
          <Header />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/projects' component={Projects} />
            <Route exact path='/about' component={About} />
            <Route
              render={() => (
                <h1 className='text-center'>
                  <span role='img' aria-label='poop emoji'>
                    💩
                </span>{' '}
                Wrong Page!
                </h1>
              )}
            />
          </Switch>
          <Footer />
          <Particles params={particlesConfig} />
      </>
    </Router>


  );
}

export default App;
