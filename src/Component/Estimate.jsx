import React from 'react'
import Card from 'react-bootstrap/Card';

function Estimate() {
  return (
    <>
      <div className='mt-5 m-5 ' style={{display:'flex',justifyContent:'space-between'}}>
          <Card style={{ width: '18rem' }} >
          <Card.Body className='one border'>
            <Card.Title>Job Name</Card.Title>
            <Card.Text>
                $salary
            </Card.Text>
            <Card.Link className='text-dark' href="#">Job Skills</Card.Link>
            <Card.Link className='text-dark' href="#">Skills</Card.Link>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }} >
          <Card.Body className='one border'>
            <Card.Title>Job Name</Card.Title>
            <Card.Text>
                $salary
            </Card.Text>
            <Card.Link className='text-dark' href="#">Job Skills</Card.Link>
            <Card.Link className='text-dark' href="#">Skills</Card.Link>
          </Card.Body>
        </Card><Card style={{ width: '18rem' }} >
          <Card.Body className='one border'>
            <Card.Title>Job Name</Card.Title>
            <Card.Text>
                $salary
            </Card.Text>
            <Card.Link className='text-dark' href="#">Job Skills</Card.Link>
            <Card.Link className='text-dark' href="#">Skills</Card.Link>
          </Card.Body>
        </Card><Card style={{ width: '18rem' }} >
          <Card.Body className='one border'>
            <Card.Title>Job Name</Card.Title>
            <Card.Text>
                $salary
            </Card.Text>
            <Card.Link className='text-dark' href="#">Job Skills</Card.Link>
            <Card.Link className='text-dark'  href="#">Skills</Card.Link>
          </Card.Body>
        </Card>
      </div>
    </>
  )
}

export default Estimate