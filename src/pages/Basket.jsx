import React, {useContext} from 'react';
import {useNavigate} from 'react-router-dom';
import {observer} from 'mobx-react-lite';
import {TiDeleteOutline} from 'react-icons/ti';
import {MdArrowBack} from 'react-icons/md';

import {Context} from '/Users/lala/Desktop/projects/bookshop/src/index.js';
import '../styles/pages style/Basket.scss';

const Basket = observer(() => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  const {basket} = useContext(Context);

  const handleClick = (item) => {
    basket.removeFromBasket(item.key);
  };

  return (
    <>
      <MdArrowBack
        className='nav'
        onClick={goBack}
      />

      {basket.basket.length === 0 ?
        <div className='basket-items__empty'>Basket is empty</div> :
        <table className='basket-items'>
          <thead className='basket-items__head'>
            <tr>
              <th>Quantity</th>
              <th>Name</th>
              <th></th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody className='basket-items__body'>
            {basket.basket.map((item) => {
              return (
                <tr key={item.key}>
                  <td>1</td>
                  <td>{item.title}</td>
                  <td>
                    <TiDeleteOutline onClick={() => handleClick(item)}/>
                  </td>
                  <td className='item-sum'>$ 1</td>
                </tr>
              );
            })}
          </tbody>
          <tfoot className='basket-sum'>
            <tr>
              <td className='sum-title' colSpan='3'>Total</td>
              <td>$ {basket.basket.length}</td>
            </tr>
          </tfoot>
        </table>
      }
    </>
  );
});

export default Basket;
