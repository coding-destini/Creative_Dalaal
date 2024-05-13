import React,{useEffect,useState} from 'react'
import PieChartt from './PieChart';
import { useDispatch, useSelector } from 'react-redux';
import { getUsersRequest, getUsersSuccess, getUsersFailure } from '../../../../feature/UserSlicer';

const UsersChart = () => {

  const dispatch = useDispatch();
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

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
  <div className="flex items-center justify-between mb-4">
    <h2 className=" text:2xl lg:text-4xl font-semibold text-gray-800">{users.length}</h2>
  </div>
  <div className="flex items-center justify-between mb-4">
    <h2 className="text-sm  text-gray-400">Total Users</h2>
  </div>
  <div className="flex items-center justify-center">
    <div className="w-64 h-64  rounded-full flex items-center justify-center">
      <span className="text-gray-600 text-lg">
      <PieChartt users={users}/>
      </span>
    </div>
  </div>
</div>

  )
}

export default UsersChart