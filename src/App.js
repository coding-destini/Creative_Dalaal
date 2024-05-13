import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux'; 
import { setLogin,clearLogIn } from './feature/UserSlicer';
import { auth } from './context/firebaseConfig';
import { Toaster } from 'react-hot-toast';
import Home from './pages/Home'
import PageNotFound from './pages/404/PageNotFound';
import Register from './pages/Auth/Register';
import Login from './pages/Auth/Login';
import Report from './pages/Admin/Reports/Report';
import Users from './pages/Admin/UserList/Users';

const App = () => {
  const dispatch = useDispatch(); 

  const [authResolved, setAuthResolved] = useState(false);

  // Get logged-in user data from Redux store
  const loggedInUser = useSelector(state => state.user.loggedInUser);

  //checking auth
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      if (user) {
        // Dispatch action to set logged-in user data
        dispatch(setLogin(user));
      } else {
        // Dispatch action to clear logged-in user data
        dispatch(clearLogIn());
      }
      setAuthResolved(true);
    });

    return () => {
      unsubscribe();
    };
  }, [dispatch]); // Add dispatch to the dependency array

  if (!authResolved) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-20 w-20 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  return (
    <BrowserRouter>
      <Toaster />
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/reports"
          element={loggedInUser ? <Report /> : <Navigate to="/login" replace />}
        />
        <Route
          path="/users"
          element={loggedInUser ? <Users /> : <Navigate to="/login" replace />}
        />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
