

import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from './slice/userSlice';


const rootReducer = combineReducers({
    users: userReducer,
    
});

const setupStore = () => configureStore({
    reducer: rootReducer
});

export default setupStore;
