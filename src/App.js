import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from './Components/Home/Home';
import About from './Components/About/About';
import Services from './Components/Service/Services';
import Feature from './Components/Features/Feature';
import Contact from './Components/Contact/Contact';
import Header from './Components/Header/Header';
import LogIn from './Components/Contact/LogIn';
import Register from './Components/Contact/Register';
import Notfound from './Components/NotFound/Notfound';
function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>

          <Route exact path='/'>
            <Home></Home>
          </Route>

          <Route path='/Home'>
            <Home></Home>
          </Route>

          <Route path='/About'>
            <About></About>
          </Route>

          <Route path='/Services'>
            <Services></Services>
          </Route>

          <Route path='/Features'>
            <Feature></Feature>
          </Route>

          <Route path='/Contact'>
            <Contact></Contact>
          </Route>

          <Route path='/LogIn'>
            <LogIn></LogIn>
          </Route>

          <Route path='/Register'>
            <Register></Register>
          </Route>

          <Route path='*'>
            <Notfound></Notfound>
          </Route>

          <Route>

          </Route>
          <Route>

          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
