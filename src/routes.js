import ItemsList from './pages/ItemsList';
import ItemsCard from './pages/ItemsCard';
import Basket from './pages/Basket';

export const routes = [
  {path: '/list', component: ItemsList, id: 1, exact: true},
  {path: '/card/:id', component: ItemsCard, id: 2, exact: true},
  {path: '/basket', component: Basket, id: 3, exact: true},
];
