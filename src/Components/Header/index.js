import React, { useEffect} from 'react';
import "./index.css";
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { setShowLoginOrPassword} from '../../Redux/reducers/userReducer'
const Header = (props) => {
    const currentPath = useLocation().pathname
    const state = useSelector((state) => state.userReducer) 
    const { showLoginOrPassword} = state
    const dispatch = useDispatch()

    useEffect(() => {
        if(currentPath === "/") {
            dispatch(setShowLoginOrPassword(true))
        }
    });
    return (
        <div className='header-main'>
            <ul>
                <li>Fashion</li>
                <li>Electronics</li>
                <li>Babies Section</li>
                <li>Kitchenery</li>
                <li>Office & Equipments</li>
                <li>Gadgets</li>
            </ul>
        {
            showLoginOrPassword && <ul>
                <li>Login</li>
                <li>Signup</li>
            </ul>
        }
        </div>
    );
}

export default Header;
