import React from 'react';
import './Signup.css'
// import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Signup = () => {
    // const dispatch = useDispatch();
    // const useSelect = useSelector((state) => state);

    return (
        <div className='login-wrapper'>
            <h1>Sign up</h1>
            <label>Name</label>
            <input type="text" />

            <label>Email</label>
            <input type="email" />

            <label>Password</label>
            <input type="password" />

            <button>Login to Account</button>
            <p>Already have an account? <Link to="/login">Login</Link></p>
        </div>
    );
}


export default Signup;
