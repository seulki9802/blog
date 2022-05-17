import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configStore";

import { Route, Switch, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "./transition.css";


function App(props) {
 
  return (
    <ConnectedRouter history={history}>
        <TransitionGroup className="transition-group">
        <CSSTransition key={location.pathname} classNames="pageSlider" timeout={500}> 
        
          <Switch location={location}>
          <Route path="/" exact component={Home} />
          <Route path="/reviewdetail/:bookid/:reviewid" exact component={ReviewDetail}/>
          </Switch>
          </CSSTransition>
   		 </TransitionGroup> 
     </ConnectedRouter>
      
  );
}

export default App;