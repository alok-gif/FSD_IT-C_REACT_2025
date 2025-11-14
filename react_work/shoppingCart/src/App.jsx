import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './Components/Login'
import Dashboard from './Components/Dashboard'
import Registration from './Components/Registration'
import MainLayout from './Components/MainLayout'
import { useState } from 'react'

function App() {
  const [data, setData] = useState();

  return (
    <>
      {/* <h2>Welcome to cart</h2> */}
      <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login logData={data} />}></Route>
        <Route path='/registration' element={<Registration regData={setData} />}></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
        <Route path='/' element={<MainLayout/>}></Route>
      </Routes>
      
      
      </BrowserRouter>
            {JSON.stringify(data)}

    </>
  )
}

export default App
