import React from 'react'

function JobPosting() {
  return (
    <div className='d-flex flex-column mb-2'>
            <h4 className='mb-2'>Date of Posting</h4>
            <div >
                <input type="radio" id="html" name="fav_language" value="HTML" />
                <label for="html"> All Time</label><br />
                <input type="radio" id="css" name="fav_language" value="CSS" />
                <label for="css"> Last 24 hours</label><br />
                <input type="radio" id="javascript" name="fav_language" value="JavaScript" />
                <label for="javascript"> Last 7 days</label><br />
                <input type="radio" id="javascript" name="fav_language" value="JavaScript" />
                <label for="javascript"> Last Month</label>
            </div>
        </div>
  )
}

export default JobPosting