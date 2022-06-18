import React, { useEffect} from 'react';
import './App.css';
import Navbar from './components/NavigationBarEmp';
import { BrowserRouter as Router, Switch, Route,Redirect } from 'react-router-dom';
import {Article} from './pages/Article';
import {Caisse} from './pages/caisse';
import {Clients} from './pages/Clients'
import {Employee} from './pages/Liste_employé'
import FeaturedInfo from './components/FeaturedInfo';
import {Chart} from './pages/Charts'
import PrintFact from './pages/PRINTFACT';
import {BL} from'./pages/Bon_Livraison'
import {CM} from './pages/commande'
import Login1 from './Login'
import { Facture } from './pages/Facture';
import PrintBC from './pages/PrintBC'
import PrivateRoute from 'react-private-route'
import Redir from './redirect'

/* <Router>
      
      <Route path='/' exact component={Login1} />

      {
        
        localStorage.auth==true?
            [ 
              <Switch>
       
              <div>
              <Navbar />
              
            <Route path='/Acceuil' exact component={FeaturedInfo} />
            <Route path='/Article' component={Article} />
                <Route path='/Caisse' component={Caisse} />
            <Route path='/Client' component={Clients} />
            <Route path='/Employer' component={Employee} />
            <Route path='/BL' component={BL} />
            <Route path='/Commande' component={CM} />
            </div>
              </Switch>
            ]
            :
            <Redirect To ="/" component={Login1} ></Redirect>
    }

        
       
      </Router> */
     
function App() {

   

  return (
    <>
{
}
      <Router>
      <Route path='/' exact component={Login1} />
    



      { 
              <Switch>
         <Route path='/PRINTFACT' exact component={PrintFact} />
         <Route path='/PRINTBC' exact component={PrintBC} />

              <div>
                
              <Navbar />
              <Route path='/Employé' component={Article} />
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
