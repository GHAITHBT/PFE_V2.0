import React from 'react';
import Navbar from './components/NavigationBar';
import { BrowserRouter as Router, Switch, Route,Redirect } from 'react-router-dom';
import {Article} from './pages/Article';
import {Caisse} from './pages/caisse';
import {Clients} from './pages/Clients'
import {Employee} from './pages/Liste_employé'
import FeaturedInfo from './components/FeaturedInfo';
import {Chart} from './pages/Charts'
import PrintBS from './pages/PRINTFACT';
import {BL} from'./pages/Bon_Livraison'
import {CM} from './pages/commande'
import Login1 from './Login'
import { Facture } from './pages/Facture';
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

      <Route path='/Cassier' component={Caisse} />
      </Switch>
      </Router>
   
     
    </>
  );
}

export default Redir;
