
import axios from 'axios';
import { SHOE_LIST_REQUEST, SHOE_LIST_SUCCESS, SHOE_LIST_FAIL } from '../constants/shoeConstants';

const listShoes = () => async (dispatch) => {
    try {
        dispatch({ type: SHOE_LIST_REQUEST });
        const { data } = await axios.get("/api/shoes");
        dispatch({ type: SHOE_LIST_SUCCESS, payload: data });
    }
    catch (error) {
        dispatch({ type: SHOE_LIST_FAIL, payload: error.message });
    }
}

const detailsShoe = (shoeId) => (dispatch) => {
    try{
        dispatch({type: SHOE_DETAILS_REQUEST, payload: productId});
        const {data} = await axios.get("/api/shoes/" + shoeId);
        dispatch({type: SHOE_DETAILS_SUCCESS, payload: data});
    }catch (error) {
        dispatch({type: SHOE_DETAILS_FAIL, payload: error.message});
    }
}
export { listShoes }