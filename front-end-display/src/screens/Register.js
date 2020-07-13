import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { register } from '../actions/userActions';

function Register (props) {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // eslint-disable-next-line
    const [rePassword, setRePassword] = useState('');
    const userRegister = useSelector(state=>state.userRegister);
    const {loading, userInfo, error} = userRegister;
    const dispatch = useDispatch();

    useEffect(() => {
        if(userInfo){
            props.history.push("/signin");
        }
        window.scrollTo(0, 0);
        return () => {
        };
    // eslint-disable-next-line 
    }, [userInfo]);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(register(name, email, password));
    }
    return <div className="form">
        <form onSubmit={submitHandler}>
            <ul className="form-container">
                <h2>Register</h2>
                <li>
                    {loading && <div>Loading Sign In...</div>}
                    {error && <div>{error}</div>}
                </li>
                <li>
                    <label htmlFor="email">Email</label>
                    <input type ="email" name="email" id="email" onChange ={(e) => setEmail(e.target.value.toLowerCase())}></input>
                </li>
                <li>
                    <label htmlFor="name">Name</label>
                    <input type ="name" name="name" id="name" onChange ={(e) => setName(e.target.value)}></input>
                </li>
                <li>
                    <label htmlFor="password">Password</label>
                    <input type ="password" name="password" id="password" onChange ={(e) => setPassword(e.target.value)}></input>
                </li>
                <li>
                    <label htmlFor="rePassword">Re-Enter Password</label>
                    <input type ="password" name="rePassword" id="rePassword" onChange ={(e) => setRePassword(e.target.value)}></input>
                </li>
                <li>
                    <button type = "submit" className="submit-button">Register</button>
                </li>
            </ul>
        </form>
    </div>
}
export default Register;