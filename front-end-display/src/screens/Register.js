import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { register } from '../actions/userActions';

function Register (props) {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');
    const userRegister = useSelector(state=>state.userRegister);
    const {loading, userInfo, error} = userRegister;
    const [message, setMessage] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
        window.scrollTo(0, 0);
        return () => {
        };
    // eslint-disable-next-line 
    }, [userInfo]);

    const submitHandler = (e) => {
        e.preventDefault();
        if(password === rePassword){
            dispatch(register(name, email, password));
            props.history.push("/signin");
        }else{
            setMessage("Passwords do not match");
        }
    }
    return <div className="form">
        <form onSubmit={submitHandler}>
            <ul className="form-container">
                <h2>Register</h2>
                <li>
                    {loading && <div>Loading Register Form...</div>}
                    {error && <div>{error}</div>}
                </li>
                <li>
                    {message}
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