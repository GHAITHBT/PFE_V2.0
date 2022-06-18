import { useState,useEffect } from "react"
import react from "react"
import axios from "axios"
import logo from "./logo.png"
import { Button,Table } from "react-bootstrap";
const PrintBC= () =>{
const [Data, setData] = useState([]);
const idcom = localStorage.getItem("idcom");
const handlePrint =()=>{
    window.print()

}
const getdata = () =>{
    const url = 'http://localhost:5001/Commande/'+idcom
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
       
    
      
           <br/>
            <br/>
        
           
                      

                    
        </div>
        <b style={{marginLeft:"230px"}}>Bon de commande N° : </b>{Data.NumCom}<br/><br/><br/>
        <b>Articles : </b><br/><br/>
        <Table>
                            <thead>
                            <tr>
                                <th >Description</th>
                                <th>Prix unitaire</th>
                                <th>Quantité </th>
                            </tr>
                        </thead>
                            
                                <tbody>
                                    
                                {Data.Articles?.map((item) =>
                                <tr key={item._id}>
                                    <td>{item[0]}</td>
                                    <td>{item[1]}</td>
                                    <td>{item[2]}</td>
                                    
                                    
                                    
                                </tr>
                            )}
                        </tbody>
                       
                            

                        </Table>
                        <br/><br/><br/><br/>
                        Etat : <br></br><br/>
                        <b style={{marginLeft:'50px'}}>{Data.Etat}</b>
    </div>
   
);
 

};
export default PrintBC;
