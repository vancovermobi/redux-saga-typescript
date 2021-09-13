import { User } from './../../models/user';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface LoginPayload {
    username: string;
    password: string;
}

export interface AuthState {
    isLoggedIn: boolean;
    logging?  : boolean;
    currentUser?: User;
}
const initialState: AuthState = {
    isLoggedIn: false,
    logging  : false,
    currentUser: undefined,
}

const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {

        login(state, action: PayloadAction<LoginPayload>){
            state.logging = true;
        },
        loginSuccess(state, action: PayloadAction<User>){
            state.isLoggedIn = true;
            state.logging = false;
            state.currentUser = action.payload;
        },
        loginFailed(state, action: PayloadAction<string>){
            state.logging = false ;
        },

        logout(state){
            state.isLoggedIn = false;
            state.currentUser = undefined ;
        },
    },
});

// export Action
export const authActions = authSlice.actions;

// export Selector
export const selectorIsLoggedIn =(state: any) => state.auth.isLoggedIn;
export const selectorIsLoggin   =(state: any) => state.auth.loggin;

// export Reducer
const authReducer = authSlice.reducer;
export default authReducer ;


