import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {observer} from 'mobx-react-lite';
import {IoMdAddCircleOutline} from 'react-icons/io';

import './BookItem.scss';
import {Context} from '/Users/lala/Desktop/projects/bookshop/src/index.js';

const BookItem = observer(({item}) => {
  const {basket} = useContext(Context);

  const handleClick = () => {
    basket.addToBasket(item)
  }

  return (
    <div>
      <div key={item.key} className='book'>
        <Link to={`${item.key.replace('/works', '')}`}>
          <img 
            className='book-img' 
            alt='' 
            src={`https://covers.openlibrary.org/b/id/${item.cover_id}-M.jpg`} 
          />
          <div>{item.title}</div>
          </Link>
          <button
            className='book-add'
            onClick={handleClick}
          >
            <IoMdAddCircleOutline className='book-add__icon' />
            <div>1$</div>
            <div>Add to cart</div>
           </button>
        </div>
    </div>
  );
});

BookItem.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string,
  }),
};

export default BookItem;
