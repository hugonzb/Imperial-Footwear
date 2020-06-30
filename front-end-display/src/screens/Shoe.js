import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { detailsShoe, saveShoeReview } from '../actions/shoeActions';
import Rating from '../components/Rating';
import { SHOE_REVIEW_SAVE_RESET } from '../constants/shoeConstants';

function Shoe (props) {
    const [qty, setQty] = useState(1);
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');
    const userSignin = useSelector(state => state.userSignin);
    const {userInfo} = userSignin;
    const shoeDetails = useSelector(state => state.shoeDetails);
    const { shoe, loading, error } = shoeDetails;
    const shoeReviewSave = useSelector ( state => state.shoeReviewSave );
    const { success: shoeSaveSuccess } = shoeReviewSave;
    const dispatch = useDispatch();

    useEffect(() => {
        if (shoeSaveSuccess){
            alert("Review Submitted Successfully.");
            setRating(0);
            setComment('');
            dispatch({ type: SHOE_REVIEW_SAVE_RESET });
        }
        dispatch(detailsShoe(props.match.params.id));
        return () => {
            //
        };
    }, [shoeSaveSuccess]);
    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(
            saveShoeReview(props.match.params.id, {
                name: userInfo.name,
                rating: rating,
                comment: comment,
            })
        );
    };

    return <div>
        <div className="shoe-detailed-back">
            <Link to="/"> 
                <img src="../images/arrow.png" alt="jordan"></img>
            </Link>
        </div>
        {loading? <div>Loading Chosen Shoe...</div>:
            error ? <div>{error}</div>:
            (        
                <>   
                <div className="shoe-container">
                <div className="shoe-details">
                
                <div className="shoe-detailed-image">
                    <img src={shoe.image} alt="shoe"></img>
                </div>
                <div className="shoe-detailed-box">
                <div className="shoe-detailed-info">
                    <div className="shoe-detailed-info-centered">
                    <ul>
                        <li>
                            <h3>{shoe.name}</h3>
                        </li>
                        <li>
                            Colorway: {shoe.colorway}
                        </li>
                        <li>
                            Style: {shoe.style}
                        </li>
                        <li>
                            <a href="#reviews">
                            <Rating 
                            value={shoe.rating}
                            text={shoe.numRatings + ' Reviews'}
                            />
                            </a>
                        </li>
                        <li>
                            Price: $<b>{shoe.price}</b>
                        </li>
                        <b>Description:</b>
                        <li>
                            {shoe.description}
                        </li>
                    </ul>
                    </div>
                </div>
                <div className="shoe-detailed-actions">
                    <ul>
                        <li>
                            Price: ${shoe.price}
                        </li>
                        <li>
                            Stock: {shoe.stock}
                        </li>
                        <li>
                            Qty: {' '} <select value={qty} onChange={(e) => {setQty(e.target.value)}}>
                            {[...Array(shoe.stock).keys()].map((x) =>
                                <option key={x+1} value={x+1}>{x+1}</option>
                                )}
                            </select>
                        </li>
                        <li>
                            <button className="shoe-purchase-button">Purchase</button>
                        </li>
                    </ul>
                </div>
                </div>
            </div>
            </div>
            <div className="content-margined">
                    <h2> Reviews </h2>
                    {!shoe.reviews.length && <div> There are currently no reviews, be the first? </div>}
                    <ul className="review" id="reviews">
                        {shoe.reviews.map((review) => (
                            <li key={review._id}>
                                <div>
                                    {review.name}
                                </div>
                                <div>
                                    <Rating value={review.rating}></Rating>
                                </div>
                                <div>
                                    {review.createdAt.substring(0,10)}
                                </div>
                                <div>
                                    {review.comment}
                                </div>
                            </li>
                        ))}
                        <li>
                            <h2>
                                Write a review for this shoe
                            </h2>
                            {userInfo ? <form onSubmit={submitHandler}>
                                <ul className="form-container">
                                    <li>
                                        <label htmlFor="rating">
                                            Rating
                                        </label>
                                        <select name="raing" id="rating" value={rating}
                                        onChange={(e)=> setRating(e.target.value)}>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                        </select>
                                    </li>
                                    <li>
                                        <label htmlFor="comment">Comment</label>
                                        <textarea name="comment" value={comment} onChange={(e)=>setComment(e.target.value)}></textarea>
                                    </li>
                                    <li>
                                        <button type="submit" className="button primary">Submit</button>
                                    </li>
                                </ul>
                            </form>:
                            <div>Please <Link to="/signin">Sign In</Link> to write a review for this shoe.</div>}
                        </li>
                    </ul>
            </div>
            </>
            )
            }    
        </div>    
}
export default Shoe;