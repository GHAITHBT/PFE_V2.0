import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Login1 from './Login';
import Redir from './redirect'
import EMPINTER from './Employé'
import {Article} from './pages/Article';
import {Caisse} from './pages/caisse';
import {Clients} from './pages/Clients'
import {Employee} from './pages/Liste_employé'
import {Chart} from './pages/Charts'
import {BL} from'./pages/Bon_Livraison'
import {CM} from './pages/commande'
import { Facture } from './pages/Facture';
import PrintFact from './pages/PRINTFACT';
import PrintBC from './pages/PrintBC'
ReactDOM.render(
  <React.StrictMode>
<Facture/>
 </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
