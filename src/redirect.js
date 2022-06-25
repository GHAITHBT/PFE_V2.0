import React from 'react';
import { BrowserRouter as Router, Switch, Route,Redirect } from 'react-router-dom';
import {Caisse_emp} from './pages/caisse_emp';

import Login1 from './Login'
import App from './App'
import EMPINTER from './Employé';
function Redir() {
  return (
    <>
    
{
}
      <Router>
      <Switch>
      <Route path='/' exact component={Login1} />
      <Route path='/App' exact component={App} />

      <Route path='/Employé' component={EMPINTER} />

      <Route path='/Cassier' component={Caisse_emp} />
      </Switch>
      </Router>
   
     
    </>
  );
}

export default Redir;
