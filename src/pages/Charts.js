import React, { Component }  from 'react';
import { Button, Modal, ModalTitle,Table } from 'react-bootstrap'

import { useState,useEffect } from "react";
import "../App.css";
import BarChart from "../components/charts/BarChart";
import LineChart from "../components/charts/LineChart";
import PieChart from "../components/charts/PieChart";
import axios from 'axios';

export const Chart=()=> {
  const [Data, setData] = useState([]);
  const [DataAR, setDataAR] = useState([]);

  const GetEmployeeData = () => {
    //here we will get all employee data
    const url = 'http://localhost:5001/Fournisseur'
    axios.get(url)
    
        .then(response => {
            setData(response.data)
                console.log(Data)
            
        })
        .catch(err => {
            console.log(err)
        })
    }
    const GetArchive = () => {
      //here we will get all employee data
      const url = 'http://localhost:5001/Archive'
      axios.get(url)
      
          .then(response => {
              setDataAR(response.data)
                  console.log(Data)
              
          })
          .catch(err => {
              console.log(err)
          })
      }
  const [userData, setUserData] = useState({
    labels: Data.map((data) => data.fournisseur),
    datasets: [{
        label: "Quantité stock",
        data: Data.map((data) => data.Qnt),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });
  const data = {
    labels: Data.map(o => o.fournisseur), // first change
    datasets: [{
      label: 'Quantité Stock par Fournisseur',
      fill: false,
      lineTension: 0.0,
      backgroundColor:   [
        "rgba(75,192,192,1)",
        "#ecf0f1",
        "#50AF95",
        "#f3ba2f",
        "#2a71d0",],
      borderColor: 'rgb(41, 33, 116,0.5)',
      pointHitRadius: 20,
      data: Data.map(o => parseInt(o.Qnt)) // second change
    }]
  };
  const dataAR = {
    labels: DataAR.map(o => o.date), // first change
    datasets: [{
      label: 'Dinar',
      fill: false,
      lineTension: 0.0,
      backgroundColor:   [
        "rgba(75,192,192,1)",
        "#ecf0f1",
        "#50AF95",
        "#f3ba2f",
        "#2a71d0",],
      borderColor: 'rgb(41, 33, 116,0.5)',
      pointHitRadius: 20,
      data: DataAR.map(o => parseInt(o.Montant)) // second change
    }]
  };
  useEffect(() => {
    GetEmployeeData();
    GetArchive()
   // GetFournisseurData()
}, [])

  // IF YOU SEE THIS COMMENT: I HAVE GOOD EYESIGHT

  return (
    
    <div >
      <p style={{color:'black',fontSize:"25px",marginLeft:"10px",fontFamily:"Times New Roman",fontWeight:"bold"}}>Acceuil</p>
            <hr></hr>
           
                    
                    <Button style={{marginLeft:'500px',width:"100px",}} variant='dark' onClick={() => {window.location.reload()}}>
                    <b >Actualiser</b>
                    </Button>
                    <hr></hr>
      <div style={{ width: 800 }}>
        <Table style={{marginLeft:"200px"}}>
          <tr>
        <td ><BarChart style={{marginLeft:"900px"}} chartData={data} /></td>
      
        <td style={{marginLeft:"300px"}}><LineChart chartData={dataAR} /></td>
        <td style={{marginTop:"300px"}}><PieChart chartData={data} /></td></tr>
        <tr>
        <td ><BarChart style={{marginLeft:"1000px"}} chartData={data} /></td>
      
        <td style={{marginLeft:"300px"}}><LineChart chartData={dataAR} /></td>
        </tr>
        
        </Table>
      </div>
    </div>
  );
}

