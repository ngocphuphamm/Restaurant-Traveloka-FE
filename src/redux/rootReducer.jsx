import { combineReducers } from "redux";

import cartReducer from "../redux/Cart/cart-reducer";

const rootReducer = combineReducers({
  cart : cartReducer ,
});

export default rootReducer;
