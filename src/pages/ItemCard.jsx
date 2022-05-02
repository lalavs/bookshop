import React, {useState, useEffect, useContext} from 'react';
import {observer} from 'mobx-react-lite';
import {useParams, Link} from 'react-router-dom';
import {MdArrowBack} from 'react-icons/md';

import AddAndRemoveBtn from '../components/button/AddAndRemoveBtn';
import {Context} from '/Users/lala/Desktop/projects/bookshop/src/index.js';
import '../styles/pages style/ItemCard.scss';
import '../styles/Loader.scss';

const ItemCard = observer(() => {
  const {key} = useParams();
  const {basket} = useContext(Context);
  const [book, setBook] = useState(null);
  const [loading, setLoadind] = useState(false);

  const isItemInBasket = basket.basket.some((i) => i.key === `/works/${key}`);

  const handleClick = () => {
    if (isItemInBasket) {
      basket.removeFromBasket(`/works/${key}`);
    } else {
      basket.addToBasket(book);
    }
  };

  useEffect(() => {
    let rawBook = null;
    setLoadind(true);
    fetch(`https://openlibrary.org/works/${key}.json`)
        .then((res) => res.json())
        .then((data) => {
          setLoadind(false);
          rawBook = data;
          rawBook.description = typeof(rawBook.description) === 'string' ?
          rawBook.description : rawBook.description.value;
          const promiseArray = data.authors.map((i) => fetch(`https://openlibrary.org${i.author.key}.json`));

          return Promise.all(promiseArray);
        })
        .then((responses) => Promise.all(responses.map((r) => r.json())))
        .then((data) => {
          rawBook.parsedAuthors = data.map((i) => i.name);
          setBook(rawBook);
        });
  }, [key]);

  return (
    <>
      <Link to='/'>
        <MdArrowBack className='nav'/>
      </Link>

      {loading ?
      <div className='loader' /> :
      <>
        {book && (
          <>
            <div className='items-card'>
              <div className='items-visual'>
                <img alt ='' className='items-img' src={`https://covers.openlibrary.org/b/id/${book.covers[0]}-M.jpg`} />
                <AddAndRemoveBtn
                  isItemInBasket={isItemInBasket}
                  handleClick={handleClick}
                />
              </div>
              <div className='items-text'>
                <h2>{book.title}</h2>
                <div>{book.parsedAuthors.map((i) => `${i}`)}</div>
                <div className='items-description'>{book.description}</div>
              </div>
            </div>
          </>
        )}
      </>
      }
    </>
  );
});

export default ItemCard;
