import React from 'react'
import { Outlet } from 'react-router-dom'
import AsideMenu from './Dashboard/AsideMenu'
import PrimarySearchAppBar from './Dashboard/AppBar'
const Layout = () => {
  return (
    <div className='DashBoard'>
       <AsideMenu />
       <PrimarySearchAppBar/>
      <Outlet />
    </div>
  )
}

export default Layout