import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { detailsShoe, saveShoeReview } from '../actions/shoeActions';
import Rating from '../components/Rating';
import { SHOE_REVIEW_SAVE_RESET } from '../constants/shoeConstants';

function Shoe (props) {
    const [qty, setQty] = useState(1);
    const [rating, setRating] = useState(1);
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
            setRating(1);
            setComment('');
            dispatch({ type: SHOE_REVIEW_SAVE_RESET });
        }
        dispatch(detailsShoe(props.match.params.id));
        return () => {
        };
    // eslint-disable-next-line
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
    const addToCart = () => {
        props.history.push('/cart/' + props.match.params.id + '?qty=' + qty);
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
                            Price: <b>${shoe.price}</b>
                        </li>
                        <li>
                            Designer: {shoe.designer}
                        </li>
                        <li>
                            <a href="#reviews">
                            <Rating 
                            value={shoe.rating}
                            text={shoe.numRatings === 1 ? shoe.numRatings + " Review" : shoe.numRatings + " Reviews"}/>
                            </a>
                            {shoe.rating=== 0 ? <Rating 
                                value={-1}
                                text={shoe.numRatings + " Reviews"}/>
                                : null}
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
                           
                            Quantity: 
                            <div className="select">{' '} <select value={qty} onChange={(e) => {setQty(e.target.value)}}>
                            {[...Array(shoe.stock).keys()].map((x) =>
                                <option key={x+1} value={x+1}>{x+1}</option>
                                )}
                            </select>
                            </div>
                        </li>
                        <li>
                            <button onClick={addToCart} className="submit-button">Add to Cart</button>
                        </li>
                    </ul>
                </div>
                </div>
            </div>
            
            <div className="form-content-container">
            <div className="content-margined">
                        <li>
                        <h2>
                            Write a review for this shoe
                        </h2>
                        <div className="form-review">
                        {userInfo ? <form className="review-form" onSubmit={submitHandler}>
                          
                            <ul> 
                                <li>
                                    <label htmlFor="rating">
                                        Rating
                                    </label>
                                    <select name="rating" id="rating" value={rating}
                                    onChange={(e)=> setRating(e.target.value)}>
                                        <option value="0" disabled selected data-default>Select your rating...</option>
                                        <option value="1">1 Star</option>
                                        <option value="2">2 Stars</option>
                                        <option value="3">3 Stars</option>
                                        <option value="4">4 Stars</option>
                                        <option value="5">5 Stars</option>
                                    </select>
                                </li>
                                <li>
                                    <label htmlFor="comment">Comment</label>
                                    <textarea name="comment" placeholder="E.g. Why did you give it this rating?" rows="4" cols="50" value={comment} onChange={(e)=>setComment(e.target.value)}></textarea>
                                </li>
                                <li>
                                    <button type="submit" className="shoe-purchase-button">Submit</button>
                                </li>
                            </ul>
                            </form>:
                            <div className="review-signin-message">Please <Link to="/signin">Sign In</Link> to write a review for this shoe.</div>}
                            </div>
                        </li>
                    <div>
                    <h2> Customer Reviews </h2>
                    {!shoe.reviews.length && <div> There are currently no reviews, be the first? </div>}
                    <ul className="review" id="reviews">
                        {shoe.reviews.slice(0).reverse().map((review) => (
                            <li key={review._id}>
                                <div>
                                    {review.name}
                                </div>
                                <div>
                                    <Rating value={review.rating}></Rating>
                                </div>

                                <div>
                                    {new Date(review.createdAt).toString().substring(21,0)}
                                </div>
                                <div>
                                    {review.comment}
                                </div>
                            </li>
                        ))}
                    </ul>
                    </div>
            </div>
            </div>
            </div>
            </>
            )
            }    
        </div>    
}
export default Shoe;