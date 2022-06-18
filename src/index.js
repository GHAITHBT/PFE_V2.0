import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Login1 from './Login';
import Add from './pages/Add'
import PrintComponent from './pages/print'
import PrintBS from './pages/PRINTFACT'
import {Caisse} from './pages/caisse'
//import Clients from './pages/Clients'
import Facture from'./pages/Facture'
import Chart from './pages/Charts'
import SideNav from './components/Sidebar'
import FeaturedInfo from './components/FeaturedInfo'
import {Article} from './pages/Article'
import {Employee} from './pages/Liste_employé'
import {BL} from'./pages/Bon_Livraison'
import Redir from './redirect'
import EMPINTER from './Employé'
ReactDOM.render(
  <React.StrictMode>
<App/>
 </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
