import React from 'react'
import Location from './Location'
import Salary from './Salary'
import JobPosting from './JobPosting'
import WorkExperience from './WorkExperience'

function SideBar() {
  return (
    <div>
        <h3 className='text-bold'>Filter</h3>
        <Location/>
        <Salary/>
        <JobPosting/>
        <WorkExperience/>
    </div>
  )
}

export default SideBar