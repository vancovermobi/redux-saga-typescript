import { Button } from '@material-ui/core';
import cityAPI from 'api/cityAPI';
import { useAppDispatch } from 'app/hooks';
import { NotFound, PrivateRoute } from 'components/Common';
import { AdminLayout } from 'components/Layout';
import { authActions } from 'features/auth/authSlice';
import LoginPage from 'features/auth/pages/LoginPage';
import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router';

function App() {
  const dispatch = useAppDispatch();
  // useEffect(() => {
  //   cityAPI.getAll().then((res) => console.log('Cities: ', res));
  //   // studentAPI.getAll().then((res)=> console.log('Students: ' , res));
  // });
  return (   
    <div>
      {/* <Button
        variant="contained"
        color="secondary"
        onClick={() => dispatch(authActions.logout()) }
      >LogOut</Button> */}
      <Switch>
        <Route path="/login">
          {/* LOGIN PAGE */}
          <LoginPage />
        </Route>

        {/* <Route path='/admin'>
          <AdminLayout />
        </Route> */}
        <PrivateRoute path="/admin">
          <AdminLayout />
        </PrivateRoute>

        <Route>
          {/* NOTFOUND PAGE */}
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
