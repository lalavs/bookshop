import React from 'react';
import {BiSearch} from 'react-icons/bi';
import {AiOutlineShoppingCart} from 'react-icons/ai';

import logo from '/Users/lala/Desktop/projects/bookshop/src/images/logo.png';
import '/Users/lala/Desktop/projects/bookshop/src/styles/container.scss';
import './header.scss';

const Header = () => {
  return (
    <div className='container'>
      <header className='header'>
        <img className='logo' src={logo} />
        <div className='header-right'>
          <div className='input-group'>
            <input className='input-search'
              type='text' placeholder='Search' />
            <BiSearch className='input-icon'/>
          </div>
          <AiOutlineShoppingCart className='basket'/>
        </div>
      </header>
    </div>
  );
};

export default Header;
