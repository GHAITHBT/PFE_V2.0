import React, { useEffect, useState } from 'react';
import { Button, Modal, ModalTitle,Table } from 'react-bootstrap'
import axios from 'axios'

export const Clients = () => {
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
    const [phoneNumber, setphoneNumber] = useState(0)
    const [password, setpassword] = useState("")
    const [address, setaddress] = useState("")
    const [Crédit, setCrédit] = useState(0)
    const [Débit, setDébit] = useState(0)
    const [Cheque, setCheque] = useState(0)


    const [Delete,setDelete] = useState(false)
    //Id for update record and Delete
    const [id,setId] = useState("");
    const GetClientData = () => {
        //here we will get all employee data
        const url = `http://${ipadresse}:5001/Clients`
        axios.get(url)
            .then(response => {
                const result = response.data;
                setData(result)

                   // console.log(parseInt( parseInt(result[0].phoneNumber)+parseInt(result[1].phoneNumber)))
                
            })
            .catch(err => {
                console.log(err)
            })
    }
    const handleSubmite = () => {
        const url = `http://${ipadresse}:5001/Ajouter_Client`
        const Credentials = { fullName, email, phoneNumber, address ,Débit,Crédit,Cheque}
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
        const url = `http://${ipadresse}:5001/EDITClient/${id}`
        const Credentials = { fullName, email, phoneNumber, address,Débit,Crédit,Cheque}
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
        const url = `http://${ipadresse}:5001/Supp_Client/${id}`
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
        GetClientData();
    }, [])
    return (
        <div class="p-3 mb-2 " >
            <div >
            <p style={{color:'black',fontSize:"25px",marginLeft:"10px",fontFamily:"Times New Roman",fontWeight:"bold"}}>Liste des clients</p>
            <hr></hr>
                <div>
                <Button style={{marginLeft:'400px',width:"100px",}} variant='dark' onClick={() => {handlePostShow()}}>
                    <b >Nouveau</b>
                    </Button>
                    
                    <Button style={{marginLeft:'200px',width:"100px",}} variant='dark' onClick={() => {window.location.reload()}}>
                    <b >Actualiser</b>
                    </Button>
                    <hr></hr>
                </div>
            </div>
            <div >
                <div className='table-responsive'>
                <table className='table table-striped table-hover table-bordered'>
                        <thead>
                            <tr>
                                <th>Code Client</th>
                                <th>Nom et Prénom</th>
                                <th>Numéro téléphone</th>
                                <th>Email</th>
                                <th>Addresse</th>
                                <th>Crédit</th>
                                <th>Débit</th>
                                <th>Cheque</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Data.map((item) =>
                                <tr key={item._id}>
                                    <td>{item._id}</td>
                                    <td>{item.fullName}</td>
                                   
                                    <td>{item.phoneNumber}</td>
                                    <td>{item.email}</td>
                                    <td>{item.address}</td>
                                    <td>{item.Débit}</td>
                                    <td>{item.Crédit}</td>
                                    <td>{item.Cheque}</td>

                                    
                                    <td style={{ minWidth: 190 }}>
                                        
                                        <Button size='sm' variant='secondary' onClick={()=> {handleEditShow(SetRowData(item),setId(item._id))}}>Modifier</Button>|
                                        <Button size='sm' variant='secondary' onClick={() => {handleViewShow(SetRowData(item),setId(item._id), setDelete(true))}}>Supprimer</Button>
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
                                <input type="text" className='form-control' value={RowData.fullName} readOnly />
                            </div>
                            <div className='form-group mt-3'>
                                <input type="email" className='form-control' value={RowData.email} readOnly />
                            </div>
                            <div className='form-group mt-3'>
                                <input type="number" className='form-control' value={RowData.phoneNumber} readOnly />
                            </div>
                            
                            <div className='form-group mt-3'>
                                <input type="text" className='form-control' value={RowData.address} readOnly />
                            </div>
                            <div className='form-group mt-3'>
                                <input type="number" className='form-control' value={RowData.Débit} readOnly />
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
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Ajouter Client</Modal.Title>
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
                                <input type="number" className='form-control' onChange={(e) => setphoneNumber(e.target.value)} placeholder="Numéro de téléphone" />
                            </div>
                           
                            <div className='form-group mt-3'>
                                <input type="text" className='form-control' onChange={(e) => setaddress(e.target.value)} placeholder="Addresse" />
                            </div>
                            
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button type='submit' className='btn btn-success mt-4' onClick={handleSubmite}>Ajouter </Button>

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
                        <Button variant='secondary' onClick={hanldeEditClose}>Fermer</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    );
};

