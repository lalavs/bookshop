import React from 'react';

import BooksList from '../components/bookslist/BooksList';
import NavBar from '../components/navbar/NavBar';
import '../styles/pages style/itemslist.scss';

const ItemsList = () => {
  return (
    <div className='itemslist'>
      <NavBar />
      <BooksList />
    </div>
  );
};

export default ItemsList;
