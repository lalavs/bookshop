import React from 'react';
import PropTypes from 'prop-types';
import {useNavigate} from 'react-router-dom';

import pic from '/Users/lala/Desktop/projects/bookshop/src/images/pic.jpeg';
import './booksitem.scss';

const BooksItem = ({items}) => {
  const navigate = useNavigate();

  return (
    <div>
      <div
        className='item-card'
        onClick={() => navigate('/card' + '/' + items.id)}
      >
        <img className='item-img' src={pic} />
        <div className='item-name'>{items.name}</div>
      </div>
    </div>
  );
};

BooksItem.propTypes = {
  items: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.number,
  }),
};

export default BooksItem;
