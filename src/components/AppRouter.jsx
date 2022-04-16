import React from 'react';
import {Routes, Route} from 'react-router-dom';

import {routes} from '../Routes';

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
    </Routes>
  );
};

export default AppRouter;
