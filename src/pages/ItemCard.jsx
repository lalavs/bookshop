import React, {useState, useEffect} from 'react';
import {useParams, Link} from 'react-router-dom';
import {MdArrowBack} from 'react-icons/md';

import '../styles/pages style/ItemCard.scss';
import '../styles/Loader.scss';

const ItemCard = () => {
  const {key} = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoadind] = useState(false);

  useEffect(() => {
    let rawBook = null;
    setLoadind(true);
    fetch(`https://openlibrary.org/works/${key}.json`)
      .then((res) => res.json())
      .then((data) => {
        setLoadind(false);
        rawBook = data;
        rawBook.description = typeof(rawBook.description) === 'string' ? rawBook.description : rawBook.description.value;
        const promiseArray = data.authors.map(i => fetch(`https://openlibrary.org${i.author.key}.json`));

        return Promise.all(promiseArray);
      })
      .then(responses => Promise.all(responses.map(r => r.json())))
      .then((data) => {
        rawBook.parsedAuthors = data.map(i => i.name);
        setBook(rawBook);
      })
  }, [key]);

  return (
    <div>
      <Link to='/'>
        <MdArrowBack className='nav'/>
      </Link>

      {loading
      ?
      <div className='loader' />
      :
      <>
        {book && (
          <>
            <div className='items-card'>
              <div className='items-visual'>
                <img alt ='' className='items-img' src={`https://covers.openlibrary.org/b/id/${book.covers[0]}-M.jpg`} />
                <div className='items-price'>Price: 1 $</div>
                <button className='items-buybtn'>Add to cart</button>
              </div>
              <div className='items-text'>
                <h2>{book.title}</h2>
                <div>{book.parsedAuthors.map(i => `${i}`)}</div>
                <div className='items-description'>{book.description}</div>
              </div>
            </div>
          </>
        )}
      </>
    }
    </div>
  )
}

export default ItemCard;
