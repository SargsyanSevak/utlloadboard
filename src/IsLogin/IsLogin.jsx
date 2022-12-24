import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { ContextValue } from '../Context/Context'

const IsLogin = ({children}) => {
    const {user} = useContext(ContextValue)
    if(!user.id){
        return <Navigate to='/'/>
    }else{
        return children
    }
}

export default IsLogin