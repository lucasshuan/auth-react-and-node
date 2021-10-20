import {BrowserRouter as BwRouter, Switch, Route} from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

export default function App() {
  return (
    
    <BwRouter>
      <Route component={Login} exact path="/"/>
      <Route component={Register} path="/register"/>
      <Route component={Home} path="/home"/>
    </BwRouter>
      
  );
}