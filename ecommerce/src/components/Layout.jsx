import React from 'react'
import './Layout.css'
import { Link, Route, Routes} from 'react-router-dom'
import { About } from './About'
import Home from './Home'
import Login from './Login'
import Register from './Register'
import FunState from './FunState'
import ResponsiveAppBar from './ResponsiveAppBar'
import DataRestApi from './DataRestApi'
import { Registration } from './Registration'
import Profile from './Profile'
import Logout from './Logout'

const Layout = () => {
  return (
    <div className="container">
    <div className="header">
      <ResponsiveAppBar/>
        {/* <nav>
            <Link to="/">Home</Link>&nbsp;&nbsp;&nbsp;
            <Link to="/about">About</Link>&nbsp;&nbsp;&nbsp;
            <Link to="/signup">Sign Up</Link>&nbsp;&nbsp;&nbsp;
            <Link to="/login">Login</Link>&nbsp;&nbsp;&nbsp;
            <Link to="/counter">Counter</Link>&nbsp;&nbsp;&nbsp;
        </nav> */}
    </div>
    <div className="lsb">LSB</div>
    <div className="main">
     <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/register" element={<Registration/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/counter" element={<FunState/>}></Route>
        <Route path="/profile" element={<Profile></Profile>}></Route>
        <Route path="/datafetch" element={<DataRestApi/>}></Route>
        <Route path="/logout" element={<Logout/>}></Route>
     </Routes>
    </div>
    <div className="footer">Footer</div>
    
    
    </div>
  )
}
export default Layout