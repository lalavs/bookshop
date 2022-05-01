/* eslint-disable require-jsdoc */
import {makeAutoObservable, configure} from 'mobx';

export default class Basket {
  constructor() {
    this.basket = [];
    makeAutoObservable(this);
  };

  addToBasket(item) {
    this.basket.push(item);
  };

  removeFromBasket(key) {
    this.basket = this.basket.filter((item) => item.key !== key);
  };
};

configure({
  useProxies: 'never',
});
