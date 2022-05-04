/* eslint-disable max-len */
import React, {useContext, useEffect} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {observer} from 'mobx-react-lite';

import AddAndRemoveBtn from '../button/AddAndRemoveBtn';
import {Context} from '/Users/lala/Desktop/projects/bookshop/src/index.js';
import './BookItem.scss';

const BookItem = observer(({item}) => {
  const {basket} = useContext(Context);

  const isItemInBasket = basket.basket.some((i) => i.key === item.key);

  const handleClick = () => {
    if (isItemInBasket) {
      basket.removeFromBasket(item.key);
    } else {
      basket.addToBasket(item);
    }
  };

  const newArr = [...basket.basket];

  useEffect(() => {
    const data = sessionStorage.getItem('basketItemsStorage');
    if (data) {
      basket.setBasket(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    sessionStorage.setItem('basketItemsStorage', JSON.stringify(basket.basket));
  }, [newArr]);

  return (
    <div>
      <div key={item.key} className='book'>
        <Link to={`${item.key.replace('/works', '')}`}>
          <img
            className='book-img'
            alt=''
            src={`https://covers.openlibrary.org/b/id/${item.cover_id}-M.jpg`}
          />
          <div className='book-title'>{item.title}</div>
        </Link>
        <AddAndRemoveBtn
          isItemInBasket={isItemInBasket}
          handleClick={handleClick}
        />
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
