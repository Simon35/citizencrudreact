import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Badge from 'react-bootstrap/Badge'
import axios from 'axios'

function Crud() {
    const [data,setData]=useState([]);
    const [name,setCitizenName]=useState('');
    const [city,setCitizenCity]=useState('');
    const [age,setCitizenAge]=useState('');
    const [isactive,setCitizenStatus]=useState('');
    
    /**
     * Add fields
     */
    
    /**
     * useEffet : hook d'effet, permet d'avoir un état local
     */
    useEffect(()=>{
        getData();
    })

    const getData=()=>{
        axios.get('https://localhost:7013/api/Citizen').then((result)=>{
            //console.log("Get Data "+ JSON.stringify(result));
            //alert("Save successfully :)");
            setData(result.data);
        })
        .catch((error)=>{
            console.log(error);
        })

    }

    const handleIsactive=(e)=>{
        if (e.target.checked)
        {
            setCitizenStatus(true);
        }else{
            setCitizenStatus(false);
        }
    }

    const handleSave=()=>{
        const url = 'https://localhost:7013/api/Citizen';
        const savedata = {
            "Name": name,
            "City": city,
            "Age": age,
            "IsActive": isactive
        }
        
        axios.post(url,savedata).then((result)=>{
            console.log("Get Data "+ JSON.stringify(result));
            //alert("Save successfully :)");
            //setData(result.data);
        })
        .catch((error)=>{
            console.log(error);
        })
    }

    const handleEdit=()=>{
        handleShow();
    }

    /**
     * Modal
    */
    const [show,setShow]=useState(false);
    const handleClose=()=>setShow(false);
    const handleShow=()=>setShow(true);


  return (
    <div className="container">
        <div className='row'>
            <div className='col-6'>
                <label>Name</label>
                <input type='text' className='form-control name' name='Name' onChange={(e)=>setCitizenName(e.target.value)}/>
            </div>
            <div className='col-6'>
                <label>City</label>
                <input type='text' className='form-control city' name='City' onChange={(e)=>setCitizenCity(e.target.value)}/>
            </div>
            <div className='col-6'>
                <label>Age</label>
                <input type='text' className='form-control age' name='Age' onChange={(e)=>setCitizenAge(e.target.value)} />
            </div>
            <div className='col-6'>
                <label>Is Active</label>
                <input type='checkbox' className='IsActive' name='IsActive' onChange={handleIsactive} />
            </div>
            <div className='col-12'>
                <button type='button' className='btn btn-primary' onChange={()=>handleSave()}>Save</button>
            </div>
        </div>
        {/** Table */}
        <div className='card'>
            <div className='card-header'>
                <h3>Citizen List</h3>
            </div>
            <div className='card-body'>
                <Table>
                    <thead>
                        <tr>
                        <th>                      #                        </th>
                        <th>                            Name                        </th>
                        <th>                            City                        </th>
                        <th>                            Age                        </th>
                        <th>                            Status                        </th>
                        <th>                            Action                        </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data && data.length > 0 ? 
                            data.map((item,index)=>{
                                return(
                                
                                    <tr key={index}>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.city}</td>
                                        <td>{item.age}</td>
                                        <td>{item.isActive== true ? <Badge bg="primary">Active</Badge> : <Badge bg="warning">Inactive</Badge>}</td>
                                        <td>
                                            <button type='button' className='btn btn-primary px-2' onClick={()=>handleEdit()}>Edit</button>
                                            <button type='button' className='btn btn-danger'>Delete</button>
                                        </td>
                                    </tr>
                                )
                            })
                            :
                            "No Data"
                        }
                    </tbody>

                </Table>
            </div>
        </div>
        <Modal show={show} onHide={handleClose}> 
        
            <Modal.Header closeButton>
                <Modal.Title>Update Citizen</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <div className='row'>
            <div className='col-6'>
                <label>Name</label>
                <input type='text' className='form-control EditName' name='EditName'/>
            </div>
            <div className='col-6'>
                <label>City</label>
                <input type='text' className='form-control EditCity' name='EditCity'/>
            </div>
            <div className='col-6'>
                <label>Age</label>
                <input type='text' className='form-control EditAge' name='EditAge' />
            </div>
            <div className='col-6'>
                <label>Is Active</label>
                <input type='checkbox' className='form-control EditIsActive' name='EditIsActive' />
            </div>
        </div>

            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary">
                    Update
                </Button>
            </Modal.Footer>

        </Modal>
    </div>
  )
}

export default Crud