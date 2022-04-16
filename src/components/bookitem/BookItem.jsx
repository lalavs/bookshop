import React from 'react';
import PropTypes from 'prop-types';

import './BookItem.scss';

const BookItem = ({items}) => {
  return (
    <div className='book'>
      <img 
        className='book-img' 
        alt='' 
        src={`https://covers.openlibrary.org/b/id/` + items.cover_id + '-M.jpg'} 
      />
      <div>{items.title}</div>
    </div>
  );
};

BookItem.propTypes = {
  items: PropTypes.shape({
    title: PropTypes.string,
  }),
};

export default BookItem;
