import React from 'react';
import './App.css';
import Navbar from './components/Navbar/NavigationBar';
import { BrowserRouter as Router, Switch, Route,Redirect } from 'react-router-dom';
import {Article} from './pages/Article';
import {Caisse} from './pages/caisse';
import {Clients} from './pages/Clients'
import {Employee} from './pages/Liste_employé'
import {Chart} from './pages/Charts'
import {BL} from'./pages/Bon_Livraison'
import {CM} from './pages/commande'
import Login1 from './Login'
import { Facture } from './pages/Facture';
import Redir from './redirect'
import PrintFact from './pages/PRINTFACT';
import PrintBC from './pages/PrintBC'

function App() {
  return (
    <>
    
{
}
      <Router>
      <Route path='/' exact component={Redir} />
     

      {
        
        
            
              <Switch>
        <Route path='/PRINTFACT' exact component={PrintFact} />
         <Route path='/PRINTBC' exact component={PrintBC} />


              <div>
                
              <Navbar />
              <Route path='/App' exact component={Chart} />

            <Route path='/Acceuil' exact component={Chart} />
            <Route path='/Article' component={Article} />
            <Route path='/Facture' component={Facture} />

                <Route path='/Caisse' component={Caisse} />
            <Route path='/Client' component={Clients} />
            <Route path='/Employer' component={Employee} />
            <Route path='/BL' component={BL} />
            <Route path='/Commande' component={CM} />
            </div>
              </Switch>
            
            
    }

       
      </Router>
   
     
    </>
  );
}

export default App;
