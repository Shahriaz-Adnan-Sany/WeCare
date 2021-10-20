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
import Notfound from './Components/NotFound/Notfound';
import Footer from './Components/Footer/Footer';
import SingleItem from './Components/SingleItem/SingleItem';
import Career from './Components/Career/Career';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import AuthProvider from './Context/AuthProvider';
import Register from './Components/Contact/Register/Register';
import LogIn from './Components/Contact/LogIn/LogIn';
import InputForm from './Components/Contact/InputForm/InputForm';

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

            <Route exact path='/Home'>
              <Home></Home>
            </Route>

            <Route exact path='/About'>
              <About></About>
            </Route>

            <Route exact path='/Services'>
              <Services></Services>
            </Route>

            <Route exact path='/Features'>
              <Feature></Feature>
            </Route>

            <PrivateRoute exact path="/Career">
              <Career></Career>
            </PrivateRoute>

            <Route exact path='/Contact'>
              <Contact></Contact>
            </Route>

            <Route exact path='/LogIn'>
              <LogIn></LogIn>
            </Route>

            <Route exact path='/Register'>
              <Register></Register>
            </Route>

            <Route exact path='/InputForm'>
              <InputForm></InputForm>
            </Route>

            <PrivateRoute exact path='/SingleItem/:serviceID'>
              <SingleItem></SingleItem>
            </PrivateRoute>

            <Route exact path='*'>
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


