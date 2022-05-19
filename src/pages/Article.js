import React, { useEffect, useState,useRef,Component } from 'react';
import { Button, Modal, ModalTitle,Table } from 'react-bootstrap'
import axios from 'axios'
import Toolbar from '../Toolbar/Toolbar';
import ReactToPrint from "react-to-print";

export const Article = () => {
    let componentRef = useRef();
    const [Data, setData] = useState([]);
    const [CAR, setCAR] = useState("");
var idtest=''
var CodeA=''
var CodeA_Qnt=''
var Qntt=''
console.log("codeA now ",CodeA)
//var idtest=''
const [fullscreen, setFullscreen] = useState(true);
    const [DataFour, setDataFour] = useState([]);
    const [Four, setFour] = useState([]);
    const [Matricule, setMatricule] = useState("");

    const [Adresse, setAdresse] = useState("");
    const [Téléphone, setTéléphone] = useState(0);
    const [DataBS, setDataBS] = useState([]);
    const [DateBL, setDateBL] = useState();
    const [NUMBL, setNUMBL] = useState();
    const [Articles, setArticles] = useState([]);

    const [Date, setDate] = useState();
    const [RowData, SetRowData] = useState([])
    const [ViewShow, SetViewShow] = useState(false)
    const handleViewShow = () => { SetViewShow(true) }
    const hanldeViewClose = () => { SetViewShow(false) }
    //FOr Edit Model
    const [ViewEdit, SetEditShow] = useState(false)
    const handleEditShow = () => { SetEditShow(true) }
    const hanldeEditClose = () => { SetEditShow(false) }
    const [ViewListFour, SetListFour] = useState(false)
    const handleListFour = () => { SetListFour(true) }
    const hanldeListFourClose = () => { SetListFour(false) }
    const [ViewListQntFour, SetListQntFour] = useState(false)
    const handleListQntFour = () => { SetListQntFour(true) }
    const hanldeListQntFourClose = () => { SetListQntFour(false) }
    const [ViewEditFR, SetEditShowFR] = useState(false)
    const handleEditShowFR = () => { SetEditShowFR(true) }
    const hanldeEditCloseFR = () => { SetEditShowFR(false) }
    //FOr Delete Model
    const [ViewDelete, SetDeleteShow] = useState(false)
    const handleDeleteShow = () => { SetDeleteShow(true) }
    const hanldeDeleteClose = () => { SetDeleteShow(false) }
    //FOr Add New Data Model
    const [ViewPost, SetPostShow] = useState(false)
    const handlePostShow = () => { SetPostShow(true) }
    const hanldePostClose = () => { SetPostShow(false) }
    //FOr Add New Data Model
    const [ViewPostfour, SetPostShowfour] = useState(false)
    const handlePostShowfour = () => { SetPostShowfour(true) }
    const hanldePostClosefour = () => { SetPostShowfour(false) }
    const [ViewPostBL, SetPostShowBL] = useState(false)
    const handlePostShowBL = () => { SetPostShowBL(true) }
    const hanldePostCloseBL = () => { SetPostShowBL(false) }
    const [ViewPostBS, SetPostShowBS] = useState(false)
    const handlePostShowBS = () => { SetPostShowBS(true) }
    const hanldePostCloseBS = () => { SetPostShowBS(false) }
    //Define here local state that store the form Data
    const [fullName, setfullName] = useState("")
    const [email, setemail] = useState("")
    const [phoneNumber, setphoneNumber] = useState("")
    const [password, setpassword] = useState("")
    const [address, setaddress] = useState("")
    const [Delete,setDelete] = useState(false)
    //Id for update record and Delete
    const [id,setId] = useState("");
    const [row,setrow] = useState([]);
    //Define here local state that store the form Data
    const [fournisseur, setfournisseur] = useState("")
    const [Réference, setRéference] = useState("")
    const [PrixAchat, setPrixAchat] = useState("")
    const [PrixVente, setPrixVente] = useState("")
    const [Quantité, setQuantité] = useState(0)
    const [Vente, setVente] = useState("")
    const [idart, setidart] = useState("")
    const [CodeArticle, setCodeArticle] = useState("")
    const [CdArt, setCdArt] = useState("")
    const [Description, setDescription] = useState("")
    const [DescriptionBS, setDescriptionBS] = useState("")

    //Id for update record and Delete
    const [idFour,setIdFour] = useState("");

    const ArticleBL = function(CodeArticle, Description,PrixAchat,Quantité) {
        
        return {CodeArticle, Description,PrixAchat,Quantité}}
   /************************************************************************************************************/
    /************************************************************************************************************/
    function GetArticlebyid ()  {
        //here we will get all employee data
        const url = `http://169.254.131.15:5001/Articlebyid/${idtest}`
        axios.get(url)
            .then(response => {
                CodeA=response.data.CodeArticle
                    console.log('CodeA in func',CodeA)
               console.log("article called",response.data.CodeArticle)
               GetFournisseurData()
            })
           
        }
    /************************************************************************************************************/
    /************************************************************************************************************/
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
/************************************************************************************************************/
/********************************************************************************************************/        
        function GetFournisseurData  ()  {
            //here we will get all employee data
            const url = `http://169.254.131.15:5001/Fournisseur/`+CodeA
            axios.get(url)
                .then(response => {
                    const result = response.data;
                    setFour(result)
                        console.log('url is ',url)
                        console.log('car in req',CAR)
                    console.log('Fournisseur called')
                    setCodeArticle(result.CodeArticle)
                   
                        
                    
                })
                .catch(err => {
                    console.log(err)
                })
                
        }
 /************************************************************************************************************/ 
   /************************************************************************************************************/
   /********************************************************************************************************/        
   function GetQnt  ()  {
    //here we will get all employee data
    const url = `http://169.254.131.15:5001/Fournisseur/`+CodeA_Qnt
    //Qnt=0
    axios.get(url)
        .then(response => {
            const result = response.data;
            result.reduce((Qntt,result)=>Qntt+result.Qnt,0)
            console.log("qnt",Qntt)
            for (let index = 0; index < result.length; index++) {
                const element = result[index];
                //Qnt=parseInt(Qnt+parseInt(element.Qnt))
                
                
            }
        })
        .catch(err => {
            console.log(err)
        })
        
}
/************************************************************************************************************/   

 function GetFournisseurDataByName  ()  {
    //here we will get all employee data
    const url = `http://169.254.131.15:5001/FournisseurByName/`+fournisseur
    axios.get(url)
        .then(response => {
            const result = response.data;
            
        })
        .catch(err => {
            console.log(err)
        })
        
}
/************************************************************************************************************/
function GetFournisseurDataByRef  ()  {
    //here we will get all employee data
    const url = `http://169.254.131.15:5001/FournisseurByRef/`+Réference
    axios.get(url)
        .then(response => {
            const result = response.data;
            setfournisseur(result.fournisseur)
            setRéference(result.Réference)
            setAdresse(result.Adresse)
            setTéléphone(result.Téléphone)
            console.log('GetFournisseurDataByRef')
            console.log(fournisseur)
            console.log(Réference)
            console.log(Adresse)
            console.log(Téléphone)
        })
        .catch(err => {
            console.log(err)
        })
        
}
/************************************************************************************************************/ 
  /************************************************************************************************************/
        const AddBS = () => {
            const url = 'http://169.254.131.15:5001/add_BS'
            const Credentials = { CodeArticle, Description,fournisseur,Quantité}
            const urlA = `http://169.254.131.15:5001/Article/${CodeArticle}`
            axios.get(urlA)
            .then(response => {
                const result = response.data;
                setDescriptionBS(result.Description)                    
                   // window.location.reload()
                   console.log(DescriptionBS)
                
            })
            .catch(err => {
                console.log(err)
            })
        axios.post(url, Credentials)
        .then(response => {
            const result = response.data;
            const { status, message, data } = result;
            
            })}
            
/************************************************************************************************************/
/************************************************************************************************************/
        const GetDataBS = () => {
            //here we will get all employee data
            const url = `http://169.254.131.15:5001/BS/${CodeArticle}/${Réference}`
            const urlG = 'http://169.254.131.15:5001/BS'
            
        
            axios.get(url)
                .then(response => {
                    const result = response.data;
                
                setCodeArticle(result.CodeArticle)
                setfournisseur(result.fournisseur)
                setCodeArticle(result.Quantité)
                })
                AddBS()
             axios.get(urlG)
                .then(response => {
                setDataBS(response.data)
                    console.log(DataBS)
            })

                }
/************************************************************************************************************/
 /************************************************************************************************************/
    const handleSubmite = () => {
        const url = 'http://169.254.131.15:5001/add_Article'
        const Credentials = { CodeArticle, Description}
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
    /************************************************************************************************************/
    /************************************************************************************************************/
    const handleFourn = () => {
        const url = 'http://169.254.131.15:5001/add_Fournisseur'
        const Credentials = { fournisseur,Matricule, Réference,Adresse, Téléphone,CodeArticle,Quantité}
        axios.post(url, Credentials)
            .then(response => {
                const result = response.data;
                const { status, message, data } = result;
                
                    window.location.reload()
                
            })
            .catch(err => {
                console.log(err)
            })
        handleSubmite()}
    /************************************************************************************************************/
    /************************************************************************************************************/
    const BLADD = () => {
        const url = 'http://169.254.131.15:5001/add_BL'
        const Credentials = { NUMBL,DateBL,fournisseur, Réference,Adresse, Téléphone,Articles}
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
 /************************************************************************************************************/
/****************************************************************************************************/            
    const handleEditFOUR = () =>{
        const url = `http://169.254.131.15:5001/EDITFOUR/${id}`
        const Credentials = { fournisseur, Réference, PrixAchat, PrixVente,Quantité,Vente }
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
    
/************************************************************************************************************/
/****************************************************************************************************/            
    const handleEdit = () =>{
        const url = `http://169.254.131.15:5001/modify_contact/${id}`
        const Credentials = { fullName, email, phoneNumber, address }
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
    /************************************************************************************************************/
    /************************************************************************************************************/
    const handleBL = () =>{
        const url = `http://169.254.131.15:5001/BL/${Réference}/${CodeArticle}`
        const Credentials = { CodeArticle, Réference, PrixAchat, PrixVente, Quantité }
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
/************************************************************************************************************/
/************************************************************************************************************/   
 const handleDelete = () =>{
        const url = `http://169.254.131.15:5001/delete_Article/${id}`
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
/************************************************************************************************************/
/************************************************************************************************************/
    const handleDeleteBS = () =>{
        const url = `http://169.254.131.15:5001/BSDELETE/`
        axios.delete(url)
            .then(response => {
                const result = response.data;
                const { status, message } = result;
            })
            .catch(err => {
                console.log(err)
            })
    }
    //call this function in useEffect
    //console.log(ViewShow, RowData)
   
    
       
    
    useEffect(() => {
        GetEmployeeData();
       // GetFournisseurData()
   }, [])
  
    return (
        <div>
            <div>
                
                <div  style={{marginLeft: '390px',marginTop: '10px'}}>
                    <Button variant='dark' onClick={() => { handlePostShow() }}><i className='fa fa-plu'></i>
                        Ajouter Article
                    </Button>
                   
                                    
                    <span style={{marginLeft: '30px'}}>  <Button variant='dark' onClick={() => { handlePostShowBS() }}><i className='fa fa-plu'></i>
                    Bon de sortie
                    </Button></span>

                </div>
                <hr></hr>
            </div>
            <div >
                <div className='table-responsive'>
                    <table className='table table-striped table-hover table-bordered'>
                        <thead>
                            <tr>
                                <th >Code Article</th>
                                <th >Description</th>
                                <th>Quantité Stock</th>
                                <th>Vente</th>
                                <th>Fournisseur</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Data?.map((item) =>
                                <tr key={item._id}>
                                    <td>{item.CodeArticle}</td>
                                    <td>{item.Description}</td>
                                 
                                    <td> <Button id='aj' size='sm' variant='dark'
                                     onClick={()=> {handleListQntFour( SetRowData(item),idtest=item._id,console.log('id',idtest),GetArticlebyid())}}>
                                         Afficher </Button></td>
                                      
                                    
                                    <td>{item.Description}</td>

                                    <td> <Button id='aj' size='sm' variant='dark'
                                     onClick={()=> {handleListFour( SetRowData(item),idtest=item._id,console.log('id',idtest),GetArticlebyid())}}>
                                         Afficher les fournisseurs</Button></td>


                                    <td style={{ minWidth: 190 }}>
                                       <center>
                                        <Button size='sm' variant='secondary' onClick={()=> {handleEditFOUR(SetRowData(item),setId(item._id))}}>Edit</Button>|
                                        <Button size='sm' variant='secondary' onClick={() => {handleViewShow(SetRowData(item),setId(item._id), setDelete(true))}}>Delete</Button>
                                        </center>
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
                >
                    <Modal.Header closeButton>
                        <Modal.Title>View Employee Data</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            <div className='form-group'>
                                <input type="text" className='form-control' value={RowData.CodeArticle} readOnly />
                            </div>
                            <div className='form-group mt-3'>
                                <input type="email" className='form-control' value={RowData.Description} readOnly />
                            </div>
                            <div className='form-group mt-3'>
                                <input type="text" className='form-control' value={RowData._id} readOnly />
                            </div>
                            
                            <div className='form-group mt-3'>
                                <input type="text" className='form-control' value={RowData.address} readOnly />
                            </div>
                            <div className='form-group mt-3'>
                                <input type="text" className='form-control' value={RowData.password} readOnly />
                            </div>
                            {
                                Delete && (
                                    <Button type='submit' className='btn btn-danger mt-4' onClick={handleDelete}>Delete Employee</Button>
                                )
                            }
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant='secondary' onClick={hanldeViewClose}>Close</Button>
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
                    size="lg"
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Ajouter Article</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        

<Table>
                        <tr>
                                <th> 
                                Article
                            
                                 </th>
                                 <th>
                                 Fournisseur
                                 </th>
                             </tr> 
                            <tr>
                                <td> 
                                <input type="text" className='form-control' onChange={(e) => setCodeArticle(e.target.value)} placeholder="Code Article" />
                            
                                 </td>
                                 <td>
                                 <input type="text" className='form-control' onChange={(a) => setfournisseur(a.target.value)} placeholder="Fournisseur" />
                                 </td>
                             </tr>  
                             <tr>
                                 <td>
                                 <input type="email" className='form-control' onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
                                 </td>
                                 <td>       
                                
                                <input type="text" className='form-control' onChange={(a) => setMatricule(a.target.value)} placeholder="Matricule" />
                                </td>
                                 </tr>
                            <tr>
                            
                               
                                <td>
                                <input type="text" className='form-control' onChange={(a) => setPrixAchat(a.target.value)} placeholder="Prix Achat" />
                                </td>

                                <td>
                                <input type="email" className='form-control' onChange={(a) => setRéference(a.target.value)} placeholder="Réference" />
                                </td>
                                
                            </tr>
                            
                            
                                <tr>
                                    <td></td>
                                <td> <input type="text" className='form-control' onChange={(a) => setTéléphone(a.target.value)} placeholder="Téléphone" /></td>
                                </tr>
                            
                           
                            <Button type='submit' className='btn btn-success mt-4' onClick={handleFourn}> Ajouter</Button>
                        
                        </Table>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant='secondary' onClick={hanldePostClose}>Close</Button>
                    </Modal.Footer>
                </Modal>
                </div>
{/*****************************************************************************************************************/}

                <div className='model-box-view'>
                <Modal
                    show={ViewPostfour}
                    onHide={hanldePostClosefour}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Ajouter Fournisseur</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            <div className='form-group'>
                                <input type="text" className='form-control' onChange={(a) => setfournisseur(a.target.value)} placeholder="Fournisseur" />
                            </div>
                            <div className='form-group mt-3'>
                                <input type="email" className='form-control' onChange={(a) => setMatricule(a.target.value)} placeholder="Matricule fiscale" />
                            </div>
                            <div className='form-group mt-3'>
                                <input type="email" className='form-control' onChange={(a) => setRéference(a.target.value)} placeholder="Réference" />
                            </div>
                            <div className='form-group mt-3'>
                                <input type="text" className='form-control' onChange={(a) => setAdresse(a.target.value)} placeholder="Adresse" />
                            </div>
                           
                            <div className='form-group mt-3'>
                                <input type="text" className='form-control' onChange={(a) => setTéléphone(a.target.value)} placeholder="Téléphone" />
                            </div>
                            
                            <Button type='submit' className='btn btn-success mt-4' onClick={handleFourn}> Ajouter Fournisseur</Button>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant='secondary' onClick={hanldePostClosefour}>Close</Button>
                    </Modal.Footer>
                </Modal>
                </div>

                
{/*****************************************************************************************************************/} 

{/*****************************************************************************************************************/}

{/*<div className='model-box-view'>
                <Modal
                    show={ViewPostBL}
                    onHide={hanldePostCloseBL}
                    backdrop="static"
                    keyboard={false}
                  //  fullscreen={true}     
                    size={"lg"}                  >
                    <Modal.Header closeButton>
                        <Modal.Title>Bon de Livraison</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                        <Table>
                       
                                
                            <tr>
                                <td> 
                                <input type="text" className='form-control' onChange={(e) => setNUMBL(e.target.value)} placeholder="N° " />
                            
                                 </td>
                                 <td> 
                                <input type="text" className='form-control' onChange={(e) => setDateBL(e.target.value)} placeholder="Date" />
                            
                                 </td>
                                 </tr>
                                 <td colSpan={2}>
                                 <input type="text" className='form-control' value={fournisseur} onChange={(a) => setfournisseur(a.target.value)} placeholder="Fournisseur" />
                                 </td>
                            <tr>
                            
                               
                                 <td colSpan={2}>
                                <input type="email" className='form-control' value={Réference} onChange={(a) => setRéference(a.target.value)} placeholder="Réference" />
                                </td>
                            </tr>
                            <tr>
                                
                                <td colSpan={2}>
                                <input type="email" className='form-control'  onChange={(a) => setAdresse(a.target.value)} value={Adresse} placeholder="Adresse" />
                         </td>
                        </tr>
                            <tr>
                                
                                <td colSpan={2}> <input type="text" className='form-control' onChange={(a) => setTéléphone(a.target.value)} value={Téléphone} placeholder="Téléphone" /></td>
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
                                <td colSpan={4} align='right'> <Button id='aj' size='sm' variant='dark' onClick={()=> {Articles.push([CodeArticle,Description,PrixAchat,Quantité])}}>Ajouter</Button></td>
                                {console.log('testing articles',Articles)}
                                
                                
                                </tr>
                            </Table>
                            <table className='table table-striped table-hover table-bordered'>
                            <thead>
                            <tr>
                                <th >code Article</th>
                                <th >Description</th>
                                <th>Prix Achat</th>
                                <th>Quantité </th>
                                
                            </tr>
                        </thead>
                                <tbody>
                            {Articles?.map((item) =>
                                <tr key={item._id}>
                                    <td>{item[0]}</td>
                                    <td>{item[1]}</td>
                                    <td>{item[2]}</td>
                                    <td>{item.[3]}</td>
                                    
                                    
                                </tr>
                            )}
                        </tbody>
                           
                        
                        </table>
                            <Button type='submit' className='btn btn-success mt-4' onClick={BLADD}> Valider</Button>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant='secondary' onClick={hanldePostCloseBL}>Close</Button>
                    </Modal.Footer>
                </Modal>
                </div>
*/
                            }            
{/*****************************************************************************************************************/} 

{/*****************************************************************************************************************/}

<div className='model-box-view'>
                <Modal
                    show={ViewPostBS}
                    onHide={hanldePostCloseBS}
                    backdrop="static"
                    keyboard={false}
                    size='lg'
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Bon de sortie</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            <div className='form-group'>
                                <input type="text" className='form-control' onChange={(a) => setCodeArticle(a.target.value)} placeholder="Code Article" />
                            </div>
                            <div className='form-group mt-3'>
                                <input type="email" className='form-control' onChange={(a) => setRéference(a.target.value)} placeholder="Réference Fournisseur" />
                            </div>
                            <div className='form-group mt-3'>
                                <input type="text" className='form-control' onChange={(a) => setPrixAchat(a.target.value)} placeholder="Prix Achat" />
                            </div>
                           
                            <div className='form-group mt-3'>
                                <input type="text" className='form-control' onChange={(a) => setPrixVente(a.target.value)} placeholder="Quantité" />
                            </div>
                            <div className='form-group mt-3'>
                                <input type="text" className='form-control' onChange={(a) => setPrixVente(a.target.value)} placeholder="Quantité" />
                            </div>
                           
                          
                        
                            <tbody>
                            {DataBS.map((item) =>
                                <tr key={item._id}>
                                    <td>{item.CodeArticle}</td>
                                    <td>{item.Description}</td>
                                    <td>{item.fournisseur}</td>
                                    <td>{item.Quantité}</td>
                                    
                                    <td>
                                        
                    
                                        <Button size='sm' variant='danger' onClick={() => {handleViewShow(SetRowData(item),setId(item._id), setDelete(true))}}>Delete</Button>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                            <div className='form-group mt-3'>
                                <input type="text" className='form-control' onChange={(a) => setDate(a.target.value)} placeholder="Date" />
                            </div>
                           
                            <Button type='submit' className='btn btn-success mt-4' onClick={GetDataBS}> ADD</Button>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                    <div>
        
      </div>
                    <Button type='submit' className='btn btn-success mt-4' onClick={handleDeleteBS}> Valider</Button>

                        <Button variant='secondary' onClick={hanldePostCloseBS}>Close</Button>
                    </Modal.Footer>
                </Modal>
                       
                </div>

                
{/*****************************************************************************************************************/} 

           {/* Modal for Edit employee record */}
            <div className='model-box-view'>
                <Modal
                    show={ViewEdit}
                    onHide={hanldeEditClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Edit Employee</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            <div className='form-group'>
                                <label>Name</label>
                                <input type="text" className='form-control' onChange={(e) => setfullName(e.target.value)} placeholder="Please enter Name" defaultValue={RowData.fullName}/>
                            </div>
                            <div className='form-group mt-3'>
                                <label>Email</label>
                                <input type="email" className='form-control' onChange={(e) => setemail(e.target.value)} placeholder="Please enter email" defaultValue={RowData.email} />
                            </div>
                            <div className='form-group mt-3'>
                                <label>Number</label>
                                <input type="text" className='form-control' onChange={(e) => setphoneNumber(e.target.value)} placeholder="Please enter Number" defaultValue={RowData.phoneNumber}/>
                            </div>
                           
                            <div className='form-group mt-3'>
                                <label>Address</label>
                                <input type="text" className='form-control' onChange={(e) => setaddress(e.target.value)} placeholder="Please enter Address" defaultValue={RowData.address}/>
                                </div>
                                <div>
                                <label>password</label>
                                <input type="text" className='form-control' onChange={(e) => setaddress(e.target.value)} placeholder="Please enter Address" defaultValue={RowData.password}/>
                            </div>
                            <Button type='submit' className='btn btn-warning mt-4' onClick={handleEdit}>Edit Employee</Button>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant='secondary' onClick={hanldeEditClose}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        
 {/*****************************************************************************************************************/} 

           {/* Modal for Edit employee record */}
           <div className='model-box-view'>
           <Modal
               show={ViewEditFR}
               onHide={hanldeEditCloseFR}
               backdrop="static"
               keyboard={false}
           >
               <Modal.Header closeButton>
                   <Modal.Title>Edit Fournisseur</Modal.Title>
               </Modal.Header>
               <Modal.Body>
                   <div>
                       <div className='form-group'>
                           <label>Fournisseur</label>
                           <input type="text" className='form-control' onChange={(e) => setfullName(e.target.value)} placeholder="Fournisseur" defaultValue={RowData.fournisseur}/>
                       </div>
                       <div className='form-group mt-3'>
                           <label>Réference</label>
                           <input type="email" className='form-control' onChange={(e) => setemail(e.target.value)} placeholder="Réference" defaultValue={RowData.Réference} />
                       </div>
                       <div className='form-group mt-3'>
                           <label>Prix Achat</label>
                           <input type="text" className='form-control' onChange={(e) => setphoneNumber(e.target.value)} placeholder="Prix Achat" defaultValue={RowData.PrixAchat}/>
                       </div>
                      
                       <div className='form-group mt-3'>
                           <label>Prix Vente</label>
                           <input type="text" className='form-control' onChange={(e) => setaddress(e.target.value)} placeholder="Prix Vente" defaultValue={RowData.PrixVente}/>
                           </div>
                           <div>
                           <label>Quantité</label>
                           <input type="text" className='form-control' onChange={(e) => setaddress(e.target.value)} placeholder="Quantité" defaultValue={RowData.Quantité}/>
                       </div>
                       <div>
                           <label>Vente</label>
                           <input type="text" className='form-control' onChange={(e) => setaddress(e.target.value)} placeholder="Vente" defaultValue={RowData.Vente}/>
                       </div>
                       <Button type='submit' className='btn btn-warning mt-4' onClick={handleEditFOUR}>Edit Fournisseur</Button>
                   </div>
               </Modal.Body>
               <Modal.Footer>
                   <Button variant='secondary' onClick={hanldeEditCloseFR}>Close</Button>
               </Modal.Footer>
           </Modal>
       </div>
       {/*****************************************************************************************************************/}

<div className='model-box-view'>
                <Modal
                    show={ViewListFour}
                    onHide={hanldeListFourClose}
                    backdrop="static"
                    keyboard={false}
                    size='lg'
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Liste Fournisseur</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                        <table className='table table-striped table-hover table-bordered'>
                        <thead>
                            <tr>
                                <th>Fournisseur</th>
                                <th>Matricule fiscale</th>
                                <th>Réference</th>
                                <th>Adresse</th>
                                <th>Téléphone</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Four.map((item) =>
                                <tr key={item._id}>
                                    <td>{item.fournisseur}</td>
                                    <td>{item.Matricule}</td>
                                    <td>{item.Réference}</td>
                                    <td>{item.Adresse}</td>
                                    <td>{item.Téléphone}</td>
                                    <td style={{ minWidth: 190 }}>
                                        <Button size='sm' variant='dark' onClick={() => { handleViewShow(SetRowData(item)) }}>View</Button>|
                                        <Button size='sm' variant='dark' onClick={()=> {handleEditShow(SetRowData(item),setId(item._id))}}>Edit</Button>|
                                        <Button size='sm' variant='dark' onClick={() => {handleViewShow(SetRowData(item),setId(item._id), setDelete(true))}}>Delete</Button>|
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                    
                    <Button type='submit' className='btn btn-success mt-4' onClick={handlePostShowfour}> Ajouter Founisseur</Button>

                        <Button variant='secondary' onClick={hanldeListFourClose}>Close</Button>
                    </Modal.Footer>
                </Modal>
                       
                </div>

                
{/*****************************************************************************************************************/}
<div className='model-box-view'>
                <Modal
                    show={ViewListQntFour}
                    onHide={hanldeListQntFourClose}
                    backdrop="static"
                    keyboard={false}
                    size='lg'
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Quantité par Fournisseur</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                        <table className='table table-striped table-hover table-bordered'>
                        <thead>
                            <tr>
                                <th>Fournisseur</th>
                                
                                <th>Quantité</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Four.map((item) =>
                                <tr key={item._id}>
                                    <td>{item.fournisseur}</td>
                                    <td>{item.Qnt}</td>
                               </tr>
                            )}
                        </tbody>
                    </table>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                    
                  

                        <Button variant='secondary' onClick={hanldeListQntFourClose}>Close</Button>
                    </Modal.Footer>
                </Modal>
                       
                </div>

                
{/*****************************************************************************************************************/} 
  </div> 
    );
};

/*<td>
                <Table table table-striped table-hover table-bordered variant='dark'>
                        <thead>
                        
                            <tr>
                            
                                <th>Fournisseur</th>
                                <th>Réference</th>
                                <th>Prix Achat</th>
                                <th>Prix Vente</th>
                                <th>Quantité</th>
                                <th>Vente</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {DataFour.map((item) =>
                                <tr key={item._id}>
                                    <td>{item.fournisseur}</td>
                                    <td>{item.Réference}</td>
                                    <td>{item.PrixAchat}</td>
                                    <td>{item.PrixVente}</td>
                                    <td>{item.Quantité}</td>
                                    <td>Working on it</td>
                                    
                                    <td style={{ minWidth: 190 }}>
                                        
                                        <Button size='sm' variant='warning' onClick={()=> {handleEditShowFR(SetRowData(item),setId(item._id))}}>Edit</Button>|
                                        <Button size='sm' variant='danger' onClick={() => {handleViewShow(SetRowData(item),setId(item._id), setDelete(true))}}>Delete</Button>|
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </Table></td> */