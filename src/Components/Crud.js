import React, { useState } from 'react'
import Table from 'react-bootstrap/Table'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

function Crud() {
    const handleEdit=()=>{
        handleShow();
    }

    const [show,setShow]=useState(false);
    const handleClose=()=>setShow(false);
    const handleShow=()=>setShow(true);


  return (
    <div classname="container">
        <div className='row'>
            <div className='col-6'>
                <label>Name</label>
                <input type='text' className='form-control Name' name='Name'/>
            </div>
            <div className='col-6'>
                <label>City</label>
                <input type='text' className='form-control City' name='City'/>
            </div>
            <div className='col-6'>
                <label>Age</label>
                <input type='text' className='form-control Age' name='Age' />
            </div>
            <div className='col-6'>
                <label>Is Active</label>
                <input type='checkbox' className='form-control IsActive' name='IsActive' />
            </div>
            <div className='col-12'>
                <button type='button' className='btn btn-primary'>Save</button>
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