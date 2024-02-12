import React from 'react'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardSubTitle,
    MDBCardText,
    MDBCardLink
} from 'mdb-react-ui-kit';


function Cards() {
    return (
        <>
          <h3>Jobs</h3>
            <MDBCard>
                <MDBCardBody>
                    <div className='row '>
                        <div className='col-2 '>
                            <img className='icon' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSitRR1YjtF86dsqjrS6mlhXp14y7R9Nk9LeQ&usqp=CAU" alt="" />
                        </div>
                       <div className='col-9 mb-4'>
                            <MDBCardTitle>Job Title</MDBCardTitle>
                            <MDBCardSubTitle>Company Name</MDBCardSubTitle>
                       </div>
                    </div>
                    <div className='align-items-center'>
                        <p>
                            <span className=''><i class="fa-solid fa-location-dot"></i> Job Location</span>
                            <span className='ms-2'><i class="fa-regular fa-clock"></i> Employment Type</span>
                            <span className='ms-2'><i class="fa-solid fa-dollar-sign"></i> Min-Max</span>
                            <span className='ms-2'><i class="fa-solid fa-calendar-days"></i> PostingData</span>
                        </p>
                    </div>
                    <MDBCardText>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, atque! Tenetur aliquid mollitia ipsam, repellat nobis quibusdam doloremque vero officiis sunt? Animi natus delectus et illo voluptate aperiam odit sunt.
                    </MDBCardText>
                </MDBCardBody>
            </MDBCard>
        </>
    )
}

export default Cards