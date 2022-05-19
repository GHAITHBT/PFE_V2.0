import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './Sidebar';
import './Navbar.css';
import { IconContext } from 'react-icons';
import { Button } from 'bootstrap';
import {useHistory} from "react-router-dom"
function Navbar() {
  const history = useHistory()

  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars style={{color:"white"}} onClick={showSidebar} />
          </Link>
          <ul>
            <span style={{color:'white',fontSize:"38px",marginLeft:"550px",fontFamily:"Brush Script MT",fontWeight:"bold"}}>T.E.A</span>
            <li>
          <Link to='#' >
          <AiIcons.AiOutlineLogout style={{marginLeft: '900px',color:"black"}}onClick={()=>history.push('/')}/>
          <span style={{color:'black'}}>Log Out</span> </Link></li></ul>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' >
              <FaIcons.FaBars style={{fontSize:"20px"}}/> 
              </Link>
              <li style={{color:'White'}}>TOUIHRI EQUIPEMENT AUTO</li>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;