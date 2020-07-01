import { combineReducers } from '@reduxjs/toolkit';
import userSessionSlice from '../features/login/userSessionSlice';

const rootReducer = combineReducers({ userSessionSlice });

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
