import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './Login.css'
const Login = () => {
    // const dispatch = useDispatch();
    // const useSelect = useSelector((state) => state);

    return (
        <div className='login-wrapper'>
            <h1>Login</h1>
            <input type="email" />
            <input type="password" />
            <button>Login to Account</button>
            <p>Do not have an account: <Link to="/signup">Sign up</Link></p>
        </div>
    );
}

export default Login;
