import React from 'react'
import Header from '../Component/Header'
import Estimate from '../Component/Estimate'

function SalaryEstimate() {
    return (
        <>
            <Header />
            <div className='mt-5 container one p-5' style={{ textAlign: 'center',width:'90%' }} >
                <h1>Estimate Salary</h1>
            </div>
            <div className='mt-5 justify-content-center' style={{ textAlign: 'center' }} >
                <input style={{ width: '40%' }} type="text" />
                <button className='ms-2 two'><i class="fa-solid fa-magnifying-glass"></i></button>
            </div>
            <Estimate/>
        </>
    )
}

export default SalaryEstimate