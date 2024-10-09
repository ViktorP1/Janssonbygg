import React from 'react'
import './Sidebar.css'
import { Link } from 'react-router-dom'
import add_referens from '../Assets/add.png'
import list_product_icon from '../Assets/Product_list_icon.svg'

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <Link to={'/addreferens'} style={{textDecoration:"none"}}>
            <div className="sidebar-item">
                <img src={add_referens} alt="" />
                <p>Lägg till Referens</p>
            </div>
        </Link>
        <Link to={'/listreferens'} style={{textDecoration:"none"}}>
            <div className="sidebar-item">
                <img src={list_product_icon} alt="" />
                <p>Referens Lista</p>
            </div>
        </Link>
        <Link to={'/listoffert'} style={{textDecoration:"none"}}>
            <div className="sidebar-item">
                <img src={list_product_icon} alt="" />
                <p>Offert Lista</p>
            </div>
        </Link>
    </div>
  )
}

export default Sidebar