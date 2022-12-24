import { Box, Button, Stack } from '@mui/material'
import { useForm } from 'react-hook-form'
import instance from '../../axios'

const AddLoads = () => {
  let userName = localStorage.getItem('userName')
  const {register,handleSubmit,reset} = useForm({
    mode : "onChange",
  })

function onSubmit(data){
  instance
  .post("/create", data)
  .then(() => reset())
  .catch((err) => console.log(err));
  }

  return (
    <div className='content Myloads'>
      <div className="addNewLoad">
        <h3 className='heading'>Ավելացնել նոր բեռ</h3>
      <form onSubmit={handleSubmit(onSubmit)} >
        <div className="inputBox">
            <input type="text"  placeholder='Բարձման օր' {...register("date")} required/>
            </div>
            <div className="inputBox">
            <input type="text" placeholder='Տ/Մ տեսակ' {...register("trucktype")} required/>
            </div>
            <div className="inputBox">
            <input type="text" placeholder='Բարձում' {...register("pickup")} required/>
            </div>
            <div className="inputBox">
            <input type="text" placeholder='Բեռնաթափում' {...register("delivery")} required/>
            </div>
            <div className="inputBox">
            <input type="text" placeholder='Ընկերություն' {...register("company")} required/>
            </div>
            <div className="inputBox">
            <input type="text" placeholder='Քաշ' {...register("weight")} required/>
            </div>
            <div className="inputBox">
            <input type="text" placeholder='Հեռախոսահամար' {...register("tel")} required/>
            </div>
            <div className="inputBox">
            <input type="email" placeholder='Էլ հասցե' {...register("email")} required/>
            </div>
            <div className="inputBox">
            <input type="text" placeholder='Գին' {...register("price")} required/>
            </div>
            <div className="inputBox">
            <input type="number" placeholder='CMR-քանակ' {...register("cmrCount")} required/>
            </div>
            <div className="inputBox text">
            <input type="text" placeholder='Հատուկ նշումներ' {...register("specialNotes")} required/>
            </div>
            <div className="inputBox text">
            <input type="text" placeholder='Մեկնաբանություն 1' {...register("comment1")} required/>
            </div>
            <div className="inputBox text">
            <input type="text" placeholder='Մեկնաբանություն 2' {...register("comment2")} required/>
            </div>
            <div className="hidden">
            <input type="text" value={userName} {...register("owner")} style={{visibility:'hidden'}}/>
            </div>
            <div className="hidden">
            <input type="text" value={userName} {...register("owner")} style={{visibility:'hidden'}}/>
            </div>
            <Stack direction='row' spacing={8} mt={5}>
            <Button variant="contained" size='large'onClick={handleSubmit(onSubmit)}>Ավելացնել</Button>
            <Button variant='contained' size='large'
            style={{
              backgroundColor : 'red'
            }}
             onClick={()=>reset()} > Մաքրել
             </Button>
            </Stack>
        </form>
      </div>
    </div>
  )
}

export default AddLoads