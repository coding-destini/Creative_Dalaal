
import AdminBar from '../AdminBar'
import AddUserForm from './AddUserModal'
import {  useState } from "react";
import UserList from './UserList'


const Users = () => {
  const [open, setOpen] = useState(false);
  const handleShow = () => {
    setOpen(true);
  };

  return (
    <div className='bg-gray-100' style={{ height:'100vh' }}>
      <AdminBar />
      <div className="flex flex-row max-w-7xl mx-auto mt-11 justify-around px-4 ">
        <div className="w-1/2 ">
          <b>Users</b>
          <p className='text-gray-400' style={{ fontSize: '14px' }}>Home / Account</p>
        </div>
        <div className="w-1/2  flex justify-end items-center">
          <button type='button' className="bg-gray-500 text-white px-2 py-1 lg:text-1xl lg:py-2 lg:px-4 rounded" style={{ backgroundColor: '#1DC894' }}onClick={() => handleShow()}>
            <i class="fa-solid fa-plus"></i> Add User
          </button>
        </div>
      </div>
      <div className='mx-auto max-w-7xl'>
        <UserList/>
      </div>
        <AddUserForm open={open} setOpen={setOpen} />
    </div>
  )
}

export default Users