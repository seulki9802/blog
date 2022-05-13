import {Transition, CSSTransition, SwitchTransition, TransitionGroup} from "react-transition-group";
import { BrowserRouter, Routes, Route, Link, useInRouterContext } from 'react-router-dom';


import Me from './Me';
import Project from './Project'


import { useState } from 'react';
import './transitionStyle.css';

const duration = 500;
const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
  padding: 20,
  display: "inline-block",
  backgroundColor: "#b3d0ff"
};
const transitionStyles = {
  entering: { opacity: 0 },
  entered: { opacity: 1 },
  exiting: { opacity: 1 },
  exited: { opacity: 0 },
};
function App() {
  const [inProp, setInProp] = useState(false);
  return (
    <>
      <div style={ {background: 'red'} }>
        <button onClick={() => setInProp(!inProp)}>Click to Show</button>
        <Transition in={inProp} timeout={300}>
          {(state) => (
            <div
              style={{
                ...defaultStyle,
                ...transitionStyles[state]
              }}
            >
              I'm a component that gets a Fade transition!
              <Test />
            </div>
          )}
        </Transition>
        sdfasfssdfsadfasff
      </div>

      <div style={ {background: 'blue'} }>
        <Example />
      </div>

      <div style={ {background: 'yellow'} }>
        <Example2 />
      </div>

    </>
  );
}

function Test() {
    return(
        <h3>메롱!</h3>
    )
}

function Example() {
    const [showMessage, setShowMessage] = useState(false);
    return (
      <div>
         <button onClick={() => setShowMessage(!showMessage)}>
            Show Message
          </button>

          {/* <Link to="/me"><li>Me</li></Link>
          <Link to="/project"><li>Project</li></Link> */}

         <CSSTransition in={showMessage} timeout={300} classNames="example" unmountOnExit>
            <p>Hello, I am a message that animates with CSSTransition!</p>

            {/* <Routes>
              <Route path='/me' element={ <Me /> }></Route>
              <Route path='/project' element={ <Project /> }></Route>
            </Routes> */}

        </CSSTransition>
      </div>
    );
}

function Example2() {
  const [showMessage, setShowMessage] = useState(false);

  return (

    <div>
      <BrowserRouter>
        <Link to="/me" onClick={() => setShowMessage(!showMessage)} >Me</Link>
        <Link to="/project" onClick={() => setShowMessage(!showMessage)}>PR</Link>


        <CSSTransition in={showMessage} timeout={300} classNames="example" unmountOnExit>
            {/* <p>Hello, I am a message that animates with CSSTransition!</p> */}

            <Routes>
              <Route path='/me' element={ <Me /> }></Route>
              <Route path='/project' element={ <Project /> }></Route>
            </Routes>

        </CSSTransition>

      </BrowserRouter>
    </div>
  );
}

export default App;
