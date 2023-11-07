
import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './Components/Header'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

function App() {


  return (
    <>
    
      <div>
        <Header></Header>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
      
    </>
  )
}

export default App
