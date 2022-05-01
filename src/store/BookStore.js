/* eslint-disable require-jsdoc */
import {makeAutoObservable} from 'mobx';

export default class BookStore {
  constructor() {
    this._items = [];
    makeAutoObservable(this);
  };

  setItems(items) {
    this._items = items;
  };

  get items() {
    return this._items;
  };
};
