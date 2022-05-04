import React from 'react';
import PropTypes from 'prop-types';

import './AddAndRemoveBtn.scss';

const AddAndRemoveBtn = ({isItemInBasket, handleClick}) => {
  return (
    <button
      className='add-remove-btn'
      onClick={handleClick}
    >
      {isItemInBasket ?
          'Remove' : 'Add to cart'
      }
    </button>
  );
};

AddAndRemoveBtn.propTypes = {
  isItemInBasket: PropTypes.bool,
  handleClick: PropTypes.func,
};

export default AddAndRemoveBtn;
