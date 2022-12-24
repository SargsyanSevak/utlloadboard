import React, { useContext } from 'react'
import { ContextValue } from '../Context/Context'
import LoadItem from '../LoadItem/LoadItem'
import "./LoadList.css"


const LoadList = ({loads}) => {

  const {filteredObj} = useContext(ContextValue)
  
  return (
    <div className='LoadList'>
    {
    filteredObj.length !== 0 ? (
      filteredObj.map((el,index)=> <LoadItem key={index} {...el} />)) :
        loads.map((el,index)=> <LoadItem key={index} {...el} />)
    }
    </div>
  )
}

export default LoadList