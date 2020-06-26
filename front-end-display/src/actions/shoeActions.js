
import axios from 'axios';
import { SHOE_LIST_REQUEST, SHOE_LIST_SUCCESS, SHOE_LIST_FAIL, SHOE_DETAILS_REQUEST, SHOE_DETAILS_SUCCESS, SHOE_DETAILS_FAIL, SHOE_SAVE_REQUEST, SHOE_SAVE_SUCCESS, SHOE_SAVE_FAIL } from '../constants/shoeConstants';

const listShoes = (brand='', searchWord='', sortOrder='') => async (dispatch) => {
    try {
        dispatch({ type: SHOE_LIST_REQUEST });
        const { data } = await axios.get("/api/shoes?brand=" + brand + "&searchWord=" + searchWord + "&sortOrder=" + sortOrder);
        dispatch({ type: SHOE_LIST_SUCCESS, payload: data });
    }
    catch (error) {
        dispatch({ type: SHOE_LIST_FAIL, payload: error.message });
    }
}

const favListShoes = (favorites='', searchWord='', sortOrder='') => async (dispatch) => {
    try {
        dispatch({ type: SHOE_LIST_REQUEST });
        const { data } = await axios.get("/api/shoes?favorites=" + favorites + "&searchWord=" + searchWord + "&sortOrder=" + sortOrder);
        dispatch({ type: SHOE_LIST_SUCCESS, payload: data });
    }
    catch (error) {
        dispatch({ type: SHOE_LIST_FAIL, payload: error.message });
    }
}

const saveShoe = (shoe) => async(dispatch) => {
    try {
        dispatch({type: SHOE_SAVE_REQUEST, payload: shoe});
        const {data} = await axios.post('/api/shoes', shoe);
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
export { listShoes, detailsShoe, saveShoe, favListShoes }