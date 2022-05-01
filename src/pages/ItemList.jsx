import React, {useContext, useEffect, useState} from 'react';
import {observer} from 'mobx-react-lite';

import BookList from '../components/booklist/BookList';
import {Context} from '/Users/lala/Desktop/projects/bookshop/src/index.js';
import '../styles/Loader.scss';

const ItemList = observer(() => {
  const {books} = useContext(Context);
  const [loading, setLoadind] = useState(false);

  useEffect(() => {
    setLoadind(true);
    fetch('http://openlibrary.org/subjects/romance.json')
        .then((res) => res.json())
        .then((data) => {
          setLoadind(false);
          return data.works;
        })
        .then((responses) => {
          books.setItems(responses);
        });
  }, [books]);

  return (
    <div>
      {loading ?
      <div className='loader' /> :
      <BookList />
      }
    </div>
  );
});

export default ItemList;
