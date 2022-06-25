import React, { useEffect, useState } from 'react';
import { Button, Modal, ModalTitle,Table } from 'react-bootstrap'
import axios from 'axios'
import { useHistory } from 'react-router-dom';

export const CM = () => {
    let history = useHistory();

    var ipadress='localhost'
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()} ${current.getHours()}:${current.getMinutes()}`;
    const [fournisseur, setfournisseur] = useState("")
    const [Réference, setRéference] = useState("")
    const [PrixAchat, setPrixAchat] = useState("")
    const [PrixVente, setPrixVente] = useState("")
    const [Quantité, setQuantité] = useState("")
    const [Vente, setVente] = useState("")
    const [idart, setidart] = useState("")
    const [CodeArticle, setCodeArticle] = useState("")
    const [CdArt, setCdArt] = useState("")
    const [Description, setDescription] = useState("")
    const [DescriptionBS, setDescriptionBS] = useState("")
    const [NumCom, setNumCOM] = useState(0)

    const [Data, setData] = useState([]);
    const [RowData, SetRowData] = useState([])
    const [ViewShow, SetViewShow] = useState(false)
    const [Adresse, setAdresse] = useState("");
    const [Téléphone, setTéléphone] = useState(0);
    const [DataBS, setDataBS] = useState([]);
    const [DateBL, setDateBL] = useState();
    const [Etat, setEtat] = useState();
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
            GetdataCom()
        }
        else{
    setData(Data.filter(dt=>dt.NumCom.includes(`${filter}`)))
        console.log("data after filter",Data.NumCom)
        console.log("filter",filter)
        }
        
    }
/************************************************************************************************************/
/********************************************************************************************************/
const FilterDate = () => {
    if(filter.length==0){
        GetdataCom()
    }
    else{
setData(Data.filter(dt=>dt.date.includes(`${filter}`)))
    console.log("data after filter",Data)
    console.log("filter",filter)
    }
    
}
/************************************************************************************************************/
/********************************************************************************************************/
const FilterEtat = () => {
    if(filter.length==0){
        GetdataCom()
    }
    else{
setData(Data.filter(dt=>dt.Etat.includes(`${filter}`)))
    console.log("data after filter",Data)
    console.log("filter",filter)
    }
    
}
/************************************************************************************************************/
/********************************************************************************************************/

    const GetdataCom = () => {
        //here we will get all employee data
        const url = `http://${ipadress}:5001/COMLIST`
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
    
    const COMADD = () => {
        const url = `http://${ipadress}:5001/add_COM`
        const Credentials = {NumCom,fournisseur, Réference,Articles,date,Etat}
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
            history.push("/PrintBC")
           }
           const handleEdit = () =>{
            const url = `http://${ipadress}:5001/EDIT_BC/${id}`
            const Credentials = {  Etat }
            axios.put(url, Credentials)
                .then(response => {
                    const result = response.data;
                    const { status, message } = result;
                    if ( response.status !== 200) {
                        alert("quelque chose s'est mal passé")
                    }
                    else {
                        alert("Succès")
                        window.location.reload()
                    }
                })
                .catch(err => {
                    console.log(err)
                })
        }
    console.log(ViewShow, RowData)
    useEffect(() => {
        GetdataCom();
        setNumCOM( Math.floor(Math.random() * 9999999).toString())
    }, [])
    return (
        <div class="p-3 " >
            <p style={{color:'black',fontSize:"25px",marginLeft:"10px",fontFamily:"Times New Roman",fontWeight:"bold"}}>Liste des Commandes</p>
            <hr></hr>
            <div>
            <span style={{marginLeft: '400px',marginBottom:"50px"}}>  <Button variant='dark' onClick={() => { handlePostShowBL() }}><i className='fa fa-plu'></i>
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
                                <th>Numéro de commande<br/><input type="text" className='form-control' onChange={(a) => setFilter(a.target.value)+FilterNumCom()} placeholder="Filter" /></th>
                                <th>Date de creation<br/><input type="text" className='form-control' onChange={(a) => setFilter(a.target.value)+FilterDate()} placeholder="Filter" /></th>
                                <th>Etat<br/><input type="text" className='form-control' onChange={(a) => setFilter(a.target.value)+FilterEtat()} placeholder="Filter" /></th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Data.map((item) =>
                                <tr key={item._id}>
                                    <td>{item.NumCom}</td>
                                    <td>{item.date}</td>
                                    <td>{item.Etat}</td>
                                    <td style={{ minWidth: 190 }}>
                                        <Button size='sm' variant='dark' onClick={() => { handleViewShow(SetRowData(item)) }}>ouvrir</Button>|
                                        <Button size='sm' variant='dark' onClick={()=> {handleEditShow(SetRowData(item),setId(item._id))}}>Modifier</Button>|
                                        <Button size='sm' variant='dark' onClick={()=> {handleEditShow(SetRowData(item),setId(item._id))}}>Supprimer</Button>|
                                        <Button size='sm' variant='dark' onClick={()=> {print(	localStorage.setItem('idcom',item._id))}}>Imprimer</Button>
                                        
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
                        <Modal.Title>Bon De Commande</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                        <Table>
                       
                                
                       <tr>
                           <td> 
                              <b> Numéro de commande </b>
                           <input type="text" className='form-control'  placeholder="N° " value={RowData.NumCom} readOnly/>
                       
                            </td>
                            <td> 
                                <b>Date</b>
                           <input type="text" className='form-control'  placeholder="Date"value={RowData.date}readOnly />
                       
                            </td>
                            </tr>
                            
                      
                       
                           </Table>
                           <Table>
                            <thead>
                            <tr>
                                <th >code Article</th>
                                <th >Description</th>
                                <th >Fournisseur</th>
                                <th>Prix </th>
                                <th>Quantité </th>
                                
                            </tr>
                        </thead>
                                <tbody>
                            {RowData.Articles?.map((item) =>
                                <tr key={item._id}>
                                    <td>{item[0]}</td>
                                    <td>{item[1]}</td>
                                    <td>{item[4]}</td>
                                    <td>{item[2]}</td>
                                    <td>{item[3]}</td>
                                    
                                    
                                    
                                </tr>
                            )}
                        </tbody>
                           
                        
                        </Table>
                            
                            {
                                Delete && (
                                    <Button type='submit' className='btn btn-danger mt-4' >Delete Employee</Button>
                                )
                            }
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant='warning' onClick={hanldeViewClose}>Fermer</Button>
                    </Modal.Footer>
                </Modal>
            </div>
            {/* Modal for submit data to database */}
            <div className='model-box-view'>
                <Modal
                    show={ViewPost}
                    onHide={hanldePostClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Add new Employee</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            <div className='form-group'>
                                <input type="text" className='form-control' onChange={(e) => setfullName(e.target.value)} placeholder="Please enter Name" />
                            </div>
                            <div className='form-group mt-3'>
                                <input type="email" className='form-control' onChange={(e) => setemail(e.target.value)} placeholder="Please enter email" />
                            </div>
                            <div className='form-group mt-3'>
                                <input type="text" className='form-control' onChange={(e) => setphoneNumber(e.target.value)} placeholder="Please enter Number" />
                            </div>
                           
                            <div className='form-group mt-3'>
                                <input type="text" className='form-control' onChange={(e) => setaddress(e.target.value)} placeholder="Please enter Address" />
                            </div>
                            <div className='form-group mt-3'>
                                <input type="text" className='form-control' onChange={(e) => setpassword(e.target.value)} placeholder="Please enter password" />
                            </div>
                            <div className='form-group mt-3'>
                            <b> Rôle</b> : <br></br>
                                <input type="radio" value="Admin"  style={{marginLeft:"150px"}} onChange={(e) => setRole(e.target.value)}/><b>Admin</b> 
                                <input type="radio" value="Admin"  style={{marginLeft:"20px"}} onChange={(e) => setRole(e.target.value)}/><b>Employé</b>

                            </div>
                            
                            <Button type='submit' className='btn btn-success mt-4' >Add Employee</Button>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant='warning' onClick={hanldePostClose}>Fermer</Button>
                    </Modal.Footer>
                </Modal>
            </div>
            {/* Modal for Edit employee record */}
            <div className='model-box-view'>
                <Modal
                    show={ViewEdit}
                    onHide={hanldeEditClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Modifier etat bon</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                        <input type="radio" value="En Cours"  style={{marginLeft:"50px"}} onChange={(e) => setEtat(e.target.value)}/><b>Commande en Cours</b> <br></br>
                        <input type="radio" value="Expidée"  style={{marginLeft:"50px"}} onChange={(e) => setEtat(e.target.value)}/><b>Commande Expidée</b><br></br>
                           
                            <Button type='submit' className='btn btn-warning mt-4' onClick={handleEdit}>Edit Employee</Button>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant='warning' onClick={hanldeEditClose}>Fermer</Button>
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
                        <Modal.Title>Bon de Commande</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                        <Table>
                                <tr><th>Fournisseur</th></tr>
                                <tr>
                                <td> <input type="text" className='form-control' onChange={(a) => setfournisseur(a.target.value)} placeholder="Fournisseur" /></td>
                                <td> <input type="text" className='form-control' onChange={(a) => setRéference(a.target.value)} placeholder="Réference" /></td>
                              </tr> 
                                
                            </Table>
                        
                                <Table>
                                <tr><th>Article</th></tr>
                                <tr>
                                <td> <input type="text" className='form-control' onChange={(a) => setCodeArticle(a.target.value)} placeholder="Code Article" /></td>
                                <td> <input type="text" className='form-control' onChange={(a) => setDescription(a.target.value)} placeholder="Description" /></td>
                                <td> <input type="text" className='form-control' onChange={(a) => setPrixAchat(a.target.value)} placeholder="Prix Achat" /></td>
                                
                                <td> <input type="text" className='form-control' onChange={(a) => setQuantité(a.target.value)} placeholder="
                                Quantité" /></td>
                                </tr>
                                <tr>
                                <td colSpan={4} align='right'> <Button id='aj' size='sm' variant='dark' onClick={()=> {Articles.push([CodeArticle,Description,PrixAchat,Quantité,fournisseur])}}>Ajouter</Button></td>
                                {console.log('testing articles',Articles)}
                                
                                
                                </tr>
                            </Table>
                            <table className='table table-striped table-hover table-bordered'>
                            <thead>
                            <tr>
                                <th >code Article</th>
                                <th >Description</th>
                                <th>Fournisseur</th>
                                <th>Prix Achat</th>
                                <th>Quantité </th>
                                
                            </tr>
                        </thead>
                                <tbody>
                            {Articles?.map((item) =>
                                <tr key={item._id}>
                                    <td>{item[0]}</td>
                                    <td>{item[1]}</td>
                                    <td>{item[4]}</td>
                                    <td>{item[2]}</td>
                                    <td>{item[3]}</td>

                                    
                                    
                                </tr>
                            )}
                        </tbody>
                            
                        </table>
                        <div className='form-group mt-3'>
                            <b> Etat</b> : <br></br>
                                <input type="radio" value="En Cours"  style={{marginLeft:"150px"}} onChange={(e) => setEtat(e.target.value)}/><b>Commande en Cours</b> 
                                <input type="radio" value="Expidée"  style={{marginLeft:"20px"}} onChange={(e) => setEtat(e.target.value)}/><b>Commande Expidée</b>

                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button type='submit' className='btn btn-success mt-4' onClick={COMADD}> Valider</Button>

                        <Button variant='warning' onClick={hanldePostCloseBL}style={{marginTop:"25px"}}>Fermer</Button>
                    </Modal.Footer>
                </Modal>
                </div>
        </div>
        
    );

};

