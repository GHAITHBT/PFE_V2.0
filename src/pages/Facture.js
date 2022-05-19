import { useState,useEffect } from "react"
import react from "react"
import axios from "axios"
import { Button } from "react-bootstrap";
const Facture= () =>{
    const [Montant, setMontant] = useState("0000.0 DT");

const [DataBS, setDataBS] = useState([]);
const handlePrint =()=>{
    window.print()

}
const getdata = () =>{
    const url = 'http://localhost:5001/Caisse'
    axios.get(url)
        .then(response => {
            const result = response.data;
            setDataBS(result)
                console.log(url)
                //handlePrint();
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
       <b > Societe Touhri Piéce Auto</b><br/>
        <b>Rondpoint PASSAGE HHHHH</b><br/>
        <b>TW KI NETFAKER NUMRO TW N7OTO</b><br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <center><b>Facture Client</b></center>

        <br/>
        <br/>
        <b>Client :</b>
        <br/>
        <br/>
        <hr/>
        
        <table  className='table table-striped table-hover table-bordered' >
            <thead>
                <tr>
                    <th>Code Article</th>
                    <th>Description</th>
                    <th>Fournisseur</th>
                    <th>Prix</th>
                    <th>Quantité</th>
                </tr>
            </thead>
            <tbody>
                {DataBS.map((item) =>
                    <tr key={item._id}>
                        <td>{item.CodeArticle}</td>
                        <td>{item.Description}</td>
                        <td>{item.Fournisseur}</td>
                        <td>{item.Prix}</td>
                        <td>{item.QuantitéVN}</td>

                    </tr>
                )}
            </tbody>
        </table>
        <input type="text" className='form-control'readOnly placeholder="Rest"/>
        <br></br>
        <br></br>
        <br></br>

                    <div align="left"> <b>  {Montant}</b></div>
    </div>
   </div> 
);


};
export default Facture;
