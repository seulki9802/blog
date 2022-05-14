import { useState, useRef } from 'react';
import { BrowserRouter, Routes, Route, Link, Switch } from 'react-router-dom';

import Me from './Me';
import Project from './Project';
import Home from './Home';


import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { TransitionGroup, CSSTransition, SwitchTransition } from 'react-transition-group';
import { getElementError } from '@testing-library/react';

function App() {

  const [state, setState] = useState(0);

  const pages = [
    {
      id : 0,
      name : 'home',
      path : '/',
      element : <Home />
    },
    {
      id : 1,
      name : 'me',
      path : '/me',
      element : <Me />
    },
    {
      id : 2,
      name : 'project',
      path : '/project',
      element : <Project />
    }
  ]

  function changePage(e) {
    setState(e.target.id)
  }

  return (
    <div className='App'>
      <BrowserRouter>

        <div className="black-nav">
          유슬기의 포트폴리오
          <ul>
            { pages.map((page) => {
              return <Link key={ page.id } to={ page.path } onClick={ changePage } id={ page.id }>{ page.name }</Link>
            }) }
          </ul>
        </div>

        <SwitchTransition mode={"out-in"}>
          <CSSTransition
            key={ state }
            addEndListener={ (node, done) => node.addEventListener("transitionend", done, false) }
            classNames='fade'
            timeout = { 250 }
          >
            <>
            <div>

              <h3> { state } </h3>

              <Me ></Me>

              {/* <Routes>

                {
                  pages.map((page) => {
                    return state == page.id? <Route key={ page.id } path={ page.path } element={ page.element }></Route>: null
                  })
                }

              </Routes> */}

              
            </div>

            </>
          </CSSTransition>
        </SwitchTransition>

        {/* <CSSTransition id='dd' in={ showPage } timeout={ 300 } classNames="fade" unmountOnExi>
          <Routes>
            <Route path='/me' element={ <Me /> }></Route>
            <Route path='/project' element={ <Project /> }></Route>
          </Routes>
        </CSSTransition> */}

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