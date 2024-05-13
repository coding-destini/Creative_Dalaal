import React from 'react'
import AdminBar from '../AdminBar'
import UsersChart from './Charts/UsersChart'
import UserStatusChart from './Charts/UserStatusChart'

const Report = () => {
  return (
    <div className='bg-gray-100' style={{ height: '100vh' }}>
      <AdminBar />
      <div className="flex flex-row max-w-7xl mx-auto mt-11 justify-around px-4 ">
        <div className="w-1/2 ">
          <b>Reports</b>
          <p className='text-gray-400' style={{ fontSize: '14px' }}>Home / Reports</p>
        </div>
        <div className="w-1/2  flex justify-end items-center">
          <button type='button' className="bg-gray-500 text-white px-2 py-1 lg:text-1xl lg:py-2 lg:px-4 rounded" style={{ backgroundColor: '#1DC894' }}>
            <i class="fa-solid fa-plus"></i> Add Report
          </button>
        </div>
      </div>
      <div className='mx-auto max-w-7xl'>
        <div className="container mx-auto">
          {/* First Row */}
          <div className="flex flex-wrap mb-4">
            {/* First Chart */}
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <UsersChart/>
            </div>
            {/* Second Chart */}
            <div className="w-full sm:w-1/2 p-4">
              <UserStatusChart/>
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Report