import React, { Component }  from 'react';

import { useState,useEffect } from "react";
import { Table } from 'react-bootstrap';
import "../App.css";
import BarChart from "../components/BarChart";
import LineChart from "../components/LineChart";
import PieChart from "../components/PieChart";
import { UserData } from "./Data";
import axios from 'axios';

export const Chart=()=> {
  const [Data, setData] = useState([]);
  const GetEmployeeData = () => {
    //here we will get all employee data
    const url = 'http://169.254.131.15:5001/Article'
    axios.get(url)
        .then(response => {
            setData(response.data)
                console.log(Data)
            
        })
        .catch(err => {
            console.log(err)
        })
    }
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.Fournisseur),
    datasets: [{
        label: "Quantité stock",
        data: UserData.map((data) => data.Qnt),
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
  useEffect(() => {
    GetEmployeeData();
   // GetFournisseurData()
}, [])

  // IF YOU SEE THIS COMMENT: I HAVE GOOD EYESIGHT

  return (
    
    <div >
      <div style={{ width: 300 }}>
        <Table style={{marginLeft:"350px"}}>
          <tr>
        <td style={{marginLeft:"500px"}}><BarChart chartData={userData} /></td>
      
        <td style={{marginLeft:"300px"}}><LineChart chartData={userData} /></td></tr>
        <tr><td style={{marginTop:"300px"}}><PieChart chartData={userData} /></td>
        </tr>
        </Table>
      </div>
    </div>
  );
}

