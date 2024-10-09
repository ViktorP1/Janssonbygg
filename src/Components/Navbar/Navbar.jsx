import React, { useRef, useState } from 'react'
import './Navbar.css'
/*import logo from '../Assets/logo1.png'    Logga till JBR*/ 
import { Link } from 'react-router-dom';
import nav_dropdown from '../Assets/nav_dropdown.png'

const Navbar = () => {

    const [menu,setMenu] = useState("");
    const menuRef = useRef();
    const dropdownRef = useRef();

    const dropdown_toggle = (e) =>{
        menuRef.current.classList.toggle('nav-menu-visible');
        e.target.classList.toggle('open');
    }

    const handleMenuItemClick = () => {
        // Remove the 'nav-menu-visible' class to close the menu
        menuRef.current.classList.remove('nav-menu-visible');
        dropdownRef.current.classList.remove('open'); // Close the icon as well
      };

  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <Link style={{ textDecoration: 'none' }} to='/'>
          <p>Jansson Bygg & Rör AB</p>
        </Link>
      </div>
      <img
        ref={dropdownRef}
        className='nav-dropdown'
        onClick={dropdown_toggle}
        src={nav_dropdown}
        alt=''
      />
      <ul ref={menuRef} className='nav-menu'>
        <li onClick={() => { setMenu('start'); handleMenuItemClick(); }}>
          <Link style={{ textDecoration: 'none' }} to='/'>
            Start
          </Link>
        </li>
        <li onClick={() => { setMenu('referenser'); handleMenuItemClick(); }}>
          <Link style={{ textDecoration: 'none' }} to='/referenser'>
            Referenser
          </Link>
        </li>
        <li onClick={() => { setMenu('offert'); handleMenuItemClick(); }}>
          <Link style={{ textDecoration: 'none' }} to='/offert'>
            Kontakta oss
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar