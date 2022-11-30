import React from 'react'
import { useState } from 'react'
import {Link,NavLink} from 'react-router-dom'
import './navbar.css'
import {links} from "../data"
import logo from '../images/logo.jpg'
import {GoThreeBars} from "react-icons/go"
import {MdOutlineClose} from "react-icons/md"
function Navbar() {
    const[cnt,setCnt] = useState(false);
  return (
    <nav>
        <div className="container nav__container">
            <Link to="/" className='logo' onClick={()=> setCnt(false)}>
             
                <img src={logo} alt=""/>
               
            </Link>
            <ul className={`nav__links ${cnt? 'show__nav' : 'hide__nav'}`}
>{
                links.map(({name,path},index) =>{
                    return (
                        <li key={index}>
                        <NavLink to ={path} className={({isActive}) => isActive ? 'active_nav': '' }
                        onClick={()=> setCnt(prev=> !prev)}>{name}</NavLink>
                        </li>
                    )
                })
            }
            </ul>
            <button className="button__nav" onClick={()=> setCnt(prev=> !prev)} >
                {
                    cnt?<MdOutlineClose/> :  <GoThreeBars/>
                }
           
            </button>
        </div>
    </nav>
  )
}

export default Navbar