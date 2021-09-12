import cityAPI from 'api/cityAPI';
import { NotFound, PrivateRoute } from 'components/Common';
import { AdminLayout } from 'components/Layout';
import LoginPage from 'features/auth/pages/LoginPage';
import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router';

function App() {
  useEffect(() => {
    cityAPI.getAll().then((res) => console.log('Cities: ', res));
    // studentAPI.getAll().then((res)=> console.log('Students: ' , res));
  });
  return (
    <div>
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
