import createSagaMiddleware from '@redux-saga/core';
import { Action, configureStore, ThunkAction, combineReducers } from '@reduxjs/toolkit';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import authReducer from 'features/auth/authSlice';
import { historyRouter } from 'utils';
import counterReducer from '../features/counter/counterSlice';
import rootSaga from './rootSaga';

const rootReducer = combineReducers({
  router: connectRouter(historyRouter),
  counter: counterReducer,
  auth: authReducer,
});
const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: rootReducer,
  //Add sagaMiddleware vào Store Redux-Toolkit
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware, routerMiddleware(historyRouter)),
});

// Run sagaMiddleware lấy từ rootSaga
sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
