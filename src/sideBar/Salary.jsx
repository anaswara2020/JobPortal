import React from 'react'
function Salary() {
  return (
    <div className='d-flex flex-column'>
            <h4 className='mb-2'>Salary</h4>
            <div className='mb-2'>
                <button>Hourly</button>
                <button>Monthly</button>
                <button>Yearly</button>
            </div>
            <div >
                <input type="radio" id="html" name="fav_language" value="HTML" />
                <label for="html"> All</label><br />
                <input type="radio" id="css" name="fav_language" value="CSS" />
                <label for="css"> 30000k</label><br />
                <input type="radio" id="javascript" name="fav_language" value="JavaScript" />
                <label for="javascript"> 50000k</label><br />
                <input type="radio" id="javascript" name="fav_language" value="JavaScript" />
                <label for="javascript"> 80000k</label><br />
                <input type="radio" id="javascript" name="fav_language" value="JavaScript" />
                <label for="javascript"> 100000k</label>
            </div>
        </div>
  )
}

export default Salary