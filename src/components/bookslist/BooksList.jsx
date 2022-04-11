import React, {useContext} from 'react';
import {observer} from 'mobx-react-lite';

import {Context} from '/Users/lala/Desktop/projects/bookshop/src/index.js';
import './bookslist.scss';

const BooksList = observer(() => {
  const {books} = useContext(Context);

  return (
    <div className='bookslist'>
      {books.items.map((item) =>
        <div
          className='bookslist-item'
          key={item.id}>
          {item.name}
        </div>,
      )}
    </div>
  );
});

export default BooksList;
