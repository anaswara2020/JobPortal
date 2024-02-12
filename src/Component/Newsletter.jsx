import React from 'react'

function Newsletter() {
  return (
    <div>
        <div className='mb-5'>
            <h4><i class="fa-solid fa-envelope"> </i> Email me for Jobs</h4>
            <p>Lorem ipsum dolor sit amet consecteturri nemo ut, mole facilisitiis recusandae?</p>
            <div>
                <input type="email" name='email' placeholder='name@gmail.com ' className='mb-2 py-2 border form-control'/>
                <input type="submit" placeholder='Subscribe' className=' py-2 form-control '  style={{backgroundColor:'rgb(163, 162, 162)'}} />
            </div>
        </div>
        <div>
            <h4><i class="fa-solid fa-envelope"> </i> Get noticed Faster</h4>
            <p>Lorem ipsum dolor sit amet consecteturri nemo ut, mole facilisitiis recusandae?</p>
            <div>
                <input type="submit" placeholder='Upload your resume' className=' py-2 form-control '  style={{backgroundColor:'rgb(163, 162, 162)'}} />
            </div>
        </div>
    </div>
  )
}

export default Newsletter