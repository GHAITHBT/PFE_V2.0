import React, { useEffect, useState } from 'react';
import { Button, Modal, ModalTitle,Table } from 'react-bootstrap'
import axios from 'axios'
import { useHistory } from 'react-router-dom';
import { ConsoleSqlOutlined } from '@ant-design/icons';

export const Facture = () => {
    var i=1
    let history = useHistory();
        var ipadress='localhost'
        var CodeA=""
        var FR=""
        var client=""
        const [Fournisseur, setFournisseur] = useState("");
        const [DataFr, setDataFr] = useState([]);

    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()} ${current.getHours()}:${current.getMinutes()}`;
    const [fournisseur, setfournisseur] = useState("")
    const [CodeArticle, setCodeArticle] = useState("Select Article")

    const [Prix, setPrix] = useState("")
    const [Client,setClient ] = useState("")

    const [PrixUni, setPrixUni] = useState("")
    const [MontTHT, setMontTHT] = useState("")
    const [Quantité, setQuantité] = useState("")
    const [MontTTTC, setMontTTTC] = useState("")
    const [RemiseHT, setRemiseHT] = useState("")
    const [MontDV, setMontDV] = useState("")
    const [TotNetHT, setTotNetHT] = useState("")
    const [Description, setDescription] = useState("")
    const [Rest, setRest] = useState("")
    const [NumFact, setNumFact] = useState(0)

    const [Data, setData] = useState([]);
    const [DataCL, setDataCL] = useState([]);
    const [FDataCL, setFDataCL] = useState([]);


    const [Article, setArticle] = useState([]);

    const [DataART, setDataART] = useState([]);

    const [RowData, SetRowData] = useState([])
    const [ViewShow, SetViewShow] = useState(false)
    const [Adresse, setAdresse] = useState("");
    const [Téléphone, setTéléphone] = useState("");
    const [TotalTVA, setTotalTVA] = useState("19%");
    const [NomCL, setNomCL] = useState("");
    const [CDPostVille, setCDPostVille] = useState();
    const [Articles, setArticles] = useState([]);
    const handleViewShow = () => { SetViewShow(true) }
    const hanldeViewClose = () => { SetViewShow(false) }
    //FOr Edit Model
    const [ViewPostBL, SetPostShowBL] = useState(false)
    const handlePostShowBL = () => { SetPostShowBL(true) }
    const hanldePostCloseBL = () => { SetPostShowBL(false) }
    const [ViewEdit, SetEditShow] = useState(false)
    const handleEditShow = () => { SetEditShow(true) }
    const hanldeEditClose = () => { SetEditShow(false) }
    //FOr Delete Model
    const [ViewDelete, SetDeleteShow] = useState(false)
    const handleDeleteShow = () => { SetDeleteShow(true) }
    const hanldeDeleteClose = () => { SetDeleteShow(false) }
    //FOr Add New Data Model
    const [ViewPost, SetPostShow] = useState(false)
    const handlePostShow = () => { SetPostShow(true) }
    const hanldePostClose = () => { SetPostShow(false) }

    //Define here local state that store the form Data
    const [fullName, setfullName] = useState("")
    const [email, setemail] = useState("")
    const [phoneNumber, setphoneNumber] = useState("")
    const [password, setpassword] = useState("")
    const [address, setaddress] = useState("")
    const [Role, setRole] = useState("")
    const [filter, setFilter] = useState("");
    const [Delete,setDelete] = useState(false)
    //Id for update record and Delete
    const [id,setId] = useState("");
    /************************************************************************************************************/
    /************************************************************************************************************/
    const FilterNumCom = () => {
        if(filter.length==0){
            GetEmployeeData()
        }
        else{
    setData(Data.filter(dt=>dt.NumCom.includes(`${filter}`)))
       
        }
        
    }
/************************************************************************************************************/
/********************************************************************************************************/
const FilterDate = () => {
    if(filter.length==0){
        GetEmployeeData()
    }
    else{
setData(Data.filter(dt=>dt.date.includes(`${filter}`)))
    
    }
    
}
/************************************************************************************************************/
/********************************************************************************************************/
const FilterEtat = () => {
    if(filter.length==0){
        GetEmployeeData()
    }
    else{
setData(Data.filter(dt=>dt.Etat.includes(`${filter}`)))
   
    }
    
}
/************************************************************************************************************/
const GetPrix = () => {
    const url = `http://${ipadress}:5001/CAISSE/${CodeArticle}/${Fournisseur}`  
    console.log("Prix url",url) 
   axios.get(url)
     .then(response => {
         const result = response.data;
         console.log("DATA Fournisseur",response.data)
         setPrix(response.data.PrixVente)
             console.log("prix",Prix)  
     })    
}
/********************************************************************************************************/
const GetClient = () => {
    const url = `http://${ipadress}:5001/Clients`
    axios.get(url)
        .then(response => {
            setDataCL(response.data)
            console.log("client data if did get it hhhh",DataCL)
                console.log(Data)
            
        })
        .catch(err => {
            console.log(err)
        })
    }
    const GetFullClient = () => {
        const url = `http://${ipadress}:5001/Clientbyname/`+Client
        axios.get(url)
            .then(response => {
                setFDataCL(response.data)
                setNomCL(FDataCL.fullName)
                setAdresse(FDataCL.address)
                setTéléphone(FDataCL.phoneNumber)
                setemail(FDataCL.email)
                console.log("Full client data ",response.data.fullName)
                   console.log("Nomcl",NomCL) 
                   console.log("Nomcl",Adresse) 
                   console.log("Nomcl",Téléphone) 
                   console.log("Nomcl",email) 
                
            })
            .catch(err => {
                console.log(err)
            })
        }
    const GetEmployeeData = () => {
        //here we will get all employee data
        const url = `http://${ipadress}:5001/Factures`
        axios.get(url)
            .then(response => {
                const result = response.data;
                setData(result)

                    console.log(result)
                
            })
            .catch(err => {
                console.log(err)
            })
    }
    const handleEdit = () =>{
        const url = `http://${ipadress}:5001/EDIT_FACT/${id}`
        const Credentials = {NomCL,Adresse, CDPostVille,Téléphone,email }
        axios.put(url, Credentials)
            .then(response => {
                const result = response.data;
                const { status, message } = result;
                
                    window.location.reload()
                
            })
            .catch(err => {
                console.log(err)
            })
    }
    const FactADD = () => {
        const url = `http://${ipadress}:5001/Ajout_Facture`
        const Credentials = {NumFact,date,NomCL,Adresse, CDPostVille,Téléphone,email,MontTHT,MontTTTC,TotalTVA,Articles}
        axios.post(url, Credentials)
            .then(response => {
                const result = response.data;
                const { status, message, data } = result;
                
                    window.location.reload()
                
            })
            .catch(err => {
                console.log(err)
            })
        }
   const print=()=>{
    history.push("/PrintFact")
   }
        const Calc_Total=()=>{
          
            
            var Total=0
Articles.forEach(element => {
    
    Total=Total+parseFloat(element[3])
});
            setMontTHT(Total)
            var Tax=Total*19/100
            setMontTTTC(Total+Tax)
         }
         const handleDelete = () =>{
            const url = `http://${ipadress}:5001/delete_Facture/${id}`
            axios.delete(url)
                .then(response => {
                    const result = response.data;
                    const { status, message } = result;
                    
                        window.location.reload()
                    
                })
                .catch(err => {
                    console.log(err)
                })
        }
        const Getfour = async () => {
            const urlg = `http://${ipadress}:5001/FRDIS/`
            console.log("url get Four",urlg)
           await  axios.get(urlg)
            .then(response => {
                const result = response.data;
                console.log("result fr data",result)

                setDataFr(result)                    
                   // window.location.reload()
                   console.log("data Four after dis",DataFr)
                   GETDESC()
            })
           
           
        }
        const GETDESC=()=>{
            const urlA = `http://${ipadress}:5001/Article/${CodeArticle}`   
            console.log("url description",urlA)
    axios.get(urlA)
      .then(response => {
          const result = response.data;
          setDescription(result.Description)
          console.log("Desription",Description)
          
          
      })}
        const GetArticles = () => {
            //here we will get all employee data
            const url = `http://${ipadress}:5001/Article`
            axios.get(url)
                .then(response => {
                    setDataART(response.data)
                        console.log(Data)
                    
                })
                .catch(err => {
                    console.log(err)
                })
            }
            const handleClick = () => {
                
                    Articles.push([Description,Prix,Quantité,parseFloat(Prix)*parseInt(Quantité),RemiseHT])
                    setQuantité(0)
                    setRemiseHT(0)
                
                
                }
                const handleClient=()=>{
                    setClient(client)

                   GetFullClient()
                }
                
    useEffect(() => {
        GetClient()
        GetArticles()
        Getfour()
        GetEmployeeData();
        setNumFact( Math.floor(Math.random() * 9999999).toString())
    }, [])
    return (
        <div class="p-3 " >
            <p style={{color:'black',fontSize:"25px",marginLeft:"10px",fontFamily:"Times New Roman",fontWeight:"bold"}}>Liste des Factures</p>
            <hr></hr>
            <div>
            <span style={{marginLeft: '400px',marginBottom:"50px"}}>  <Button variant='dark' onClick={() => { handlePostShowBL(Getfour()) }}><i className='fa fa-plu'></i>
               <b>Nouveau</b> 
                    </Button></span>
                    <Button style={{marginLeft:'200px',width:"100px",}} variant='dark' onClick={() => {window.location.reload()}}>
                    <b >Actualiser</b>
                    </Button>
                   <hr></hr> 
                    </div>
            <div style={{marginTop:"30px"}}>
                <div className='table-responsive'>
                    <table className='table table-striped table-hover table-bordered'>
                        <thead>
                            <tr>
                                <th>Numéro de facture<br/><input type="text" className='form-control' onChange={(a) => setFilter(a.target.value)+FilterNumCom()} placeholder="Filter" /></th>
                                <th>Date<br/><input type="text" className='form-control' onChange={(a) => setFilter(a.target.value)+FilterDate()} placeholder="Filter" /></th>
                                <th>Nom Client <br/><input type="text" className='form-control' onChange={(a) => setFilter(a.target.value)+FilterEtat()} placeholder="Filter" /></th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Data.map((item) =>
                                <tr key={item._id}>
                                    <td>{item.NumFact}</td>
                                    <td>{item.date}</td>
                                    <td>{item.NomCL}</td>
                                    <td style={{ minWidth: 190 }}>
                                        <Button size='sm' variant='dark' onClick={() => { handleViewShow(SetRowData(item)) }}>ouvrir</Button>|
                                        <Button size='sm' variant='dark' onClick={()=> {handleEditShow(SetRowData(item),setId(item._id),setNomCL(RowData.NomCL),setAdresse(RowData.Adresse), setCDPostVille(RowData.CDPostVille),setTéléphone(RowData.Téléphone),setemail(RowData.email))}}>Modifer</Button>|
                                        <Button size='sm' variant='dark' onClick={()=> {handleDeleteShow(SetRowData(item),setId(item._id))}}>Supprimer</Button>|
                                        <Button size='sm' variant='dark' onClick={()=> {print(	localStorage.setItem('idfact',item._id))}}>Imprimer</Button>
                                        
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
            {/* View Modal */}
            <div className='model-box-view'>
                <Modal
                    show={ViewShow}
                    onHide={hanldeViewClose}
                    backdrop="static"
                    keyboard={false}
                    size={"lg"}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>
                            Facture
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                        <Table>
                       
                                
                       <tr>
                           <td> 
                              <b> Numéro de Facture </b>
                           <input type="text" className='form-control'  placeholder="N° " value={RowData.NumFact} readOnly/>
                       
                            </td>
                            <td> 
                                <b>Date</b>
                           <input type="text" className='form-control'  placeholder="Date"value={RowData.date}readOnly />
                       
                            </td>
                            </tr>
                            <tr><th>Client</th></tr>
                                <tr>
                                <td> <input type="text" className='form-control' value={RowData.NomCL} readOnly/></td>
                                <td> <input type="text" className='form-control'value={RowData.Adresse} readOnly /></td>
                              </tr> 
                              <tr>
                              <td> <input type="text" className='form-control'value={RowData.email} readOnly /></td>
                
                                <td> <input type="text" className='form-control'value={RowData.Téléphone} readOnly /></td>
                              </tr> 
                           </Table>
                           <Table>
                            <thead>
                            <tr>
                                <th>Description</th>
                                <th>Prix unitaire</th>
                                <th>Quantité </th>
                                <th>Total</th>
                            </tr>
                        </thead>
                                <tbody>
                            {RowData.Articles?.map((item) =>
                                <tr key={item._id}>
                                    <td>{item[0]}</td>
                                    <td>{item[1]}</td>
                                    <td>{item[2]}</td>
                                    <td>{parseFloat(item[1])*parseFloat(item[2])}</td>
                                    
                                    
                                    
                                </tr>
                            )}
                        </tbody>
                           
                        
                        </Table>
                        <Table>
                                
                                <tr>
                                <td> <th>Montant T.H.T</th><input type="text" className='form-control' value={RowData.MontTHT} readOnly /></td>
                                <td> <th>Montant T.T.T.C</th><input type="text" className='form-control' value={RowData.MontTTTC} readOnly /></td>
                              </tr> 
                              <tr>
                                <td> <th>TVA</th><input type="text" className='form-control' value={RowData.TotalTVA} readOnly /></td>
                               
                               
                              </tr> 
                                
                            </Table>
                            
                          
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant='secondary' onClick={hanldeViewClose}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
            <div className='model-box-view'>
                <Modal
                    show={ViewDelete}
                    onHide={hanldeDeleteClose}
                    backdrop="static"
                    keyboard={false}
                    size={"lg"}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>
                            Supprimer Facture
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                        <Table>
                       
                                
                       <tr>
                           <td> 
                              <b> Numéro de Facture </b>
                           <input type="text" className='form-control'  placeholder="N° " value={RowData.NumFact} readOnly/>
                       
                            </td>
                            <td> 
                                <b>Date</b>
                           <input type="text" className='form-control'  placeholder="Date"value={RowData.date}readOnly />
                       
                            </td>
                            </tr>
                            <tr><th>Client</th></tr>
                                <tr>
                                <td> <input type="text" className='form-control' value={RowData.NomCL} readOnly/></td>
                                <td> <input type="text" className='form-control'value={RowData.Adresse} readOnly /></td>
                              </tr> 
                              <tr>
                              <td> <input type="text" className='form-control'value={RowData.email} readOnly /></td>
                               
                                <td> <input type="text" className='form-control'value={RowData.Téléphone} readOnly /></td>
                              </tr> 
                             
                            
                      
                       
                           </Table>
                           <Table>
                            <thead>
                            <tr>
                                <th>Description</th>
                                <th>Prix unitaire</th>
                                <th>Quantité </th>
                                <th>Total</th>
                            </tr>
                        </thead>
                                <tbody>
                            {RowData.Articles?.map((item) =>
                                <tr key={item._id}>
                                    <td>{item[0]}</td>
                                    <td>{item[1]}</td>
                                    <td>{item[2]}</td>
                                    <td>{parseFloat(item[1])*parseInt(item[2])}</td>
                                    
                                    
                                    
                                </tr>
                            )}
                        </tbody>
                           
                        
                        </Table>
                        <Table>
                                
                                <tr>
                                <td> <th>Montant T.H.T</th><input type="text" className='form-control' value={RowData.MontTHT} readOnly /></td>
                                <td> <th>Montant T.T.T.C</th><input type="text" className='form-control' value={RowData.MontTTTC} readOnly /></td>
                              </tr> 
                              <tr>
                                <td> <th>TVA</th><input type="text" className='form-control' value={RowData.TotalTVA} readOnly /></td>
                               
                               
                              </tr> 
                                
                            </Table>
                            
                            
                             <Button type='submit' className='btn btn-danger mt-4' onClick={handleDelete}>Supprimer</Button>
                                
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant='secondary' onClick={hanldeDeleteClose}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
           
            <div className='model-box-view'>
                <Modal
                    show={ViewEdit}
                    onHide={hanldeEditClose}
                    backdrop="static"
                    keyboard={false}
                    size="lg"
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Modifier</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <div>
                        <Table>
                       
                                
                       <tr>
                           <td> 
                              <b> Numéro de Facture </b>
                           <input type="text" className='form-control'  placeholder="N° " defaultValue={RowData.NumFact} readOnly/>
                       
                            </td>
                            <td> 
                                <b>Date</b>
                           <input type="text" className='form-control'  placeholder="Date"defaultValue={RowData.date} readOnly/>
                       
                            </td>
                            </tr>
                            <tr><th>Client</th></tr>
                                <tr>
                                <td> <input type="text" className='form-control' defaultValue={RowData.NomCL} onChange={(a) => setNomCL(a.target.value)}/></td>
                                <td> <input type="text" className='form-control'defaultValue={RowData.Adresse} onChange={(a) => setAdresse(a.target.value)} /></td>
                              </tr> 
                              <tr>
                              <td> <input type="text" className='form-control'defaultValue={RowData.email} onChange={(a) => setemail(a.target.value)} /></td>
                                <td> <input type="text" className='form-control'defaultValue={RowData.Téléphone}onChange={(a) => setTéléphone(a.target.value)}  /></td>
                              </tr> 
                             
                            
                      
                       
                           </Table>
                           <Table>
                            <thead>
                            <tr>
                                <th>Description</th>
                                <th>Prix unitaire</th>
                                <th>Quantité </th>
                                <th>Total</th>
                            </tr>
                        </thead>
                                <tbody>
                            {RowData.Articles?.map((item) =>
                                <tr key={item._id}>
                                    <td>{item[0]}</td>
                                    <td>{item[1]}</td>
                                    <td>{item[2]}</td>
                                    <td>{parseFloat(item[1])*parseInt(item[2])}</td>
                                    
                                    
                                    
                                </tr>
                            )}
                        </tbody>
                           
                        
                        </Table>
                        <Table>
                                
                                <tr>
                                <td> <th>Montant T.H.T</th><input type="text" className='form-control' defaultValue={RowData.MontTHT} readOnly /></td>
                                <td> <th>Montant T.T.T.C</th><input type="text" className='form-control' defaultValue={RowData.MontTTTC} readOnly /></td>
                              </tr> 
                              <tr>
                                <td> <th>TVA</th><input type="text" className='form-control' defaultValue={RowData.TotalTVA}  readOnly/></td>
                               
                               
                              </tr> 
                                
                            </Table>
                            
                           
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant='success' onClick={handleEdit}>Valider</Button>
                        <Button variant='secondary' onClick={hanldeEditClose}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
            <div className='model-box-view'>
                <Modal
                    show={ViewPostBL}
                    onHide={hanldePostCloseBL}
                    backdrop="static"
                    keyboard={false}
                  //  fullscreen={true}     
                    size={"lg"}                  >
                    <Modal.Header closeButton>
                        <Modal.Title>Facture</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                        <Table>
                                <tr><th>Client</th></tr>
                                <tr><td>  <select
     name="{DataART.Description}"
     onChange={(e)=>{handleClient(client=e.target.value)}}
    
    >
 <option defaultValue='Select Client'> Select Client </option>
      {DataCL.map((item) => (
        <option>
          {item.fullName}
        </option>
      ))}
    </select>      
</td></tr>
                                <tr>
                                <td> <input type="text" className='form-control' onChange={(a) => setNomCL(a.target.value)} defaultValue={NomCL} placeholder="Nom" /></td>
                                <td> <input type="text" className='form-control'defaultValue={Adresse} onChange={(a) => setAdresse(a.target.value)} placeholder="Adresse" /></td>
                                
   
                              </tr> 
                              <tr>
                                
                                <td> <input type="number" className='form-control' defaultValue={Téléphone} onChange={(a) => setTéléphone(a.target.value)} placeholder="Numéro téléphone" /></td>
                              
                              
                                <td> <input type="text" className='form-control' defaultValue={email} onChange={(a) => setemail(a.target.value)} placeholder="Email" /></td>
                               
                              </tr> 
                                
                            </Table>
                        
                                <Table>
                                <tr><th>Article</th></tr>
                                <tr>
    
                                
                                <td>  
    <select
     name="{DataART.Description}"
     onChange={(e)=>setCodeArticle(e.target.value)+setCodeArticle(e.target.value)+setRest("empty")+console.log("CA in select",CodeArticle)}
    
    >
 <option defaultValue='Select Article'> {CodeArticle} </option>
      {DataART.map((item) => (
        <option>
          {item.CodeArticle}
        </option>
      ))}
    </select></td>
    {console.log("CA in select",CodeA)}
    <td> 
    <select 
     name="{DataFr.name}"
     onChange={(e)=>setFournisseur(e.target.value)+setFournisseur(e.target.value)+console.log("fr in select",FR)}
    
    >
      <option defaultValue="Select Fournisseur">Select Fournisseur </option>
    {DataFr.map((item) => (
        <option>
        {item}
        </option>
    ))}
    </select></td>
                                <td> <input type="text" className='form-control' onChange={(a) => setQuantité(a.target.value)+GetPrix()+GETDESC()} placeholder="
                                Quantité" /></td>
                                 <td> <input type="text" className='form-control' onChange={(a) => setRemiseHT(a.target.value)+GetPrix()+GETDESC()} placeholder="
                                Remise" /></td>
                  
                               
                                
                                
                                </tr>
                                <tr>
                                <td colSpan={4} align='right'> <Button id='aj' size='sm' variant='dark' onClick={()=> {handleClick()}}>Ajouter</Button></td>
                            
                                
                                
                                </tr>
                            </Table>
                            <table className='table table-striped table-hover table-bordered'>
                            <thead>
                            <tr>
                                
                                <th >Description</th>
                                <th>Quantité </th>
                                <th>Prix unitaire</th>
                                <th>Remise %</th>
                                <th>Total</th>
                                
                            </tr>
                        </thead>
                                <tbody>
                            {Articles?.map((item) =>
                                <tr key={item._id}>
                                    <td>{item[0]}</td>
                                    <td>{item[2]}</td>
                                    <td>{item[1]}</td>
                                    <td>{item[4]}</td>
                                    <td>{item[3]}</td>

                                    
                                    
                                </tr>
                            )}
                        </tbody>
                            
                        </table>
                        <Table>
                        <Button className='btn btn-success mt-4' onClick={Calc_Total} > Calculer</Button>

                                <tr>
                                   
                                <td>  <th>Montant T.H.T</th><input type="text" className='form-control' value={MontTHT} placeholder="Montant Total HT" /></td>
                                <td><th>Montant T.T.T.C</th> <input type="text" className='form-control' value={MontTTTC} onChange={(a) => setMontTTTC(a.target.value)} placeholder="Montant Total TTC" /></td>
                              </tr> 
                              
                              <tr>
                                
                                <td> <th>TVA</th><input type="text" className='form-control' value={"19%"} placeholder="Total TVA" readOnly/></td>
                               
                              </tr> 
                                
                            </Table>
                           
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button className='btn btn-success mt-4' onClick={FactADD}> Valider</Button>

                        <Button variant='warning' onClick={hanldePostCloseBL}style={{marginTop:"25px"}}>Close</Button>
                    </Modal.Footer>
                </Modal>
                </div>
        </div>
        
    );

};

