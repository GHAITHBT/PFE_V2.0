import { useState,useEffect } from "react"
import react from "react"
import axios from "axios"
import logo from "./logo.png"
import { Button,Table } from "react-bootstrap";
const PrintFact= () =>{
const [Data, setData] = useState([]);
const idfact = localStorage.getItem("idfact");
    console.log('idfact',idfact)
const handlePrint =()=>{
    window.print()

}
const getdata = () =>{
    const url = 'http://localhost:5001/Facture/'+idfact
    axios.get(url)
        .then(response => {
            const result = response.data;
            setData(result)
                console.log(Data.NumFact)
                handlePrint();
            })
        .catch(err => {
            console.log(err)
        })}
        useEffect(() => {
            getdata();
        }, [])

return(
    <div>
    <div className='table-responsive'>
        <table>
            
       <tr><td style={{width:"700px"}}>
       <img style={{height:"130px"}} src={logo} alt="Logo" /><br></br>    
          TOUIHRI EQUIPEMENT AUTO<br/>
        Avenue l'uma - jendouba 8100<br/>
        20 660 427<br/></td>
        <td>                       <tr><td> <b>Date : </b></td><td>{Data.date}</td></tr>
</td></tr></table>
        <br/>
       
    
        <div style={{marginLeft:"500px"}}>
        
                    <tr>
                        <tr><th>Client</th></tr>
                        <tr><td>{Data.NomCL}</td></tr>
                        <tr><td>{Data.Adresse}</td></tr>
                        <tr><td>{Data.CDPostVille}</td></tr>
                        <tr><td>{Data.Téléphone}</td></tr>
                        <tr><td>{Data.email}</td></tr>

                    </tr>
                
           <br/>
            <br/>
        
           
                      

                    
        </div>
        <b style={{marginLeft:"320px"}}>Facture N° : </b>{Data.NumFact}<br/>
        <Table>
                            <thead>
                            <tr>
                                <th >Description</th>
                                <th>Prix unitaire</th>
                                <th>Quantité </th>
                                <th>Total</th>
                            </tr>
                        </thead>
                            
                                <tbody>
                                    
                                {Data.Articles?.map((item) =>
                                <tr key={item._id}>
                                    <td>{item[0]}</td>
                                    <td>{item[1]}</td>
                                    <td>{item[2]}</td>
                                    <td>{parseFloat(item[1])*parseInt(item[2])}</td>
                                    
                                    
                                    
                                </tr>
                            )}
                        </tbody>
                       
                            

                        </Table>
                        <br/>
                        <table  style={{marginLeft:'500px',borderWidth:"10px"}}>
                                
                                <tr >
                                <td> Montant T.H.T</td><td><b> : {Data.MontTHT}</b> DT</td></tr>
                              
                                <tr>
                                <td> TVA</td><td><b> : {Data.TotalTVA}</b> </td>
                              </tr> 
                              <tr>
                              <td> Montant T.T.T.C</td><td><b> : {Data.MontTTTC}</b> DT</td>
                               
                               
                              </tr> 
                                
                            </table>
    </div>
   </div> 
);
 

};
export default PrintFact;
