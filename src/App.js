// import { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Me from './Me';
import Project from './Project'

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { TransitionGroup, CSSTransition } from 'react-transition-group';

function App() {
  return (
    <div className='App'>

      {/* <div className='App-header'>
        
      </div> */}

      <BrowserRouter>
        <Navbar />

        <TransitionGroup>
          <CSSTransition timeout={ 300 } classNames="fade">
            <Routes>
              <Route path='/me' element={ <Me /> }></Route>
              <Route path='/project' element={ <Project /> }></Route>
          </Routes>
          </CSSTransition>
        </TransitionGroup>

      </BrowserRouter>
    </div>
  )
}

function Navbar() {
  return(
    <div className="black-nav">
      유슬기의 포트폴리오
      <ul>
          <Link to="/"><li>Home</li></Link>
          <Link to="/me"><li>Me</li></Link>
          <Link to="/project"><li>Project</li></Link>
      </ul>
    </div>
  )
}

export default App;