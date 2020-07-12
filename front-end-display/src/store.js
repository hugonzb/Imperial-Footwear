import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import { shoeListReducer, shoeDetailsReducer, shoeSaveReducer, shoeReviewSaveReducer } from './reducers/shoeReducer';
import { userSigninReducer, userRegisterReducer } from './reducers/userReducer';
import { cartReducer } from './reducers/cartReducer';
import Cookie from 'js-cookie';

const userInfo = Cookie.getJSON("userInfo") || null;
const cartItems = Cookie.getJSON("cartItems") || [];
const initialState = {userSignin: {userInfo}, cart: {cartItems}};
const reducer = combineReducers({
    shoeList: shoeListReducer,
    shoeDetails: shoeDetailsReducer,
    userSignin: userSigninReducer,
    userRegister: userRegisterReducer,
    shoeSave: shoeSaveReducer,
    shoeReviewSave: shoeReviewSaveReducer,
    cart: cartReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));
export default store;