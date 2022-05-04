import React from 'react';
import {BrowserRouter} from 'react-router-dom';

import AppRouter from './components/AppRouter';
import Header from './components/header/Header';
import './styles/Сontainer.scss';

const App = () => {
  return (
    <BrowserRouter>
      <div className='container'>
        <Header />
        <AppRouter />
      </div>
    </BrowserRouter>
  );
};

export default App;
