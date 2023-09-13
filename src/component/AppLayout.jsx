import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const AppLayout = () => {
  return (
    <>
        <div className='flex justify-between m-11'>
            <div className='bg-darkButton text-white p-6 rounded-3xl cursor-pointer'>
                <Link to= '/createEmployee'>Create Employee</Link>
            </div>
            <div className='bg-darkButton text-white p-6 rounded-3xl cursor-pointer'>
                <Link to = '/viewEmployee'>View All employee</Link>
            </div>
            <div className='bg-darkButton text-white p-6 rounded-3xl cursor-pointer'>
                <Link to='/dropdowns'>Dropdowns</Link>
            </div>
        </div>
        <Outlet />
    </>
    
  )
}

export default AppLayout
