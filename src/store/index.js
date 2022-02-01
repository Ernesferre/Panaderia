import { createStore, conbineReducer } from "redux";

import CategoryReducer from './reducers/category.reducer';
import BreadsReducer from './reducers/breads.reducer';


const RootReducer = conbineReducer({
    categories: CategoryReducer,
    breads: BreadsReducer
});

export default createStore(RootReducer);

