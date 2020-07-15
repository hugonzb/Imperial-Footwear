import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { signin } from '../actions/userActions';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

function SignIn (props) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const userSignin = useSelector(state=>state.userSignin);
    const {loading, userInfo, error} = userSignin;
    const dispatch = useDispatch();
    const redirect = props.location.search ? props.location.search.split("=")[1] : '/';

    useEffect(() => {
        if(userInfo){
            props.history.push(redirect);
        }
        window.scrollTo(0, 0);
        return () => {
        };
    // eslint-disable-next-line 
    }, [userInfo]);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(signin(email, password));
    }

    return <div className="form">
        <form onSubmit={submitHandler}>
            <ul className="form-container">
                <div className="montserrat-header"><FontAwesomeIcon size="10px" icon={faUser}/>&nbsp;Sign In</div>
                <li>
                    {loading && <div>Loading Sign In...</div>}
                    {error && <div>Invalid Email or Password</div>}
                </li>
                <li>
                    <label className="montserrat-text" htmlFor="email">Email</label>
                    <input className="input-box" type ="email" name="email" id="email" onChange ={(e) => setEmail(e.target.value.toLowerCase())}></input>
                </li>
                <li>
                    <label className="montserrat-text" htmlFor="password">Password</label>
                    <input className="input-box" type ="password" name="password" id="password" onChange ={(e) => setPassword(e.target.value)}></input>
                </li>
                <li>
                    <button type = "submit" className="signin-submit-button">Sign In</button>
                </li>
                <li className="montserrat-text">
                    <br></br>
                    New to Imperial Footwear?
                    <Link to="/register" className="montserrat-text">Create your account here</Link>
                </li>
            </ul>
        </form>
    </div>
}
export default SignIn;