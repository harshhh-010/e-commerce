import { createStore, combineReducers } from 'redux';
import cartReducer from './reducers/CartReducer';
import productReducer from './reducers/ProductReducer';

const rootReducer = combineReducers({
  cart: cartReducer,
  products: productReducer
});

const store = createStore(rootReducer);

export default store;
