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
import InputForm from './Components/Contact/InputForm';
import Footer from './Components/Footer/Footer';
import SingleItem from './Components/SingleItem/SingleItem';
import Career from './Components/Career/Career';
import AuthProvider from './Context/authProvider';
function App() {
  return (
    <div className="App">
      <AuthProvider>
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

            <Route path="/Career">
              <Career></Career>
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

            <Route path='/InputForm'>
              <InputForm></InputForm>
            </Route>

            <Route path='/SingleItem/:serviceID'>
              <SingleItem></SingleItem>
            </Route>

            <Route path='*'>
              <Notfound></Notfound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router><Router>
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

            <Route path="/Career">
              <Career></Career>
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

            <Route path='/InputForm'>
              <InputForm></InputForm>
            </Route>

            <Route path='/SingleItem/:serviceID'>
              <SingleItem></SingleItem>
            </Route>

            <Route path='*'>
              <Notfound></Notfound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
