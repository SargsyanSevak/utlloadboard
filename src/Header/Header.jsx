import React from 'react'
import ContactInfo from '../ContactInfo/ContactInfo'
import Profile from '../Profile/Profile';
import './Header.css'
import ChangePassword from '../ChangePassword/ChangePassword';
const Header = ({loads,setLoads}) => {
 
  return (
        <div className='Header'>
            <div className='logo'><img src="https://unitedtrade.am/public/image/logo.png" alt="" /></div>
           <ContactInfo />
           <Profile />
            </div>
  )
}

export default Header