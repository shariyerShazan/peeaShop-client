import React from 'react'
import { Outlet } from 'react-router'

const MainLayout = () => {
  return (
    <div>
         layout 
         <Outlet />
    </div>
  )
}

export default MainLayout
