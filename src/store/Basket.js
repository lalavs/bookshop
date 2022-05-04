import {makeAutoObservable, configure} from 'mobx';

export default class Basket {
  constructor() {
    this.basket = [];
    makeAutoObservable(this);
  };

  setBasket(items) {
    this.basket = items;
  };

  get items() {
    return this.basket;
  };

  addToBasket(item) {
    this.basket.push(item);
  };

  removeFromBasket(key) {
    this.basket = this.basket.filter((item) => item.key !== key);
  };

  removeAll() {
    this.basket = [];
  };
};

configure({
  useProxies: 'never',
});
