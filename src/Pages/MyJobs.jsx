import React from 'react'
import Header from '../Component/Header'
import Table from 'react-bootstrap/Table';

function MyJobs() {
    return (
        <>
            <Header />
            <div className='mt-5 justify-content-center' style={{ textAlign: 'center' }} >
                <h1>All Uploaded Jobs</h1>
                <input style={{ width: '40%' }} type="text" />
                <button className='ms-2 log'><i class="fa-solid fa-magnifying-glass"></i></button>
            </div>
            <div className=' mt-5 container border border-dark' style={{ width: '80%' }}>
                <div style={{ display: 'flex' }} className='my-3 '>
                    <p><b>All Jobs</b></p>
                    <button className='ms-auto log' >Post A New Job</button>
                </div>
                <Table striped bordered hover >
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Title</th>
                            <th>Company Name</th>
                            <th>Salary</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>title</td>
                            <td>company name</td>
                            <td>salary</td>
                            <td><button type='button' className='btn text-dark' style={{backgroundColor:'rgb(163,162,162)'}}><i class="fa-solid fa-pen-to-square"></i></button></td>
                            <td><button type='button' className='btn text-dark' style={{backgroundColor:'rgb(163,162,162)'}}><i class="fa-solid fa-trash"></i></button></td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </>
    )
}

export default MyJobs