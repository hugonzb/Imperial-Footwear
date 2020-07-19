import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { detailsShoe, saveShoeReview } from '../actions/shoeActions';
import Rating from '../components/Rating';
import { SHOE_REVIEW_SAVE_RESET } from '../constants/shoeConstants';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner, faChevronLeft } from "@fortawesome/free-solid-svg-icons";

function Shoe (props) {
    const [qty, setQty] = useState(1);
    const [size, setSize] = useState(1);
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
        window.scrollTo(0, 0);
        return () => {
        };
    // eslint-disable-next-line
    }, [shoeSaveSuccess]);
    const submitHandler = (e) => {
        try {
            e.preventDefault();
            dispatch(
                    saveShoeReview(props.match.params.id, {
                        name: userInfo.name,
                        rating: parseInt((rating.substring(0,1))),
                        comment: comment,
                    })
            );
        }catch(error){
            alert("Please select a rating.");
        }
    };
    const addToCart = () => {
        if (size !== 1){
            props.history.push('/cart/' + props.match.params.id + '?qty=' + qty + '?size=' + size);
        } else {
            alert("Please specify your shoe size before adding to cart");
        }
    };

    const reviewSignin = () => {
        props.history.push(`/signin?redirect=shoe/`+ props.match.params.id);
    }

    return <div>
        {loading?   <div className="shoe-loading">
                        <FontAwesomeIcon icon={faSpinner} spin /> Loading Shoe Details...
                    </div>:
            error ? <div>{error}</div>:
            (        
                <>
                <div className="shoe-detailed-back">
                    <Link to="/"> 
                        <div className="continue-shopping"><FontAwesomeIcon icon={faChevronLeft}/>&nbsp; Home </div>
                    </Link>
                </div>
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
                            Category: {shoe.type}
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
                            Size: 
                            <div className="select">{' '} 
                                <select value={size} onChange={(e) => {setSize(e.target.value)}}>
                                    <option value="" selected data-default>Choose your size...</option>
                                    <option value="US7">US7</option>
                                    <option value="US7.5">US7.5</option>
                                    <option value="US8">US8</option>
                                    <option value="US8.5">US8.5</option>
                                    <option value="US9">US9</option>
                                    <option value="US9.5">US9.5</option>
                                    <option value="US10">US10</option>
                                    <option value="US10.5">US10.5</option>
                                    <option value="US11">US11</option>
                                    <option value="US11.5">US11.5</option>
                                    <option value="US12">US12</option>
                                </select>
                            </div>
                        </li>
                        <li>
                            <button onClick={addToCart} className="submit-button">Add To Cart</button>
                        </li>
                    </ul>
                </div>
                </div>
            </div>
            
            <div className="form-content-container">
            <div className="content-margined">
                        <li>
                        <h2>
                            Write Your Review
                        </h2>
                        <div className="form-review">
                        {userInfo ? <form className="review-form" onSubmit={submitHandler}>
                            <ul> 
                                <li>
                                    <label htmlFor="rating">
                                        Rating
                                    </label>
                                    <div className="select">
                                        <select name="rating" required id="rating" value={rating}
                                        onChange={(e)=> setRating(e.target.value)}>
                                            <option value="1" disabled selected data-default>Select your rating...</option>
                                            <option value="1s">1 Star</option>
                                            <option value="2s">2 Stars</option>
                                            <option value="3s">3 Stars</option>
                                            <option value="4s">4 Stars</option>
                                            <option value="5s">5 Stars</option>
                                        </select>
                                    </div>
                                </li>
                                <li>
                                    <label htmlFor="comment">Comment</label>
                                    <textarea name="comment" placeholder="E.g. Why did you give it this rating?" rows="4" cols="50" value={comment} onChange={(e)=>setComment(e.target.value)}></textarea>
                                </li>
                                <li>
                                    <button type="submit" className="review-submit">Submit Review</button>
                                </li>
                            </ul>
                            </form>:
                                <button onClick={reviewSignin} className ="submit-button">
                                    Sign In
                                </button>
                            }
                            </div>
                        </li>
                    <div>
                    <h2> Customer Reviews </h2>
                    {!shoe.reviews.length && <div className="review-signin-message"> There are currently no reviews. Why not be the first user to submit one? </div>}
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