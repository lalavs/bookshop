import React from 'react';
import {useNavigate} from 'react-router-dom';
import {MdArrowBack} from 'react-icons/md';

import './GoBackBtn.scss';

const GoBackBtn = () => {
  const navigate = useNavigate();

  const goBack = () => {
    if (window.history.state && window.history.state.idx > 0) {
      navigate(-1);
    } else {
      navigate('/', {replace: true});
    }
  };

  return (
    <MdArrowBack
      className='go-back-btn'
      onClick={goBack}
    />
  );
};

export default GoBackBtn;
