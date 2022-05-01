import React, {useContext} from 'react';
import {observer} from 'mobx-react-lite';

import {Context} from '/Users/lala/Desktop/projects/bookshop/src/index.js';
import BookItem from '../bookitem/BookItem';
import './BookList.scss';

const BookList = observer(() => {
  const {books} = useContext(Context);

  return (
    <div className='book-list'>
      {books.items.map((item) =>
        <div key={item.key}>
          <BookItem
            item={item}
          />
        </div>,
      )}
    </div>
  );
});

export default BookList;
