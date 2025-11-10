import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './Components/Login'
import Dashboard from './Components/Dashboard'
import Registration from './Components/Registration'
import MainLayout from './Components/MainLayout'

function App() {

  return (
    <>
      {/* <h2>Welcome to cart</h2> */}
      <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/registration' element={<Registration/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
        <Route path='/mainlayout' element={<MainLayout/>}></Route>
      </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default App
