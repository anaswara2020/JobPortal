import React from 'react'
import Cards from '../Component/Cards'
import SideBar from '../sideBar/SideBar'
import Newsletter from '../Component/Newsletter'

function Jobs() {
  return (
    <div className="row ">
        <div className="col-lg-3 col-md-4 p-4 rounded bg-light"><SideBar/></div>
        <div className="col-lg-6 col-md-7 bg-light p-4 rounded"><Cards/></div>
        <div className="col-lg-3  p-4 rounded bg-light"><Newsletter/></div>
       </div>
  )
}

export default Jobs