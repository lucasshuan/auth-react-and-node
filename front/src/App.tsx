import React from 'react';
import {BrowserRouter as BwRouter, Switch, Route} from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <BwRouter>
      
      <Switch>
        <Route component={Login} exact path="/"/>
      </Switch>

      <Switch>
        <Route component={Register} path="/register"/>
      </Switch>

      <Switch>
        <Route component={Home} path="/home"/>
      </Switch>

    </BwRouter>
  );
}

export default App;