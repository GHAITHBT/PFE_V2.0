import React, { useEffect, useState } from 'react';
import { Button, Modal, ModalTitle } from 'react-bootstrap'
import axios from 'axios'

export const Employee = () => {
    var ipadresse="localhost"
    const [Data, setData] = useState([]);
    const [RowData, SetRowData] = useState([])
    const [ViewShow, SetViewShow] = useState(false)
    const handleViewShow = () => { SetViewShow(true) }
    const hanldeViewClose = () => { SetViewShow(false) }
    //FOr Edit Model
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
    const [NomUtil, setNomUtil] = useState("")

    const [Delete,setDelete] = useState(false)
    //Id for update record and Delete
    const [id,setId] = useState("");
    const GetEmployeeData = () => {
        //here we will get all employee data
        const url = `http://${ipadresse}:5001/users`
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
    const handleSubmite = () => {
        const url = `http://${ipadresse}:5001/add_user`
        const Credentials = { fullName, email, phoneNumber, address ,NomUtil,password,Role}
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
    
    const handleEdit = () =>{
        const url = `http://${ipadresse}:5001/EDIT_USER/${id}`
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
    //handle Delete Function 
    const handleDelete = () =>{
        const url = `http://${ipadresse}:5001/delete_user/${id}`
        axios.delete(url)
            .then(response => {
                const result = response.data;
                const { status, message } = result;
                if (status !== 'SUCCESS') {
                    alert(message, status)
                }
                else {
                    alert(message)
                    window.location.reload()
                }
            })
            .catch(err => {
                console.log(err)
            })
    }
    //call this function in useEffect
    console.log(ViewShow, RowData)
    useEffect(() => {
        GetEmployeeData();
    }, [])
    return (
        <div>
            <div>
            <p style={{color:'black',fontSize:"25px",marginLeft:"10px",fontFamily:"Times New Roman",fontWeight:"bold"}}>Liste Employés</p>
            <hr></hr>
                <div>
                    <Button variant='dark' style={{marginLeft:"500px",marginTop:"10px"}} onClick={() => { handlePostShow() }}><i className='fa fa-plu'></i>
                      <b>  Nouveau </b>
                    </Button>
                    <Button style={{marginLeft:'200px',width:"100px",}} variant='dark' onClick={() => {window.location.reload()}}>
                    <b >Actualiser</b>
                    </Button>
                    <hr></hr>
                </div>
            </div>
            <div>
                <div className='table-responsive'>
                    <table className='table table-striped table-hover table-bordered'>
                        <thead>
                            <tr>
                                <th>Nom et Prénom</th>
                                <th>Email</th>
                                <th>Numéro téléphone</th>
                                <th>Adresse</th>
                               
                                
                                <th>Role</th>
                                <th>Nom utilisateur</th>
                                <th>Mot de Passe</th>
                                
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Data.map((item) =>
                                <tr key={item._id}>
                                    <td>{item.fullName}</td>
                                    <td>{item.email}</td>
                                    <td>{item.phoneNumber}</td>
                                    <td>{item.address}</td>
                                    <td>{item.Role}</td>
                                    <td>{item.NomUtil}</td>
                                    <td>{item.password}</td>
                                    
                                    <td style={{ minWidth: 190 }}>
                                        
                                        <Button size='sm' variant='dark' onClick={()=> {handleEditShow(SetRowData(item),setId(item._id),setfullName(RowData.fullName),setemail(RowData.Email),setaddress(RowData.address),setphoneNumber(RowData.phoneNumber),setNomUtil(RowData.NomUtil),setpassword(RowData.password))}}>Modifier</Button>|
                                        <Button size='sm' variant='dark' onClick={() => {handleViewShow(SetRowData(item),setId(item._id), setDelete(true))}}>Supprimer</Button>|
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className='model-box-view'>
                <Modal
                    show={ViewPost}
                    onHide={hanldePostClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Nouveau employé</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            <div className='form-group'>
                                <input type="text" className='form-control' onChange={(e) => setfullName(e.target.value)} placeholder="Nom et prénom" />
                            </div>
                            <div className='form-group mt-3'>
                                <input type="email" className='form-control' onChange={(e) => setemail(e.target.value)} placeholder="Email" />
                            </div>
                            <div className='form-group mt-3'>
                                <input type="text" className='form-control' onChange={(e) => setphoneNumber(e.target.value)} placeholder="Numéro téléphone" />
                            </div>
                           
                            <div className='form-group mt-3'>
                                <input type="text" className='form-control' onChange={(e) => setaddress(e.target.value)} placeholder="Adresse" />
                            </div>
                            <div className='form-group mt-3'>
                                <input type="text" className='form-control' onChange={(e) => setNomUtil(e.target.value)} placeholder="Nom utilisateur" />
                            </div>
                            <div className='form-group mt-3'>
                                <input type="text" className='form-control' onChange={(e) => setpassword(e.target.value)} placeholder="Mot de passe" />
                            </div>

                            <div className='form-group mt-3'>
                            <b> Rôle</b> : <br></br>
                                <input type="radio" value="Admin"  style={{marginLeft:"80px"}} onChange={(e) => setRole(e.target.value)}/><b>Admin</b> 
                                <input type="radio" value="Employé"  style={{marginLeft:"20px"}} onChange={(e) => setRole(e.target.value)}/><b>Agent de comptoire</b>
                                <input type="radio" value="Cassier"  style={{marginLeft:"20px"}} onChange={(e) => setRole(e.target.value)}/><b>Cassier</b>

                            </div>
                            
                            
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button type='submit' className='btn btn-success mt-4' onClick={handleSubmite}>Ajouter</Button>
                        <Button variant='warning' onClick={hanldePostClose}style={{marginTop:"25px"}}>Fermer</Button>
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
                        <Modal.Title>Modifier employé</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            <div className='form-group'>
                                <label>Nom et Prénom</label>
                                <input type="text" className='form-control' onChange={(e) => setfullName(e.target.value)} placeholder="Please enter Name" defaultValue={RowData.fullName}/>
                            </div>
                            <div className='form-group mt-3'>
                                <label>Email</label>
                                <input type="email" className='form-control' onChange={(e) => setemail(e.target.value)} placeholder="Please enter email" defaultValue={RowData.email} />
                            </div>
                            <div className='form-group mt-3'>
                                <label>Numéro de téléphone</label>
                                <input type="text" className='form-control' onChange={(e) => setphoneNumber(e.target.value)} placeholder="Please enter Number" defaultValue={RowData.phoneNumber}/>
                            </div>
                           
                            <div className='form-group mt-3'>
                                <label>Addresse</label>
                                <input type="text" className='form-control' onChange={(e) => setaddress(e.target.value)} placeholder="Please enter Address" defaultValue={RowData.address}/>
                                </div>
                                <div className='form-group mt-3'>
                                <label>Nom utilisateur</label>
                                <input type="text" className='form-control' onChange={(e) => setNomUtil(e.target.value)} placeholder="Please enter Address" defaultValue={RowData.NomUtil}/>
                                </div>
                                <div>
                                <label>Mot de passe</label>
                                <input type="text" className='form-control' onChange={(e) => setpassword(e.target.value)} placeholder="Please enter Address" defaultValue={RowData.password}/>
                            </div>
                            <Button type='submit' className='btn btn-warning mt-4' onClick={handleEdit}>Modifier</Button>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant='secondary' onClick={hanldeEditClose}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    );
};

