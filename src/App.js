import { useState, useRef } from 'react';
import { BrowserRouter, Routes, Route, Link, Switch } from 'react-router-dom';

import Me from './pages/Me';
import Project from './pages/Project';
import Home from './pages/Home';


import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { TransitionGroup, CSSTransition, SwitchTransition } from 'react-transition-group';
import { getElementError } from '@testing-library/react';

function App() {

  const [state, setState] = useState('home');

  function changePage(e) {
    setState(e.target.name)
  }

  return (
    <div className='App'>
      <BrowserRouter>

        <div className="black-nav">
          <h2>유슬기의 포폴</h2>
          <ul onClick={ changePage }>
            <Link to='/' name='home'>Home</Link>
            <Link to='/me' name='me'>Me</Link>
            <Link to='/project' name='project'>Project</Link>
          </ul>
        </div>

        <SwitchTransition mode={"out-in"}>
          <CSSTransition
            key={ state }
            addEndListener={ (node, done) => node.addEventListener("transitionend", done, false) }
            classNames='fade'
          >
            <div>
              <h3> { state } </h3>
              <Routes>
                {
                  state === 'home'
                  ? <Route path='/' element={ <Home /> } />
                  : state === 'me'
                  ? <Route path='/me' element={ <Me /> } />
                  : state === 'project'
                  ? <Route path='/project' element={ <Project /> } />
                  : null
                }
                {/* <Route path='/' element={ <Home /> } />
                <Route path='/me' element={ <Me /> } />
                <Route path='/project' element={ <Project /> } /> */}
              </Routes>
            </div>
          </CSSTransition>
        </SwitchTransition>

      </BrowserRouter>

    </div>
  )
}

function Navbar() {
  return(
    <div className="black-nav">
      유슬기의 포트폴리오
      <ul>
          <Link to="/" ><li>Home</li></Link>
          <Link to="/me"><li>Me</li></Link>
          <Link to="/project"><li>Project</li></Link>
      </ul>
    </div>
  )
}

export default App;