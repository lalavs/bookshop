import {makeAutoObservable} from 'mobx';

export default class BookStore {
  constructor() {
    this._sections = [
      {id: 1, name: 'Books for April'},
      {id: 2, name: 'Books We Love'},
      {id: 3, name: 'Recently Returned'},
    ];

    makeAutoObservable(this);
  };

  setSections(sections) {
    this._sections = sections;
  };

  get sections() {
    return this._sections;
  };
};
