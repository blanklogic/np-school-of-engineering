import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Courses from './components/pages/Courses';
import StudentLife from './components/pages/StudentLife';
import CETAcademy from './components/pages/CETAcademy';
import Footer from './components/Footer';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path='/about' component={About}/>
          <Route path='/courses' component={Courses}/>
          <Route path='/studentlife' component={StudentLife}/>
          <Route path='/cetacademy' component={CETAcademy}/>
        </Switch>
        <Footer />
      </Router>
    </React.Fragment>
  );
}

export default App;