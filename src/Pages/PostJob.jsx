import React from 'react'
import Header from '../Component/Header'
import { Col, Row } from 'react-bootstrap'

function PostJob() {
    return (
        <>
            <Header />
            <div>
                <form >
                    <Row className='container m-5'>
                        <Col lg={6}>
                            <div className='mb-3'>
                                <label className='mb-2' htmlFor="" style={{ display: 'flex' }} >Job Title</label>
                                <input style={{width:'90%'}}  type="text" />
                            </div>
                            <div className='mb-3'>
                                <label className='mb-2' htmlFor="" style={{ display: 'flex' }} >Minimum Salary</label>
                                <input style={{width:'90%'}} type="text" placeholder='$' />
                            </div>
                            <div className='mb-3'>
                                <label className='mb-2'  htmlFor="" style={{ display: 'flex' }} >Salary Type</label>
                                <select style={{width:'90%'}} name="" id="">
                                    <option value="choose your option">#</option>
                                    <option value="Hourly">Hourly</option>
                                    <option value="Monthly">Monthly</option>
                                    <option value="Yearly">Yearly</option>
                                </select>
                            </div>
                            <div className='mb-3'>
                                <label className='mb-2' htmlFor="" style={{ display: 'flex' }} >Posting Date</label>
                                <input style={{width:'90%'}} type="Date"/>
                            </div>
                            <div className='mb-3' >
                                <label className='mb-2'  htmlFor="" style={{ display: 'flex' }} >Required Skills</label>
                                <input style={{width:'90%'}} type="text" placeholder='eg:css,js..'/>
                            </div>
                            <div >
                                <label className='mb-2' htmlFor="" style={{ display: 'flex' }} >Job Type</label>
                                <select style={{width:'90%'}} name="" id="">
                                    <option value="choose your option">#</option>
                                    <option value="Hourly">Part-time</option>
                                    <option value="Monthly">full-time</option>
                                    <option value="Yearly">Temporary</option>
                                </select>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className='mb-3'>
                                <label className='mb-2' htmlFor="" style={{ display: 'flex' }} >Company Name</label>
                                <input style={{width:'90%'}} type="text" />
                            </div>
                            <div className='mb-3'>
                                <label className='mb-2' htmlFor="" style={{ display: 'flex' }} >Maximum Salary</label>
                                <input style={{width:'90%'}} type="text" placeholder='$' />
                            </div>
                            <div className='mb-3'>
                                <label className='mb-2' htmlFor="" style={{ display: 'flex' }} >Job Location</label>
                                <input style={{width:'90%'}} type="text"  />
                            </div>
                            <div className='mb-3'>
                                <label className='mb-2'  htmlFor="" style={{ display: 'flex' }} >Employment Type</label>
                                <select style={{width:'90%'}} name="" id="">
                                    <option value="choose your option">#</option>
                                    <option value="Hourly">Office job</option>
                                    <option value="Monthly">Internship</option>
                                    <option value="Yearly">Work from home</option>
                                </select>
                            </div>
                            <div className='mb-3'>
                                <label className='mb-2' htmlFor="" style={{ display: 'flex' }} >Company Logo</label>
                                <input style={{width:'90%'}} type="url"  placeholder='Paste your company logo'/>
                            </div>
                            <div>
                                <label className='mb-2' htmlFor="" style={{ display: 'flex' }} >Job Posted by</label>
                                <input style={{width:'90%'}} type="email" placeholder='your email' />
                            </div>
                        </Col>
                    </Row>
                    <div className=' container m-5'>
                    <label className='mb-2' htmlFor="" style={{ display: 'flex' }} >Job Discription</label>
                    <textarea style={{width:'100%'}} name="" id="" cols="100" rows="5"></textarea>
                    </div>
                    <button type='button' className='btn mx-5 container mb-5 text-dark' style={{backgroundColor:'rgb(163,162,162)'}}>Submit</button>
                </form>
            </div>
        </>
    )
}

export default PostJob