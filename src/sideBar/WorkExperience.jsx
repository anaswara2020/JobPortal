import React from 'react'

function WorkExperience() {
  return (
    <div className='d-flex flex-column mb-2'>
            <h4 className='mb-2'>Work Experience</h4>
            <div >
                <input type="radio" id="html" name="fav_language" value="HTML" />
                <label for="html"> Any experience</label><br />
                <input type="radio" id="css" name="fav_language" value="CSS" />
                <label for="css"> Internship</label><br />
                <input type="radio" id="javascript" name="fav_language" value="JavaScript" />
                <label for="javascript"> Work remotely</label>
            </div>
        </div>
  )
}

export default WorkExperience