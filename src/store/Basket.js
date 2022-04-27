import {makeAutoObservable, configure} from "mobx";

export default class Basket {
  constructor() {
    this.basket = [];
    makeAutoObservable(this)
  }

  addItem(itemContainer, book) {
    const isItemPresent = itemContainer.findIndex(item => {
      return item.book.key === book.key;   
    });
      if (~isItemPresent) {
        itemContainer[isItemPresent]['count']++; 
    } else {
        itemContainer.push({book, count: 1});
    }
  }

  addToBasket(item) {
    this.addItem(this.basket, item);      
  }

  removeFromBasket(key) {
  this.basket = this.basket.filter((item) => item.key !== key)
}

  get basketCount() {
    return this.basket.reduce((prevItemCount, currentItem) => {
      return prevItemCount + currentItem.count;
    }, 0);
  }
}

configure({
  useProxies: 'never'
})
