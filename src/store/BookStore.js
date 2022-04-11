import {makeAutoObservable} from 'mobx';

export default class BookStore {
  constructor() {
    this._sections = [
      {id: 1, name: 'Books for April'},
      {id: 2, name: 'Books We Love'},
      {id: 3, name: 'Recently Returned'},
    ];
    this._items = [
      {id: 1, name: 'Alice', price: 1, img: `../images/logo.png`},
      {id: 2, name: 'Maria', price: 1, img: `../images/logo.png`},
      {id: 3, name: 'Ksenia', price: 1, img: `../images/logo.png`},
      {id: 4, name: 'Anna', price: 1, img: `../images/logo.png`},
      {id: 5, name: 'Oks', price: 1, img: `../images/logo.png`},
    ];
    this._selectedSection = {};

    makeAutoObservable(this);
  };

  setSections(sections) {
    this._sections = sections;
  };

  setItems(items) {
    this._items = items;
  };

  setSelectedSection(selectedSection) {
    this._selectedSection = selectedSection;
  };

  get sections() {
    return this._sections;
  };

  get items() {
    return this._items;
  };

  get selectedSection() {
    return this._selectedSection;
  }
};
