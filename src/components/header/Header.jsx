/* eslint-disable max-len */
import React, {useContext} from 'react';
import {observer} from 'mobx-react-lite';
import {NavLink} from 'react-router-dom';
import {AiOutlineShoppingCart} from 'react-icons/ai';

import logo from '/Users/lala/Desktop/projects/bookshop/src/images/logo.png';
import './Header.scss';
import {Context} from '/Users/lala/Desktop/projects/bookshop/src/index.js';


const Header = observer(() => {
  const {basket} = useContext(Context);

  // localStorage.setItem ("object", JSON.stringify("object"));
  // object = JSON.parse (localStorage.getItem ("object"));

  // const basketCount = basket.basket;
  // sessionStorage.setItem('basketCountStorage', JSON.stringify(basketCount));
  // const basketCountStorage = JSON.parse(sessionStorage.getItem('basketCountStorage'));
  // console.log(basketCountStorage);

  // useEffect(() => {
  //   localStorage.setItem('basketCountStorage', JSON.stringify(basket.basket));
  // });

  return (
    <header className='header'>
      <NavLink to='/'>
        <div className='header-left'>
          <img className='header-logo' alt='' src={logo} />
          <h1 className='header-title'>Bookshop</h1>
        </div>
      </NavLink>
      <div className='header-right'>
        <NavLink to='/basket'>
          <AiOutlineShoppingCart className='basket'/>
        </NavLink>
        <div className='basket-counter'>
          <div className='basket-quantity'>{basket.basket.length}</div>
        </div>
      </div>
    </header>
  );
});

export default Header;
