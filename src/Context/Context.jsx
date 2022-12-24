import React, { useState } from 'react'
export const ContextValue = React.createContext()

const Context = (props) => {
const [isActive, setIsActive] = useState(true);
const [data,setData] = useState([])
const [user,setUser] = useState([])
const [filteredObj,setFilteredObj] = useState([])
const [activeUser,setActiveUser] = useState([{
  name : '',
  username : '',
  email : '',
  tell : '',
  password : ''
}])

  return (
   <ContextValue.Provider value={{
    data,
    setData,
    filteredObj,
    setFilteredObj,
    user,
    setUser,
    isActive,
    setIsActive,
    activeUser,
    setActiveUser
   }}>
    {
    props.children
    }
   </ContextValue.Provider>
   
  )
}

export default Context