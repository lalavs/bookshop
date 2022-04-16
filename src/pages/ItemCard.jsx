/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
// import {useParams} from 'react-router-dom';
// import axios from 'axios';

import pic from '/Users/lala/Desktop/projects/bookshop/src/images/pic.jpeg';
import '../styles/pages style/ItemCard.scss';

const ItemCard = () => {
  // const {key} = useParams();
  // const [book, setBook] = useState(null);

  // const fetchOneBook = async () => {
  //   const response = await axios({
  //     url: 'https://openlibrary.org/works/OL45883W.json',
  //     method: 'get',
  //   })
  //   return response.data.works.map((i) => {
  //     return i.key;
  //   });
  // }

  // useEffect(() => {
  //   fetchOneBook(key).then((data) => setBook(data))
  // }, []);

  return (
    <div className='items-card'>
      <div className='items-visual'>
        <img alt ='' src={pic} />
        <div className='items-price'>Price: 1 $</div>
        <button className='items-buybtn'>Add to cart</button>
      </div>
      <div className='items-text'>
        {/* <h2>{title}</h2>
        <div className='items-author'>By {book.authors.name}</div> */}
        {/* <div className='items-description'>{book.description}</div> */}
      </div>
    </div>
  );
};

export default ItemCard;
