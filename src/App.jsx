
import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './Components/Header'
import Navbar from './Components/Navbar'

function App() {


  return (
    <>
    
      <div>
        <Header></Header>
        <Navbar></Navbar>
        <Outlet></Outlet>
      </div>
      
    </>
  )
}

export default App
