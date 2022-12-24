import React, { useContext } from 'react'
import './RegisterPage.css'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import auth from '../auth'
import { ContextValue } from '../Context/Context';
import { useState } from 'react';
import { Alert } from '@mui/material';


const RegisterPage = () => {
const [validUser,setValidUser] = useState('')
const [isValid,setIsValid] = useState(true)
const [isSuccess,setIsSuccess] = useState(false)
const {user} = useContext(ContextValue)
const validUserName = user.filter((userObj => userObj.username === validUser)).length
let navigate = useNavigate()
 const {register,handleSubmit,reset} = useForm({
        mode : "onChange",
      })
      

    function onSubmit(data){
      if(validUserName > 0){
        setIsValid(false)
      }else{
         setIsSuccess(true)
         setIsValid(!isValid)
        setTimeout(()=>{
            auth
      .post("/register", data)
      .then(() =>{
        reset()
        navigate('/')
      })
      .catch((err) => console.log(err));
        },3000)
       
      }
     
    }

  return (
  <div className='Register'>
    <Alert severity="warning" variant='filled' style={{
             position: 'absolute',
              top : '50px',
              left :'auto',
              right :'10px',
              bottom :'auto',
             display : isValid ? 'none' : 'flex'
          }} 
          >Այս մուտքանունը օգտագործվում է այլ հաճախորդի կողմից։Խնդրում ենք նշել այլ տարբերակ</Alert>
          <Alert severity="success" variant='filled' style={{
             position: 'absolute',
              top : '50px',
              left :'auto',
              right :'10px',
              bottom :'auto',
             display : isSuccess ? 'flex' : 'none'
          }} 
          >Դուք հաջողությամբ գրանցվեցիք մեր կայքում</Alert>
  <div className="container">
    <div className="title">Գրանցում</div>
    <div className="register-content">
      <form  onSubmit={handleSubmit(onSubmit)}>
        <div className="user-details">
          <div className="input-box">
            <input type="text" placeholder="Անուն/ազգանուն" required {...register("name")}  minLength='3'/>
          </div>
          <div className="input-box">
            <input 
            type="text" 
            placeholder="Մուտքանուն" 
            required 
            {...register("username")}  
            minLength='6'
            onChange={(e)=>{
              setValidUser(e.target.value)
            }}
            />
          </div>

          <div className="input-box">
            <input type="email" placeholder="Էլ-հասցե" required {...register("email")}/>
          </div>

          <div className="input-box">
            <input type="text" placeholder="Հեռախոսահամար" required {...register("tell")} minLength='8'/>
          </div>

          <div className="input-box">
            <input type="password" placeholder="Գաղտնաբառ" required {...register("password")} minLength='8'/>
          </div>

          <div className="input-box">
            <input type="password" placeholder="Կրկնել գաղտնաբառը" required {...register("password")}/>
          </div>
        </div>
       
        <div className="button">
          <input type="submit" value="Գրանցվել" onSubmit={()=>{reset()}}/>
        </div>
      </form>
    </div>
  </div>
  </div>
  )
}

export default RegisterPage