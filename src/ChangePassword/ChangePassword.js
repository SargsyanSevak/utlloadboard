import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Alert, TextField } from '@mui/material';
import auth from '../auth'
import { ContextValue } from '../Context/Context';
import { useContext } from 'react';
import { useState } from 'react';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  outline : 'none',
  borderRadius : '8px',
  p: 4,
  display:'flex',
  justifyContent:'center',
  alignItems : 'center',
  flexDirection : 'column',
  gap : '15px'
};

export default function  ChangePassword() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [changedPassword,setChangedPassword] = useState('')
  const [oldPassword,setOldPassword] = useState('')
  const [block,setBlock] = useState(false)
  const [successAlert,setSuccessAlert] = useState(false)
  const {user} = useContext(ContextValue)
  const {activeUser} = useContext(ContextValue)

  const changepassword = (id, newPassword) => {
    auth
    .put(`/change/${id}`, newPassword)
    window.location.reload();
  };
  return (
    <div>
      <span onClick={handleOpen} className='changepassword' style={{
        'fontSize' : '14px',
        'letterSpacing':'0.5px'
      }}><i className="fa fa-duotone fa-lock"></i>Փոխել գաղտնաբառը</span>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Փոխել գաղտնաբառը
            </Typography>
                <TextField 
                
                id="outlined-basic" 
                label="հին գաղտնաբառը" 
                variant="outlined" 
                size='small' 
                 InputProps={{
                    readOnly: false,
                    error : block
                }}
                onChange={(e)=>{
                  setOldPassword(e.target.value)
              }}
                />
                <TextField 
                
                id="outlined-basic" 
                label="նոր գաղտնաբառը" 
                variant="outlined" 
                size='small'
                InputProps={{
                  readOnly: false,
                  error : block
              }} 
                onChange={(e)=>{
                    setChangedPassword(e.target.value)
                }}/>
                <Button variant='contained'  onClick={(e)=>{
                    e.preventDefault()
                    if(oldPassword === activeUser.password && changedPassword !== ''){
                      changepassword(activeUser._id,{password : changedPassword})
                         setBlock(false)
                         setSuccessAlert(true)
                         setTimeout(()=>{
                            setOpen(false)
                         },3000)
                         
                    }else{
                      setOpen(!false)
                      setBlock(true)
                    }
                  
                }}>պահպանել</Button>
                <Alert 
                severity="success" 
                style={{
                  display : successAlert ? 'flex' : 'none'
                }}
                >Ձեր գաղտնաբառը հաջողությամբ թարմացվել է</Alert>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

