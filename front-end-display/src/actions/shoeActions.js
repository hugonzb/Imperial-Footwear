
import axios from 'axios';
import { SHOE_LIST_REQUEST, SHOE_LIST_SUCCESS, SHOE_LIST_FAIL, SHOE_DETAILS_REQUEST, SHOE_DETAILS_SUCCESS, SHOE_DETAILS_FAIL, SHOE_SAVE_REQUEST, SHOE_SAVE_SUCCESS, SHOE_SAVE_FAIL } from '../constants/shoeConstants';
import Axios from 'axios';

const listShoes = (category='', searchWord='', sortOrder='') => async (dispatch) => {
    try {
        dispatch({ type: SHOE_LIST_REQUEST });
        const { data } = await axios.get("/api/shoes?category" + category + "&searchWord=" + searchWord + "&sortOrder=" + sortOrder);
        dispatch({ type: SHOE_LIST_SUCCESS, payload: data });
    }
    catch (error) {
        dispatch({ type: SHOE_LIST_FAIL, payload: error.message });
    }
}

const saveShoe = (shoe) => async(dispatch) => {
    try {
        dispatch({type: SHOE_SAVE_REQUEST, payload: shoe});
        const {data} = await Axios.post('/api/shoes', shoe);
        dispatch({type: SHOE_SAVE_SUCCESS, payload: data});
    } catch (error) {
        dispatch({type: SHOE_SAVE_FAIL, payload: error.message});
    }
}

const detailsShoe = (shoeId) => async (dispatch) => {
    try{
        dispatch({ type: SHOE_DETAILS_REQUEST, payload: shoeId });
        const { data } = await axios.get("/api/shoes/" + shoeId);
        dispatch( {type: SHOE_DETAILS_SUCCESS, payload: data });
    } catch (error) {
        dispatch({type: SHOE_DETAILS_FAIL, payload: error.message});
    }
}
export { listShoes, detailsShoe, saveShoe }