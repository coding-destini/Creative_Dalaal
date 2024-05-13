import { configureStore } from '@reduxjs/toolkit';
import userSlice from './feature/UserSlicer';

export default configureStore({
  reducer: {
    user: userSlice
  },
});
