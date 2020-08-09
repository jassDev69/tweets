import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Donald from './components/donald'
import Hillary from './components/hillary'

function Routing() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>           
          </li>
          <li>
            <Link to="/donald">Donald Trump</Link>
          </li>
          <li>
            <Link to="/hillary">Hillary Clinton</Link>
          </li>
        </ul>

        <Switch>
          <Route exact path="/">
           <div>
             <img className="back" alt="background"src="background.jpg"/>
           </div>
          </Route>
          <Route path="/hillary">
              <Hillary/>
          </Route>
          <Route path="/donald">
              <Donald/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


ReactDOM.render(
  <Routing/>,
  document.getElementById('root')
);
