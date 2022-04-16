import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import {observer} from 'mobx-react-lite';

import {Context} from '/Users/lala/Desktop/projects/bookshop/src/index.js';
import BookItem from '../bookitem/BookItem';
import './BookList.scss';

const BookList = observer(() => {
  const {books} = useContext(Context);

  return (
    <div className='BookList'>
      {books.items.map((item) => 
      <Link key={item.key} to={`${item.key.replace('/works', '')}`}>
        <BookItem
          key={item.key}
          items={item}
        />
      </Link>
      )}
    </div>
  );
});

export default BookList;
