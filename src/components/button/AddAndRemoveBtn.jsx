import React from 'react';
import PropTypes from 'prop-types';
import {IoMdAddCircleOutline} from 'react-icons/io';
import {TiDeleteOutline} from 'react-icons/ti';

import './AddAndRemoveBtn.scss';

const AddAndRemoveBtn = ({isItemInBasket, handleClick}) => {
  return (
    <button
      className='add-remove-btn'
      onClick={handleClick}
    >
      {isItemInBasket ?
        <>
          <TiDeleteOutline className='add-remove-btn__icon' />
          <div>Remove</div>
        </> :
        <>
          <IoMdAddCircleOutline className='add-remove-btn__icon' />
          <div>1$</div>
          <div>Add to cart</div>
        </>
      }
    </button>
  );
};

AddAndRemoveBtn.propTypes = {
  isItemInBasket: PropTypes.bool,
  handleClick: PropTypes.func,
};

export default AddAndRemoveBtn;
