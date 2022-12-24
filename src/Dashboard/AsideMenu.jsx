import React from 'react'
import { useContext } from 'react';
import {Link, useNavigate} from 'react-router-dom'
import { ContextValue } from '../Context/Context';


const AsideMenu = () => {

 const {isActive} = useContext(ContextValue)
let navigate = useNavigate()
  let userName = localStorage.getItem('userName')

  return (
      <div  className='wrapper'>
        <div className={isActive ? 'closeSidebar' : "sidebar" }>
        <Link to='/loadboard'><span className="go-home"><i className="fa-solid fa-circle-arrow-left"></i></span></Link>
            <div className="profile">
            <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="profile_picture"/>
                <h3>{userName}</h3>
            </div>
            <ul className='navItems'>
                <li>
                    <Link to='/dashboard'>
                        <span className="icon"><i className="fas fa-home"></i></span>
                        <span className="item">Գլխավոր</span>
                    </Link>
                </li>
                <li>
                    <Link to='/dashboard/addloads'>
                        <span className="icon"><i className="fa-solid fa-plus"></i></span>
                        <span className="item">Ավելացնել բեռներ</span>
                    </Link>
                </li>

                <li>
                    <Link to='/dashboard/changeloads'>
                        <span className="icon"><i className="fa-solid fa-pencil"></i></span>
                        <span className="item">Փոփոխել բեռները</span>
                    </Link>
                </li>

                <li>
                    <Link to='/dashboard/settings'>
                        <span className="icon"><i className="fas fa-cog"></i></span>
                        <span className="item">Կարգավորումներ</span>
                    </Link>
                </li>
             </ul>
                </div>
                 
            </div>
  )
}

export default AsideMenu