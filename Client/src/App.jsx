import Navbar from "./components/Navbar"
import { Outlet } from 'react-router-dom'
import './index.css'


function App() {

  return (
    <div className="flex flex-col">
    <Navbar />
    <Outlet />
  </div>
  )
}

export default App
