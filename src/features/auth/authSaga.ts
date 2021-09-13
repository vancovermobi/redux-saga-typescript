import { call, delay, put } from '@redux-saga/core/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { push } from 'connected-react-router';
import { fork, take } from 'redux-saga/effects';
import { authActions, LoginPayload } from './authSlice';

function* handleLogin(payload: LoginPayload) {
  try {
    yield delay(1000); // call API user
    localStorage.setItem('access_token', 'user/password');
    yield put(
      authActions.loginSuccess({
        id: 1,
        name: 'liem',
      })
    );

    // redirect to admin page
    yield put(push('/admin'));

    console.log('Handle login: ', payload);
  } catch (error) {
    yield put(authActions.loginFailed('Error'));
  }
}

function* handleLogout() {
  yield delay(500);
  localStorage.removeItem('access_token');

  // redirect to login page
  yield put(push('/login'));

  console.log('Handle logout');
}

function* watchLoginFlow() {
  while (true) {
    // console.log('watch login');
    const isLoggedIn = Boolean(localStorage.getItem('access_token'));
    if (!isLoggedIn) {
      const action: PayloadAction<LoginPayload> = yield take(authActions.login.type);
      yield fork(handleLogin, action.payload);
    }
    yield take(authActions.logout.type);
    yield call(handleLogout); // đợi xử lý xong hàm logout xong rồi mới watch login
  }
}
export default function* authSaga() {
  console.log('Auth Saga');
  yield fork(watchLoginFlow);
}
