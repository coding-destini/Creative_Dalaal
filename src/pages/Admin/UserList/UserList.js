import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsersRequest, getUsersSuccess, getUsersFailure } from '../../../feature/UserSlicer';

const UserList = () => {
  const dispatch = useDispatch();

  // Getting userlist
  useEffect(() => {
    dispatch(getUsersRequest());
    try {
      const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
      dispatch(getUsersSuccess(storedUsers));
    } catch (error) {
      dispatch(getUsersFailure(error.message));
    }
  }, [dispatch]);

  // Retrieve users from Redux store
  const users = useSelector(state => state.user.users);

  // Dynamic buttons according to status
  const getButtonStatus = (status) => {
    switch (status) {
      case 'In Progress':
        return 'text-blue-500 hover:text-white border border-blue-500 hover:bg-blue-500';
      case 'Approved':
        return 'text-green-500 hover:text-white border border-green-500 hover:bg-green-500';
      case 'Declined':
        return 'text-red-500 hover:text-white border border-red-700 hover:bg-red-500';
      default:
        return '';
    }
  };

  return (
    <div>
      {users.length === 0 ? (
        <div className='flex justify-center items-center h-screen text-3xl'>No user Found</div>
      ) : (
        <div className="relative overflow-x-auto shadow-xl rounded-xl mt-10">
          <table className="w-full text-sm text-left rtl:text-right">
            <thead className="text-xs uppercase text-gray-400 bg-white" style={{ fontSize: '13px' }}>
              <tr>
                <th scope="col" className="px-6 py-3">
                  NAME & EMAIL
                </th>
                <th scope="col" className="px-6 py-3">
                  JOIN DATE
                </th>
                <th scope="col" className="px-6 py-3">
                  EARNINGS
                </th>
                <th scope="col" className="px-6 py-3">
                  STATUS
                </th>
                <th scope="col" className="px-6 py-3">
                  DETAILS
                </th>
              </tr>
            </thead>
            <tbody>
              {users.map(userObj => (
                <tr key={userObj.id} className="bg-white border-b dark:border-gray-300">
                  <td className="px-6 py-4 font-semibold text-gray-900 whitespace-nowrap">
                    {userObj.name} <br />
                    <span className="text-gray-400" style={{ fontSize: '14px', fontWeight: '100' }}>{userObj.email}</span>
                  </td>
                  <td className="px-6 py-4">{userObj.joinDate}</td>
                  <td className="px-6 py-4">${userObj.earnings}</td>
                  <td>
                    <button
                      type="button"
                      className={`text-sm px-4 py-2 rounded-lg focus:outline-none ${getButtonStatus(userObj.status)}`}
                    >
                      <b> {userObj.status}</b>
                    </button>
                  </td>
                  <td className="px-6 py-4">
                    <button type="button" className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-semibold rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 ">Edit</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default UserList;
