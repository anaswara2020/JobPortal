import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import About from './Pages/About'
import PostJob from './Pages/PostJob'
import MyJobs from './Pages/MyJobs'
import SalaryEstimate from './Pages/SalaryEstimate'
import Auth from './Pages/Auth'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/postjob' element={<PostJob/>}></Route>
      <Route path='/myjob' element={<MyJobs/>}></Route>
      <Route path='/salary' element={<SalaryEstimate/>}></Route>
      <Route path='/login' element={<Auth/>}></Route>
      <Route path='/signup' element={<Auth insideSignup/>}></Route>
    </Routes>
    </>
  )
}

export default App
