import React, {useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Profile.css'
import ChangePassword from '../ChangePassword/ChangePassword'
const Profile = () => {

  const [show,setShow] = useState(false)
  let navigate = useNavigate()
  let userName = localStorage.getItem('userName')
  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };
  return (
    <div className='profile_section'>
      <span className='profile-name' onClick={()=>{
       setShow(!show)
      }}><i className="fa-solid fa-user"></i><i className="fa-sharp fa-solid fa-caret-down"></i></span>
      <div className={show ? 'profile-items' : 'show'}>
        <ul>
          <li onClick={()=>{
            openInNewTab('/dashboard')
             }}><i className="fa fa-solid fa-user"></i>Պրոֆիլ {userName}<hr className="new4"></hr></li>
          <li><ChangePassword/><hr className="new4"></hr></li>
          <li onClick={()=>{
            navigate('/login')
            localStorage.removeItem('logged')
            }}><i className="fa fa-duotone fa-right-from-bracket"></i>Դուրս գալ <hr className="new4"></hr></li>
          </ul>
      </div>
    </div>
    
  )
  
}

export default Profile