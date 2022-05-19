import { useState,useEffect } from "react"
import react from "react"
import axios from "axios"
import { Button } from "react-bootstrap";
const PrintBS= () =>{
const [DataBS, setDataBS] = useState([]);
const handlePrint =()=>{
    window.print()

}
const getdata = () =>{
    const url = 'http://localhost:5001/BS'
    axios.get(url)
        .then(response => {
            const result = response.data;
            setDataBS(result)
                console.log(url)
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
        Societe Touhri Piéce Auto<br/>
        Rondpoint PASSAGE HHHHH<br/>
        TW KI NETFAKER NUMRO TW N7OTO<br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <table  className='table table-striped table-hover table-bordered' >
            <thead>
                <tr>
                    <th>Code Article</th>
                    <th>Description</th>
                    <th>Fournisseur</th>
                    <th>Quantité</th>
                </tr>
            </thead>
            <tbody>
                {DataBS.map((item) =>
                    <tr key={item._id}>
                        <td>{item.CodeArticle}</td>
                        <td>{item.Description}</td>
                        <td>{item.fournisseur}</td>
                        <td>{item.Quantité}</td>

                    </tr>
                )}
            </tbody>
        </table>
    </div>
   </div> 
);


};
export default PrintBS;
