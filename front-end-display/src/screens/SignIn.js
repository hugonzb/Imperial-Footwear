import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { signin } from '../actions/userActions';

function SignIn (props) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const userSignin = useSelector(state=>state.userSignin);
    const {loading, userInfo, error} = userSignin;
    const dispatch = useDispatch();

    useEffect(() => {
        if(userInfo){
            props.history.push("/");
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
                <h2>Sign In</h2>
                <li>
                    {loading && <div>Loading Sign In...</div>}
                    {error && <div>Invalid Email or Password</div>}
                </li>
                <li>
                    <label htmlFor="email">Email</label>
                    <input type ="email" name="email" id="email" onChange ={(e) => setEmail(e.target.value.toLowerCase())}></input>
                </li>
                <li>
                    <label htmlFor="password">Password</label>
                    <input type ="password" name="password" id="password" onChange ={(e) => setPassword(e.target.value)}></input>
                </li>
                <li>
                    <button type = "submit" className="submit-button">Sign In</button>
                </li>
                <li>
                    <br></br>
                    New to Imperial Footwear?
                </li>
                <li>
                    <Link to="/register" className="button full-width">Create your account here</Link>
                </li>
            </ul>
        </form>
    </div>
}
export default SignIn;