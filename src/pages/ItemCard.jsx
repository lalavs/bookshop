import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';

import '../styles/pages style/ItemCard.scss';

const ItemCard = () => {
  const {key} = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    fetch(`https://openlibrary.org/works/${key}.json`)
      .then((res) => res.json())
      .then((data) => setBook(data))
  }, [key]);

  return (
    <div>
      {book && (
        <>
          <div className='items-card'>
            <div className='items-visual'>
              <img alt ='' src={`https://covers.openlibrary.org/b/id/` + book.covers[0] + '-M.jpg'} />
              <div className='items-price'>Price: 1 $</div>
              <button className='items-buybtn'>Add to cart</button>
            </div>
            <div className='items-text'>
              <h2>{book.title}</h2>
              <div className='items-description'>{book.description}</div>
              <div></div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default ItemCard;
