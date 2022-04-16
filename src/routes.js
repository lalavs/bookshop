import ItemList from './pages/ItemList';
import ItemCard from './pages/ItemCard';
import Basket from './pages/Basket';

export const routes = [
  {path: '/', component: ItemList, id: 1, exact: true},
  {path: '/:key', component: ItemCard, id: 2, exact: true},
  {path: '/basket', component: Basket, id: 3, exact: true},
];
