import './App.css';
import {BrowserRouter as Router, Route, Switch, NavLink, Link} from 'react-router-dom'
import Home from './components/Home/Home';
import About from './components/About/About';
import Contacts from './components/Contacts/Contacts';

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <NavLink exact to="/" activeStyle={{fontWeight: "bold",    color: "red"  }} >Home</NavLink>
          </li>
          <li>
            <NavLink exact to="/about" activeStyle={{fontWeight: "bold",    color: "red"  }} >About</NavLink>
          </li>
          <li>
            <NavLink exact to="/dashboard" activeStyle={{fontWeight: "bold",    color: "red"  }} >Dashboard</NavLink>
          </li>
        </ul>
        <hr />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/dashboard">
            <Contacts />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
