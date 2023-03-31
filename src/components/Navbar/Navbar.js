import React from 'react'
import "./Navbar.css"
import * as GoIcons from "react-icons/go";
import * as RxIcons from "react-icons/rx";
import * as CiIcons from "react-icons/ci";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
      return (
    <div className="navbar">
    <div style={{display: 'flex', justifyContent: 'center', alignContent: 'center'}}>
    <img src = "https://www.thewasserstoff.com/images/wstf-logo.svg" alt=" " width="40px"/>
      <p style={{marginTop: '5%'}}>WASSERSTOFF</p>
    </div>
      
      <div className="search-navlist">
        <div className="search-box">
          <input type="search" placeholder="Search..." />
          <span className="search-icon">
            <CiIcons.CiSearch size={20}/>
          </span>
        </div>
        {/* Creating Menu Bar using unordered lists */}
        <ul className="menu">
          <li onClick={()=>{navigate('/')}}>Statistics</li>
          <li onClick={()=>{navigate('/overview')}}>Overview</li>
          <li onClick={()=> {navigate('/dashboard')}}>Dashboard</li>
          <li>Analytics</li>
        </ul>
      </div>
      <div className="profile-section">
        <span className="icon1">
        <RxIcons.RxPerson style={{cursor:"pointer"}} size={20}/> {/* Used react icons to import the icons in profile-section  */}
        </span>
        <span className="icon1">
          <GoIcons.GoSettings style={{cursor:"pointer"}} size={20}/>{/* Used react icons to import the icons in profile-section */}
        </span>
      </div>
    </div>
   
  )
}
export default Navbar