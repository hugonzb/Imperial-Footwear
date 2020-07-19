import Axios from "axios";
import Cookie from "js-cookie";
import { CART_ADD_ITEM, CART_REMOVE_ITEM, CART_REMOVE_ALL_ITEMS } from "../constants/cartConstants";

const addToCart = (shoeId, qty, size) => async (dispatch, getState) => {
    try{
        const {data} = await Axios.get("/api/shoes/" + shoeId);
        dispatch({
            type: CART_ADD_ITEM, payload: {
                shoe: data._id,
                name: data.name,
                image: data.image,
                price: data.price,
                stock: data.stock,
                style: data.style,
                colorway: data.colorway,
                qty,
                size
            }
        });
        const {cart:{cartItems}} = getState();
        Cookie.set("cartItems", JSON.stringify(cartItems));
    } catch (error) {

    }
}

const removeFromCart = (shoeId) => (dispatch, getState) =>{
    dispatch({type: CART_REMOVE_ITEM, payload: shoeId});
    const {cart:{cartItems}} = getState();
    Cookie.set("cartItems", JSON.stringify(cartItems));
}

const removeCart = () =>(dispatch, getState)=>{
    dispatch({type: CART_REMOVE_ALL_ITEMS});
    const {cart:{cartItems}} = getState();
    Cookie.set("cartItems", JSON.stringify(cartItems));
}

export { addToCart, removeFromCart, removeCart };