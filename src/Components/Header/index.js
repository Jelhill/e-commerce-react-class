import React, { useEffect} from 'react';
import "./index.css";
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, Link } from 'react-router-dom';
import { setShowLoginOrPassword} from '../../Redux/reducers/userReducer'
import cart from './carts.png'
const Header = (props) => {
    const currentPath = useLocation().pathname
    const state = useSelector((state) => state) 
    const { userReducer, productReducer } =  state
    const { showLoginOrPassword} = userReducer

    const dispatch = useDispatch()

    useEffect(() => {
        if(currentPath === "/") {
            dispatch(setShowLoginOrPassword(true))
        }else{
            dispatch(setShowLoginOrPassword(false))
        }
    });
    
    return (
        <div className='header-main'>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li>Fashion</li>
                <li>Electronics</li>
                <li>Babies Section</li>
                <li>Kitchenery</li>
                <li>Office & Equipments</li>
                <li>Gadgets</li>
            </ul>
            <div className="carts-div">
               <Link to="/cart"> <img src={cart} alt="cart"/></Link>
                {!productReducer.cartItems.length ? null : <div className="circle">{productReducer.cartItems.length}</div>}
            </div>
        {
            showLoginOrPassword && <ul>
                <Link to="/login"><li>Login</li></Link>
                <Link to="/signup"><li>Signup</li></Link>
            </ul>
        }
        </div>
    );
}

export default Header;
