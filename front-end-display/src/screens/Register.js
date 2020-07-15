import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { register } from '../actions/userActions';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons";

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
                <div className="montserrat-header"><FontAwesomeIcon size="1x" icon={faAddressCard}/>&nbsp;Register</div>
                <li>
                    {loading && <div>Loading Register Form...</div>}
                    {error && <div>{error}</div>}
                </li>
                <li>
                    {message}
                </li>
                <li>
                    <label className="montserrat-text" htmlFor="email">Email</label>
                    <input className="input-box" type ="email" name="email" id="email" onChange ={(e) => setEmail(e.target.value.toLowerCase())}></input>
                </li>
                <li>
                    <label className="montserrat-text" htmlFor="name">Name</label>
                    <input className="input-box" type ="name" name="name" id="name" onChange ={(e) => setName(e.target.value)}></input>
                </li>
                <li>
                    <label className="montserrat-text" htmlFor="password">Password</label>
                    <input className="input-box" type ="password" name="password" id="password" onChange ={(e) => setPassword(e.target.value)}></input>
                </li>
                <li>
                    <label className="montserrat-text" htmlFor="rePassword">Re-enter Password</label>
                    <input className="input-box" type ="password" name="rePassword" id="rePassword" onChange ={(e) => setRePassword(e.target.value)}></input>
                </li>
                <li>
                    <button type = "submit" className="signreg-submit-button">REGISTER</button>
                </li>
            </ul>
        </form>
    </div>
}
export default Register;