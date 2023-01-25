import React from 'react';
import './Signup.css'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setName, setEmail, setPassword } from '../../Redux/reducers/userReducer';

const Signup = () => {
    const dispatch = useDispatch();
    const state = useSelector((state) => state.userReducer);
    console.log('>>>', state)

    const saveNewUser = () =>  {
        let allUsers = JSON.parse(localStorage.getItem("users")) || [];

        const { name, email, password} = state;
        if( !name || !email || !password) {
            return "name, email and passqord cannot be empty"
        }
        let user = { name, email, password }
        allUsers.push(user)
        localStorage.setItem("users", JSON.stringify(allUsers))
        alert("User has been saved")
    }
    
    return (
        <div className='login-wrapper'>
            <h1>Sign up</h1>
            <label>Name</label>
            <input type="text" onChange={(e) => dispatch(setName(e.target.value))}/>

            <label>Email</label>
            <input type="email" onChange={(e) => dispatch(setEmail(e.target.value))}/>

            <label>Password</label>
            <input type="password" onChange={(e) => dispatch(setPassword(e.target.value))} />

            <button onClick={saveNewUser}>Login to Account</button>
            <p>Already have an account? <Link to="/login">Login</Link></p>
        </div>
    );
}


export default Signup;
