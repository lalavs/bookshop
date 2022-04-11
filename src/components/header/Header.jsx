import React from 'react';
import {NavLink} from 'react-router-dom';
import {BiSearch} from 'react-icons/bi';
import {AiOutlineShoppingCart} from 'react-icons/ai';

import logo from '/Users/lala/Desktop/projects/bookshop/src/images/logo.png';
import './header.scss';

const Header = () => {
  return (
    <header className='header'>
      <NavLink to='/list'>
        <div className='header-left'>
          <img className='header-logo' src={logo} />
          <h1 className='header-title'>Bookshop</h1>
        </div>
      </NavLink>
      <div className='header-right'>
        <div className='input-group'>
          <input
            className='input-search'
            type='text'
            placeholder='Search' />
          <BiSearch className='input-icon'/>
        </div>
        <NavLink to='/basket'>
          <AiOutlineShoppingCart className='basket'/>
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
