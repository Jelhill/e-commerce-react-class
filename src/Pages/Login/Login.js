import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css'
import { setEmail, setPassword } from '../../Redux/reducers/userReducer';

const Login = () => {
    const dispatch = useDispatch();
    const state = useSelector((state) => state.userReducer);
    const navigate = useNavigate()

    const Login = () => {
        const { email, password } =  state
        let allUsers = JSON.parse(localStorage.getItem("users"));
        if( !allUsers) {
            console.log("user not found")
            return false
        }

        const foundUser = allUsers.filter((user) => user.email === email && user.password === password)
        if(!foundUser.length) {
            console.log("No filtered user found")
            return false
        }

        navigate("/dashboard")

    }
    return (
        <div className='login-wrapper'>
            <h1>Login</h1>
           
            <label>Email</label>
            <input type="email" onChange={(e) => dispatch(setEmail(e.target.value))}/>
           
            <label>Password</label>
            <input type="password" onChange={(e) => dispatch(setPassword(e.target.value))} />
           
            <button onClick={Login}>Login to Account</button>
            <p>Do not have an account: <Link to="/signup">Sign up</Link></p>
        </div>
    );
}

export default Login;
