import React from 'react'

function Location() {
    return (
        <div className='d-flex flex-column mb-2'>
            <h4 className='mb-2'>Location</h4>
            <div >
                <input type="radio" id="html" name="fav_language" value="HTML" />
                <label for="html"> All</label><br />
                <input type="radio" id="css" name="fav_language" value="CSS" />
                <label for="css"> Tvm</label><br />
                <input type="radio" id="javascript" name="fav_language" value="JavaScript" />
                <label for="javascript"> Ernakulam</label><br />
                <input type="radio" id="javascript" name="fav_language" value="JavaScript" />
                <label for="javascript"> Kozhikode</label>
            </div>
        </div>
    )
}

export default Location