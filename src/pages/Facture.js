import React, { useEffect, useState } from 'react';
import { Button, Modal, ModalTitle,Table } from 'react-bootstrap'
import axios from 'axios'

export const Facture = () => {
    var ipadress='localhost'
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()} ${current.getHours()}:${current.getMinutes()}`;
    const [fournisseur, setfournisseur] = useState("")
    const [Réference, setRéference] = useState("")
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
    const [RowData, SetRowData] = useState([])
    const [ViewShow, SetViewShow] = useState(false)
    const [Adresse, setAdresse] = useState("");
    const [Téléphone, setTéléphone] = useState(0);
    const [TotalTVA, setTotalTVA] = useState([]);
    const [NomCL, setNomCL] = useState();
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
        console.log("data after filter",Data.NumCom)
        console.log("filter",filter)
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
    console.log("data after filter",Data)
    console.log("filter",filter)
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
    console.log("data after filter",Data)
    console.log("filter",filter)
    }
    
}
/************************************************************************************************************/
/********************************************************************************************************/

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
    
    const FactADD = () => {
        const url = `http://${ipadress}:5001/Ajout_Facture`
        const Credentials = {NumFact,date,NomCL,Adresse, CDPostVille,Téléphone,email,MontTHT,TotalTVA,RemiseHT,MontTTTC,MontDV,Rest,TotNetHT,Articles}
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
   
        const Calc_Total=()=>{
            for (let index = 0; index < Articles.length; index++) {
             const element = Articles[index];
            var Total=Total+parseInt(element[3])
              console.log("Total",Total)
            } 
            setMontTHT(Total)
         
         }
    console.log(ViewShow, RowData)
    useEffect(() => {
        GetEmployeeData();
        setNumFact( Math.floor(Math.random() * 9999999).toString())
    }, [])
    return (
        <div class="p-3 " >
            <p style={{color:'black',fontSize:"25px",marginLeft:"10px",fontFamily:"Times New Roman",fontWeight:"bold"}}>Liste des Factures</p>
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
                                        <Button size='sm' variant='dark' onClick={()=> {handleEditShow(SetRowData(item),setId(item._id))}}>Edit</Button>
                                        
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
                                <td> <input type="text" className='form-control' value={RowData.CDPostVille} readOnly/></td>
                                <td> <input type="text" className='form-control'value={RowData.Téléphone} readOnly /></td>
                              </tr> 
                              <tr>
                                <td> <input type="text" className='form-control'value={RowData.email} readOnly /></td>
                               
                              </tr> 
                               
                            
                      
                       
                           </Table>
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
                                <td> <input type="text" className='form-control' value={RowData.Mon} readOnly /></td>
                                <td> <input type="text" className='form-control' value={RowData.NomCL} readOnly /></td>
                              </tr> 
                              <tr>
                                <td> <input type="text" className='form-control' value={RowData.NomCL} readOnly /></td>
                                <td> <input type="text" className='form-control' value={RowData.NomCL} readOnly /></td>
                              </tr> 
                              <tr>
                                <td> <input type="text" className='form-control' value={RowData.NomCL} readOnly/></td>
                                <td> <input type="text" className='form-control' value={RowData.NomCL} readOnly /></td>
                              </tr> 
                              <tr>
                                <td> <input type="text" className='form-control'value={RowData.NomCL} readOnly/></td>
                               
                              </tr> 
                                
                            </Table>
                            
                            {
                                Delete && (
                                    <Button type='submit' className='btn btn-danger mt-4' >Delete Employee</Button>
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
                        <Button variant='secondary' onClick={hanldePostClose}>Close</Button>
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
                        <Modal.Title>Edit Employee</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            <div className='form-group'>
                                <label>Name</label>
                                <input type="text" className='form-control' onChange={(e) => setfullName(e.target.value)} placeholder="Please enter Name" defaultValue={RowData._id}/>
                            </div>
                            <div className='form-group mt-3'>
                                <label>Email</label>
                                <input type="email" className='form-control' onChange={(e) => setemail(e.target.value)} placeholder="Please enter email" defaultValue={RowData.date} readOnly/>
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
                            <Button type='submit' className='btn btn-warning mt-4'>Edit Employee</Button>
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
                        <Modal.Title>Facture</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                        <Table>
                                <tr><th>Client</th></tr>
                                <tr>
                                <td> <input type="text" className='form-control' onChange={(a) => setNomCL(a.target.value)} placeholder="Nom" /></td>
                                <td> <input type="text" className='form-control' onChange={(a) => setAdresse(a.target.value)} placeholder="Adresse" /></td>
                              </tr> 
                              <tr>
                                <td> <input type="text" className='form-control' onChange={(a) => setCDPostVille(a.target.value)} placeholder="Code Pstal et Ville" /></td>
                                <td> <input type="text" className='form-control' onChange={(a) => setTéléphone(a.target.value)} placeholder="Numéro téléphone" /></td>
                              </tr> 
                              <tr>
                                <td> <input type="text" className='form-control' onChange={(a) => setemail(a.target.value)} placeholder="Email" /></td>
                               
                              </tr> 
                                
                            </Table>
                        
                                <Table>
                                <tr><th>Article</th></tr>
                                <tr>
                                
                                <td> <input type="text" className='form-control' onChange={(a) => setDescription(a.target.value)} placeholder="Description" /></td>
                                <td> <input type="text" className='form-control' onChange={(a) => setQuantité(a.target.value)} placeholder="
                                Quantité" /></td>
                                <td> <input type="text" className='form-control' onChange={(a) => setPrixUni(a.target.value)} placeholder="Prix unitaire" /></td>
                               
                                
                                
                                </tr>
                                <tr>
                                <td colSpan={4} align='right'> <Button id='aj' size='sm' variant='dark' onClick={()=> {Articles.push([Description,PrixUni,Quantité,parseFloat(PrixUni)*parseInt(Quantité)])}}>Ajouter</Button></td>
                                {console.log('testing articles',Articles)}
                                
                                
                                </tr>
                            </Table>
                            <table className='table table-striped table-hover table-bordered'>
                            <thead>
                            <tr>
                                
                                <th >Description</th>
                                <th>Quantité </th>
                                <th>Prix unitaire</th>
                                <th>Total</th>
                                
                            </tr>
                        </thead>
                                <tbody>
                            {Articles?.map((item) =>
                                <tr key={item._id}>
                                    <td>{item[0]}</td>
                                    <td>{item[2]}</td>
                                    <td>{item[1]}</td>
                                    <td>{item[3]}</td>

                                    
                                    
                                </tr>
                            )}
                        </tbody>
                            
                        </table>
                        <Table>
                                
                                <tr>
                                <td> <input type="text" className='form-control' value={MontTHT} placeholder="Montant Total HT" /></td>
                                <td> <input type="text" className='form-control' onChange={(a) => setMontTTTC(a.target.value)} placeholder="Montant Total TTC" /></td>
                              </tr> 
                              
                              <tr>
                                <td> <input type="text" className='form-control' onChange={(a) => setTotNetHT(a.target.value)} placeholder="Total Net HT" /></td>
                                <td> <input type="text" className='form-control' value={"19%"} placeholder="Total TVA" /></td>
                               
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

