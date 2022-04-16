import React, {useContext, useEffect} from 'react';
import {observer} from 'mobx-react-lite';
import axios from 'axios';

import BookList from '../components/booklist/BookList';
import {Context} from '/Users/lala/Desktop/projects/bookshop/src/index.js';

const ItemList = observer(() => {
  const {books} = useContext(Context);

  const fetchBooks = async () => {
    const response = await axios({
      url: 'http://openlibrary.org/subjects/art.json',
      method: 'get',
    })
    return response.data.works;
  }

  useEffect(() => {
    fetchBooks().then((data) => books.setItems(data))
  }, [books]);

  return (
    <div>
      <BookList />
    </div>
  );
});

export default ItemList;
