import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';

import {routes} from '../routes';

const AppRouter = () => {
  return (
    <Routes>
      {routes.map((route) => {
        const Component = route.component;
        return <Route
          element={<Component />}
          path={route.path}
          key={route.id}
          exact={route.exact}
        />;
      })
      }
      <Route
        path='*'
        element={<Navigate to='/list' />}
      />
    </Routes>
  );
};

export default AppRouter;
