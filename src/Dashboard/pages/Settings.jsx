import { Alert, Button,InputAdornment, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useContext } from 'react'
import { ContextValue } from '../../Context/Context'
import VisibilityIcon from '@mui/icons-material/Visibility';
import Stack from '@mui/material/Stack';
import auth from '../../auth'
import useMediaQuery from '@mui/material/useMediaQuery';
const Settings = () => {
  const matches = useMediaQuery('(max-width:780px)');
  const {activeUser} = useContext(ContextValue)
  const [visible,setVisible] = useState(false)
  const [visiblePass,setVisiblePass] = useState(false)
  const [changedPassword,setChangedPassword] = useState('')
  const [success,setSuccess] = useState(false)
  const changepassword = (id, newPassword) => {
     auth
    .put(`/update/${id}`, newPassword)
  };
  return (
    <>
       <div className='settings'>
          <h1>Անձնական տվյալներ</h1>
      <div className='settings-item'>
      <TextField
          size='small'
          disabled
          id="fullname-field"
          label="Անուն / Ազգանուն"
          value={activeUser[0].name}
          style={{
            width : '100%',
          }}
        />
      <TextField
          size='small'
          disabled
          id="username-field"
          label="Մուտքանուն"
          value={activeUser[0].username}
          style={{
            width : '100%',
          }}
        />
      <TextField
          size='small'
          disabled
          id="email-field"
          label="Էլ-հասցե"
          value={activeUser[0].email}
          style={{
            width : '100%',
          }}
        />
      <TextField
          size='small'
          disabled
          id="tell-field"
          label="Հեռախոսահամար"
          value={activeUser[0].tell}
          style={{
            width : '100%',
          }}
        />
      <TextField
          size='small'
          type= {visiblePass ? 'text' : 'password'}
          id="pass-field"
          label="Գաղտնաբառ"
          value={activeUser[0].password}
          style={{
            width : matches ? '100%' : '40%'
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position='end'>
                <VisibilityIcon cursor='pointer' onClick={()=>{
                  setVisiblePass(!visiblePass)
                }}/>
              </InputAdornment>
            ),
          }}
        />
      <TextField
          type= {visible ? 'text' : 'password'}
          size='small'
          id="newPass-field"
          label="Նոր գաղտնաբառ"
          value={changedPassword}
          style={{
            width :  matches ? '100%' : '40%'
          }}
          onChange={(e)=>{
            setChangedPassword(e.target.value)
        }}
          InputProps={{
            endAdornment: (
              <InputAdornment position='end'>
                <VisibilityIcon cursor='pointer' onClick={()=>{
                  setVisible(!visible)
                }}
                />
              </InputAdornment>
            ),
          }}
        />
         <Button variant='outlined' 
          
         onClick={(e)=>{
              e.preventDefault()
              if(changedPassword !== '' && changedPassword.length >=8){
                changepassword(activeUser[0]._id,{password : changedPassword})
                setSuccess(!success)
                setTimeout(()=>{
                  setSuccess(false)
                },4000)
                 }
            }}>Պահպանել</Button>
             <Stack sx={{ width: '100%' }} spacing={2}>
              <Alert
                style={{
                  display : success ? 'flex' : 'none'
              }}
              >Ձեր գաղտնաբառը հաջողությամբ թարմացվել է</Alert>
           </Stack>
      </div>
      
    </div>
    </>
   
  )
}

export default Settings