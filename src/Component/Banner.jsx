import React, { useState } from 'react'

function Banner() {
   const [query,setquery]=useState("")
   const handleInput=(e)=>{
    setquery(e.target.value)
   }
  return (
    <div className='container py-5 my-5 '>
      <h1>Find <span>Your</span> New <span> Job</span> Today</h1>
      <p>Thousands of jobs in the computer,engineering and technology sectors are waiting for you..</p>
      <form >
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-5 mb-2">
              <div className='d-flex justify-content-between align-items-center border border-2 border-black'>
                <input type="text" className='form-control border-0'
                onChange={handleInput}
                value={query}
                 placeholder='What position are you looking for..'/>
                <i class="fa-solid fa-magnifying-glass me-4"></i>
                </div>
            </div>
            <div className="col-lg-4 col-md-4 mb-2">
            <div className='d-flex justify-content-between align-items-center border border-2 border-black'>
                <input type="text" className='form-control border-0'
                 placeholder='Location'/>
                 <i class="fa-solid fa-location-dot me-4"></i>
                </div>
            </div>
            <div className="col-lg-3 col-md-3 mb-2">
              <button type='button' className='log' style={{width:'100px',height:'35px'}}>
                Search
              </button>
            </div>
          </div>
        </div>
      </form>

    </div>
  )
}

export default Banner