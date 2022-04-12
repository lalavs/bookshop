import React, {useContext} from 'react';
import {observer} from 'mobx-react-lite';

import {Context} from '/Users/lala/Desktop/projects/bookshop/src/index.js';
import BooksItem from '../booksitem/BooksItem';
import './bookslist.scss';

const BooksList = observer(() => {
  const {books} = useContext(Context);

  return (
    <div className='bookslist'>
      {books.items.map((item) =>
        <BooksItem
          key={item.id}
          items={item}>
        </BooksItem>,
      )}
    </div>
  );
});

export default BooksList;
