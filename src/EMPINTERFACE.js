import React from 'react';
import './App.css';
import Navbar from './components/NavigationBarEmp';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {Article} from './pages/Article';
import {Caisse} from './pages/caisse';
import {Clients} from './pages/Clients'
import {Employee} from './pages/Liste_employé'
import FeaturedInfo from './components/FeaturedInfo';
function EMPINTER() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/Acceuil' exact component={FeaturedInfo} />
		  <Route path='/Article' component={Article} />
          <Route path='/Caisse' component={Caisse} />
		  <Route path='/Client' component={Clients} />
		  <Route path='/Employer' component={Employee} />
        </Switch>
      </Router>
    </>
  );
}

export default EMPINTER;
