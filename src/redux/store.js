import { createStore, combineReducers, applyMiddleware } from "redux";
import { cardReducer } from "./reducers/cart.reducers";
import logger from "redux-logger";



const allReducers = combineReducers({
  cartData: cardReducer,
  
});



export const store = createStore(allReducers, applyMiddleware(logger));

