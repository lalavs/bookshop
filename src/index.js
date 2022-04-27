import React, {createContext} from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import BookStore from './store/BookStore';
import './index.scss';
import Basket from './store/Basket';

export const Context = createContext(null);

ReactDOM.render(
    <Context.Provider value={{
      books: new BookStore(),
      basket: new Basket(),
    }}>
      <App />
    </Context.Provider>,
    document.getElementById('root'),
);
