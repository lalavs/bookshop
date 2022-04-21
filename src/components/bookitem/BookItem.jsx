import React from 'react';
import PropTypes from 'prop-types';
import {IoMdAddCircleOutline} from 'react-icons/io';

import './BookItem.scss';

const BookItem = ({items}) => {
  return (
    <div>
      <div className='book'>
        <img 
          className='book-img' 
          alt='' 
          src={`https://covers.openlibrary.org/b/id/${items.cover_id}-M.jpg`} 
        />
        <div>{items.title}</div>
      </div>
      <button className='book-add'>
        <IoMdAddCircleOutline className='book-add__icon'/>
        <div>Add to cart</div>
      </button>
    </div>
  );
};

BookItem.propTypes = {
  items: PropTypes.shape({
    title: PropTypes.string,
  }),
};

export default BookItem;
