import React from 'react'
import { useContext } from 'react'
import { ContextValue } from '../../Context/Context'
import instance from '../../axios'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';




const ChangeLoads = () => {
  const {data} = useContext(ContextValue)
  let userName = localStorage.getItem('userName')
  const allUserLoads = data.filter(function(el){
    return el.owner === userName
  })

  const deletePost = (id) => {
    instance
    .delete(`/delete/${id}`) 
    window.location.reload();
  };

  const changeStatus = (id, statusObj) => {
    instance
    .put(`/update/${id}`, statusObj)
    window.location.reload();
  };
  return (
    <div className="UserLoads">
      {
        !allUserLoads.length ? <h4 style={{
          display:'flex',
          justifyContent:'center',
          alignItems : 'center'
        }}>Դուք դեռ բեռներ չունեք</h4> :
        allUserLoads.map((el,i)=>{
          return (
            <div className='userLoad' key={i}>
              <ul>
                <li className='pickup'>{el.pickup}</li>
                <li className={`arrow`}><i className="fa fa-duotone fa-arrow-right"></i></li>
                <li className='delivery'>{el.delivery}</li>
                <li className='trucktype'>{el.trucktype}</li>
                <li className='weight'>{el.weight}տ</li>
                <li className='price'>${el.price}</li>
                <li className='date'>{el.date}</li>
                <Box sx={{ minWidth: 120 }}>
                  <FormControl fullWidth  onChange={(e)=>{
                    changeStatus(el._id,{status: e.target.value})
                }}>
                    <InputLabel variant="standard" htmlFor="uncontrolled-native">
                      Կարգավիճակ
                    </InputLabel>
                    <NativeSelect
                      inputProps={{
                        name: 'status',
                        id: 'uncontrolled-native',
                      }}
                    >
                      <option value='approved'></option>
                      <option value='approved'>Հաստատված</option>
                      <option value='onroad'>Ճանապարհին</option>
                      <option value='delivered'>Բեռնաթափված</option>
                      <option value='canceled'>Չեղարկված</option>
                    </NativeSelect>
                  </FormControl>
    </Box>
                <span onClick={() => deletePost(el._id)}><i className="fa-solid fa-trash"></i></span>
              </ul>
            </div>
          )
        })
      }
  </div>
  )
}

export default ChangeLoads