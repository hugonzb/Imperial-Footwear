import Axios from "axios";
import { CART_ADD_ITEM } from "../constants/cartConstants";

const addToCart = (shoeId, qty) => async (dispatch) => {
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
                qty
            }
        });
    } catch (error) {

    }
}

export { addToCart };