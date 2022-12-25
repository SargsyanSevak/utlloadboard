import React from 'react'
import ContactInfo from '../ContactInfo/ContactInfo'
import Profile from '../Profile/Profile';
import './Header.css'

const Header = () => {
 
  return (
        <div className='Header'>
            <div className='logo'><img src="https://unitedtrade.am/public/image/logo.png" alt="" /></div>
           <ContactInfo />
           <Profile />
        </div>
        )
      }

export default Header