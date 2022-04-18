import React, {useContext, useEffect, useState} from 'react';
import {observer} from 'mobx-react-lite';
import axios from 'axios';

import BookList from '../components/booklist/BookList';
import {Context} from '/Users/lala/Desktop/projects/bookshop/src/index.js';

const ItemList = observer(() => {
  const {books} = useContext(Context);
  const [loading, setLoadind] = useState(false);

  const fetchBooks = async () => {
    try {
      setLoadind(true);
      const response = await axios({
        url: 'http://openlibrary.org/subjects/romance.json',
        method: 'get',
      })
      setLoadind(false);
      return response.data.works;
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchBooks().then((data) => books.setItems(data))
  }, [books]);

  return (
    <div>
      {loading
      ? <h1>Loading...</h1>
      : <BookList />
      }
    </div>
  );
});

export default ItemList;
