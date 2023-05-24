import React, { useState } from 'react'
import Table from 'react-bootstrap/Table'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import axios from 'axios'

function Crud() {
    const [data,setData]=useState([]);

    /**
     * Add fields
     */
    const [name,setCitizenName]=useState('');
    const [city,setCitizenCity]=useState('');
    const [age,setCitizenAge]=useState('');
    const [isactive,setCitizenStatus]=useState('');

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
            alert("Save successfully :)");
        })
    }

    const handleEdit=()=>{
        handleShow();
    }

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
                        <th>
                            #
                        </th>
                        <th>
                            Name
                        </th>
                        <th>
                            City
                        </th>
                        <th>
                            Age
                        </th>
                        <th>
                            is active
                        </th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1</td>
                        <td>1</td>
                        <td>1</td>
                        <td>1</td>
                    <td><button type='button' className='btn btn-primary px-2' onClick={()=>handleEdit()}>Edit</button>
                        <button type='button' className='btn btn-danger'>Delete</button></td>
                        </tr>
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