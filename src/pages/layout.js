import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Layout() {

    return (
        <div className="app p-4">
            <div className='overlay'></div>
            <Outlet />
        </div>
    )
}
