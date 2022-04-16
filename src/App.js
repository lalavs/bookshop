import React from 'react';
import {BrowserRouter} from 'react-router-dom';

import AppRouter from './components/AppRouter';
import Header from './components/header/Header';
import './styles/Container.scss';

const App = () => {
  // axios.get('http://openlibrary.org/subjects/art.json')
  //     .then((response) => console.log(response.data.works))

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
