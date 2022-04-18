import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import axios from 'axios';

import AppRouter from './components/AppRouter';
import Header from './components/header/Header';
import './styles/Container.scss';

const App = () => {
  // axios.get('https://openlibrary.org/works/OL45883W.json')
  //     .then((response) => console.log(response.data.authors[0].author.key.replace('/authors', '')))

    // axios.get('https://openlibrary.org/works/OL45883W.json')
    //   .then((response) => console.log(response))
  
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
