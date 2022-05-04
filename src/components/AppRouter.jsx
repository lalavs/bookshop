import React, {useContext, useEffect} from 'react';
import {observer} from 'mobx-react-lite';
import {Routes, Route} from 'react-router-dom';

import {Context} from '../index';
import {routes} from '../routes';

const AppRouter = observer(() => {
  const {basket} = useContext(Context);

  const newArr = [...basket.basket];

  useEffect(() => {
    const data = sessionStorage.getItem('basketItemsStorage');

    if (data) {
      basket.setBasket(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    sessionStorage.setItem('basketItemsStorage', JSON.stringify(newArr));
  }, [newArr]);

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
});

export default AppRouter;
