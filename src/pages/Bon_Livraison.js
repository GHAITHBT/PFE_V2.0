import React, { useEffect, useState } from 'react';
import { Button, Modal, ModalTitle,Table } from 'react-bootstrap'
import axios from 'axios'
import { ProductionQuantityLimits } from '@mui/icons-material';

export const BL = () => {
    var ipadresse="localhost"

    var CodeA=''
    var Qnt=0
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()} ${current.getHours()}:${current.getMinutes()}`;
    const [fournisseur, setfournisseur] = useState("")
    const [Réference, setRéference] = useState("")
    const [PrixAchat, setPrixAchat] = useState("")
    const [PrixVente, setPrixVente] = useState("")
    const [Quantité, setQuantité] = useState("")
    const [Vente, setVente] = useState("")
    const [Four, setFour] = useState("")
    const [CodeArticle, setCodeArticle] = useState("")
    const [CA_FR, setCA_FR] = useState("")
    const [CdArt, setCdArt] = useState("")
    const [Description, setDescription] = useState("")
    const [DescriptionBS, setDescriptionBS] = useState("")
    const [Data, setData] = useState([]);
    const [RowData, SetRowData] = useState([])
    const [ViewShow, SetViewShow] = useState(false)
    const [Adresse, setAdresse] = useState("");
    const [Téléphone, setTéléphone] = useState(0);
    const [DataBS, setDataBS] = useState([]);
    const [DateBL, setDateBL] = useState();
    const [NUMBL, setNUMBL] = useState();
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
    const FilterNUMBL = () => {
        if(filter.length==0){
            GetEmployeeData()
        }
        else{
    setData(Data.filter(dt=>dt.NUMBL.includes(`${filter}`)))
        console.log("data after filter",Data)
        console.log("filter",filter)
        }
        
    }
/************************************************************************************************************/
/********************************************************************************************************/
const FilterDateBl = () => {
    if(filter.length==0){
        GetEmployeeData()
    }
    else{
setData(Data.filter(dt=>dt.DateBL.includes(`${filter}`)))
    console.log("data after filter",Data)
    console.log("filter",filter)
    }
    
}
/************************************************************************************************************/
/********************************************************************************************************/
const FilterDateCreation = () => {
    if(filter.length==0){
        GetEmployeeData()
    }
    else{
setData(Data.filter(dt=>dt.date.includes(`${filter}`)))
    console.log("data after filter",Data)
    console.log("filter",filter)
    }
    
}
/************************************************************************************************************/
/********************************************************************************************************/
const FilterFournisseur = () => {
    if(filter.length==0){
        GetEmployeeData()
    }
    else{
setData(Data.filter(dt=>dt.fournisseur.includes(`${filter}`)))
    console.log("data after filter",Data)
    console.log("filter",filter)
    }
    
}
/************************************************************************************************************/
/********************************************************************************************************/
const FilterRéference = () => {
    if(filter.length==0){
        GetEmployeeData()
    }
    else{
setData(Data.filter(dt=>dt.Réference.includes(`${filter}`)))
    console.log("data after filter",Data)
    console.log("filter",filter)
    }
    
}
/************************************************************************************************************/
/********************************************************************************************************/
    const GetEmployeeData = () => {
        //here we will get all employee data
        const url = `http://${ipadresse}:5001/BLLIST`
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
    const HandleQuantité = () => {
        //here we will get all employee data
        const url = `http://${ipadresse}:5001/EDITQuant/${CodeA}/${fournisseur}`
        const Credentials = {Qnt }
        axios.put(url, Credentials)
            .then(response => {
                const result = response.data;
                const { status, message } = result;

                    console.log('function called')
                    console.log(result)
                
            })
          
    }
    const handleEdit = () =>{
        const url = `http://${ipadresse}:5001/EDITBL/${id}`
        const Credentials = {  NUMBL,DateBL,fournisseur, Réference,Adresse, Téléphone,date }
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
    const handleDelete = () =>{
        const url = `http://${ipadresse}:5001/delete_BL/${id}`
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
    const BLADD = () => {
        const url = `http://${ipadresse}:5001/add_BL`
        const Credentials = { NUMBL,DateBL,fournisseur, Réference,Adresse, Téléphone,Articles,date}
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
        function GetFournisseurData  ()  {
            //here we will get all employee data
            const url = `http://${ipadresse}:5001/Fournisseur/`+CodeA
            axios.get(url)
                .then(response => {
                    const result = response.data;
                    setFour(result)
                       
                   
                        
                    
                })
                .catch(err => {
                    console.log(err)
                })
                
        }
        /************************************************************************************* */
        const validé=()=>{
            BLADD()
            for (let index = 0; index < Articles.length; index++) {
                const element = Articles[index];
                CodeA=element[0]
                GetFournisseurData()
                
               
                Qnt=element[3]
                console.log(element[0])
                console.log(element[3])
                
                HandleQuantité()
            }
           
           
        }
    console.log(ViewShow, RowData)
    useEffect(() => {
        GetEmployeeData();
    }, [])
    return (
        <div>
            <p style={{color:'black',fontSize:"25px",marginLeft:"10px",fontFamily:"Times New Roman",fontWeight:"bold"}}>Bon De Livraison</p>
            <hr></hr>
           
            <div  class="p-3 ">
            <span style={{marginLeft: '400px',marginBottom:"50px"}}>  <Button variant='dark' onClick={() => { handlePostShowBL() }}><i className='fa fa-plu'></i>
                    <b>Bon Livraison</b>
                    </Button></span>
                    <Button style={{marginLeft:'200px',width:"100px",}} variant='dark' onClick={() => {window.location.reload()}}>
                    <b >Actualiser</b>
                    </Button>
                    <hr></hr> 
                    </div>
            <div>
                <div className='table-responsive'>
                    <table className='table table-striped table-hover table-bordered'>
                        <thead>
                            <tr>
                                <th>N°<br/> <input type="text" className='form-control' onChange={(a) => setFilter(a.target.value)+FilterNUMBL()} placeholder="Filter" /></th>
                                <th>Date de bon de Livraison<br/> <input type="text" className='form-control' onChange={(a) => setFilter(a.target.value)+FilterDateBl()} placeholder="Filter" /></th>
                                <th>Date de creation<br/> <input type="text" className='form-control' onChange={(a) => setFilter(a.target.value)+FilterDateCreation()} placeholder="Filter" /></th>
                                <th>Fournisseur<br/> <input type="text" className='form-control' onChange={(a) => setFilter(a.target.value)+FilterFournisseur()} placeholder="Filter" /></th>
                                <th>Réference<br/> <input type="text" className='form-control' onChange={(a) => setFilter(a.target.value)+FilterRéference()} placeholder="Filter" style={{width:"100px"}}/></th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Data.map((item) =>
                                <tr key={item._id}>
                                    <td>{item.NUMBL}</td>
                                    <td>{item.DateBL}</td>
                                    <td>{item.date}</td>
                                    <td>{item.fournisseur}</td>

                                    <td>{item.Réference}</td>
                                    <td style={{ minWidth: 190 }}>
                                        <Button size='sm' variant='dark' onClick={() => { handleViewShow(SetRowData(item)) }}>ouvrir</Button>|
                                        <Button size='sm' variant='dark' onClick={()=> {handleEditShow(SetRowData(item),setId(item._id),setNUMBL(RowData.NUMBL),setDateBL(RowData.DateBL),setfournisseur(RowData.fournisseur),setRéference(RowData.Réference),setAdresse(RowData.Adresse),setTéléphone(RowData.Téléphone))}}>Modifier</Button>|
                                        <Button size='sm' variant='dark' onClick={() => {handleDeleteShow(SetRowData(item),setId(item._id), setDelete(true))}}>Supprimer</Button>
                                        
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
                        <Modal.Title>Bon De Livraison</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                        <Table>
                       
                                
                       <tr>
                           <td> 
                              <b> Numéro de bon </b>
                           <input type="text" className='form-control'  placeholder="N° " value={RowData.NUMBL} readOnly/>
                       
                            </td>
                            <td> 
                                <b>Date</b>
                           <input type="text" className='form-control'  placeholder="Date"value={RowData.DateBL}readOnly />
                       
                            </td>
                            </tr>
                            
                            <td colSpan={2}>
                           <b> Fournisseur</b>
                            <input type="text" className='form-control' value={RowData.fournisseur}  placeholder="Fournisseur" readOnly />
                            </td>
                       <tr>
                       
                          
                            <td colSpan={2}>
                              <b>  Réference </b>
                           <input type="email" className='form-control' value={RowData.Réference}  placeholder="Réference" readOnly />
                           </td>
                       </tr>
                       <tr>
                           
                           <td colSpan={2}>
                              <b> Adresse</b>
                           <input type="email" className='form-control'  value={RowData.Adresse} placeholder="Adresse" readOnly />
                    </td>
                   </tr>
                       <tr>
                           
                           <td colSpan={2}> <b>Numéro Téléphone</b>
                           <input type="text" className='form-control'  value={RowData.Téléphone} placeholder="Téléphone"readOnly /></td>
                           </tr>
                           </Table>
                           <Table>
                            <thead>
                            <tr>
                                <th >code Article</th>
                                <th >Description</th>
                                <th>Prix Achat</th>
                                <th>Quantité </th>
                            </tr>
                        </thead>
                                <tbody>
                            {RowData.Articles?.map((item) =>
                                <tr key={item._id}>
                                    <td>{item[0]}</td>
                                    <td>{item[1]}</td>
                                    <td>{item[2]}</td>
                                    <td>{item[3]}</td>
                                </tr>
                            )}
                        </tbody>
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
                        <Modal.Title>Supprimer</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                        <Table>
                       
                                
                       <tr>
                           <td> 
                              <b> Numéro de bon </b>
                           <input type="text" className='form-control'  placeholder="N° " value={RowData.NUMBL} readOnly/>
                       
                            </td>
                            <td> 
                                <b>Date</b>
                           <input type="text" className='form-control'  placeholder="Date"value={RowData.DateBL}readOnly />
                       
                            </td>
                            </tr>
                            
                            <td colSpan={2}>
                           <b> Fournisseur</b>
                            <input type="text" className='form-control' value={RowData.fournisseur}  placeholder="Fournisseur" readOnly />
                            </td>
                       <tr>
                       
                          
                            <td colSpan={2}>
                              <b>  Réference </b>
                           <input type="email" className='form-control' value={RowData.Réference}  placeholder="Réference" readOnly />
                           </td>
                       </tr>
                       <tr>
                           
                           <td colSpan={2}>
                              <b> Adresse</b>
                           <input type="email" className='form-control'  value={RowData.Adresse} placeholder="Adresse" readOnly />
                    </td>
                   </tr>
                       <tr>
                           
                           <td colSpan={2}> <b>Numéro Téléphone</b>
                           <input type="text" className='form-control'  value={RowData.Téléphone} placeholder="Téléphone"readOnly /></td>
                           </tr>
                           </Table>
                           <Table>
                            <thead>
                            <tr>
                                <th >code Article</th>
                                <th >Description</th>
                                <th>Prix Achat</th>
                                <th>Quantité </th>
                            </tr>
                        </thead>
                                <tbody>
                            {RowData.Articles?.map((item) =>
                                <tr key={item._id}>
                                    <td>{item[0]}</td>
                                    <td>{item[1]}</td>
                                    <td>{item[2]}</td>
                                    <td>{item[3]}</td>
                                </tr>
                            )}
                        </tbody>
                        </Table>
                        <Button  className='btn btn-warning mt-4'onClick={handleDelete}>Valider</Button>

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
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Modifier</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <div>
                        <Table>
                       {}
                                
                       <tr>
                           <td> 
                              <b> Numéro de bon </b>
                           <input type="text" className='form-control'  placeholder="N° " defaultValue={RowData.NUMBL} setNUMBL  onChange={(e) => setNUMBL(e.target.value)} />
                       
                            </td>
                            <td> 
                                <b>Date</b>
                           <input type="text" className='form-control'  placeholder="Date" defaultvalue={RowData.DateBL}   />
                       
                            </td>
                            </tr>
                            
                            <td colSpan={2}>
                           <b> Fournisseur</b>
                            <input type="text" className='form-control' defaultvalue={RowData.fournisseur}  placeholder="Fournisseur"   onChange={(e) => setfournisseur(e.target.value)} />
                            </td>
                       <tr>
                       
                          
                            <td colSpan={2}>
                              <b>  Réference </b>
                           <input type="email" className='form-control' defaultvalue={RowData.Réference}  placeholder="Réference"  onChange={(e) => setRéference(e.target.value)}  />
                           </td>
                       </tr>
                       <tr>
                           
                           <td colSpan={2}>
                              <b> Adresse</b>
                           <input type="email" className='form-control'  defaultvalue={RowData.Adresse} placeholder="Adresse"  onChange={(e) => setAdresse(e.target.value)}  />
                    </td>
                   </tr>
                       <tr>
                           
                           <td colSpan={2}> <b>Numéro Téléphone</b>
                           <input type="text" className='form-control'  defaultvalue={RowData.Téléphone} placeholder="Téléphone"  onChange={(e) => setTéléphone(e.target.value)}  /></td>
                           </tr>
                           </Table>
                           <Table>
                            <thead>
                            <tr>
                                <th >code Article</th>
                                <th >Description</th>
                                <th>Prix Achat</th>
                                <th>Quantité </th>
                            </tr>
                        </thead>
                                <tbody>
                            {RowData.Articles?.map((item) =>
                                <tr key={item._id}>
                                    <td>{item[0]}</td>
                                    <td>{item[1]}</td>
                                    <td>{item[2]}</td>
                                    <td>{item[3]}</td>
                                </tr>
                            )}
                        </tbody>
                        </Table>
                           
                              <Button type='submit' className='btn btn-warning mt-4'onClick={handleEdit}>Valider</Button>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
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
                                    <td>{item[3]}</td>
                                    
                                    
                                </tr>
                            )}
                        </tbody>
                           
                        
                        </table>
                            </div>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button type='submit' className='btn btn-success mt-4' onClick={validé} > Valider</Button>
                    <Button variant='warning' onClick={hanldePostCloseBL}style={{marginTop:"25px"}}>Close</Button>
                    </Modal.Footer>
                </Modal>
                </div>
        </div>
        
    );

};

