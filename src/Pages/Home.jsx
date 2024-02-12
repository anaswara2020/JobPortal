import React from 'react'
import Header from '../Component/Header'
import Banner from '../Component/Banner'
import Jobs from './Jobs'


function Home() {
  return (
    <>
    <Header/>
    <div><Banner></Banner></div>
    <div><Jobs/></div>
    
    </>
  )
}

export default Home