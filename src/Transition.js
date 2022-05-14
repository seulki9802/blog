import {Transition, CSSTransition, SwitchTransition, TransitionGroup} from "react-transition-group";
import { BrowserRouter, Routes, Route, Link, useInRouterContext } from 'react-router-dom';


import Me from './Me';
import Project from './Project'


import { useState } from 'react';
import './transitionStyle.css';
import { isValidInputTimeValue } from "@testing-library/user-event/dist/utils";

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
  return (
    <>
      {/* <div style={ {background: 'red'} }>
        <Example0 />
      </div>

      <div style={ {background: 'blue'} }>
        <Example1 />
      </div>

      <div style={ {background: 'yellow'} }>
        <Example2 />
      </div> */}

      <div style={ {background: 'yellow'} }>
        <Example3 />
      </div>

    </>
  );
}

function Test() {
    return(
        <h3>메롱!</h3>
    )
}

function Example0() {
  const [inProp, setInProp] = useState(false);

  return(
    <>
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
    </>
  )
}

function Example1() {
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

function Example3() {
  const [state, setState] = useState(0);

  const items = [
    {
      id : 0,
      name : 'home ',
      path : '/'
    },
    {
      id : 1,
      name : 'me ',
      path : '/me'
    },
    {
      id : 2,
      name : 'project ',
      path : '/project'
    }
  ]

  function changeItem(e) {
    setState(e.target.id)
  }

  console.log(state==1)

  return (
    <BrowserRouter>

      { items.map((item) => {
        return <Link key={ item.id } to={ item.path } onClick={ changeItem } id={ item.id }>{ item.name }</Link>
      }) }



      <SwitchTransition mode={"out-in"}>
        <CSSTransition
          key={ state }
          addEndListener={ (node, done) => node.addEventListener("transitionend", done, false) }
          classNames='fade'
          timeout = { 250 }
        >
          <>
          <div>
  
            <h3>{ state }</h3>

            <Routes>
              {/* <Route path='/me' element={ <Me />}></Route>
              <Route path='/project' element={ <Project />}></Route> */}
              {
                state == 1
                ? <Route path='/me' element={ <Me />}></Route>
                : state == 2
                ? <Route path='/project' element={ <Project />}></Route>
                : null
              }

            </Routes>

            
          </div>

          </>
        </CSSTransition>
      </SwitchTransition>

    </BrowserRouter>
  );
}

export default App;
