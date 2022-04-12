import React from 'react';

import pic from '/Users/lala/Desktop/projects/bookshop/src/images/pic.jpeg';
import '../styles/pages style/itemscard.scss';

const ItemsCard = () => {
  const book = {id: 1, name: 'Alice', author: 'Emma McLaughlin', price: 1,
    description: `Young White House intern Jamie McAllister
    is drawn into an affair with President Gregory Rutland
    and soon finds herself, and everyone she cares about,
    facing calculated public destruction at the hands of Greg's
    political enemies, and--perhaps no matter how much he cares
    about her--at the hands of Greg himself.`};

  return (
    <div className='items-card'>
      <div className='items-visual'>
        <img src={pic} />
        <div className='items-price'>Price: {book.price} $</div>
        <button className='items-buybtn'>Add to cart</button>
      </div>
      <div className='items-text'>
        <h2>{book.name}</h2>
        <div className='items-author'>By {book.author}</div>
        <div className='items-description'>{book.description}</div>
      </div>
    </div>
  );
};

export default ItemsCard;
