import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './Dashboard'
import Sidebar from './Sidebar'
import Header from './Header'

const AdminPanel = () => {
    return (
        <div className="relative bg-gray-200 min-h-screen">
            <Sidebar />
            <div className="ms-[16rem] relative">
                <Header />
                <div className='p-6'>
                    <div></div>
                    <div className='bg-white p-4 rounded-md'>
                        <Routes>
                            <Route path='dashboard' element={<Dashboard />} ></Route>
                            <Route path='dashboard' element={<Dashboard />} ></Route>
                            <Route path='dashboard' element={<Dashboard />} ></Route>
                        </Routes>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminPanel