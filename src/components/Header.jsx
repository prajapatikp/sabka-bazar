import React from "react";
import { NavLink } from "react-router-dom";
import '../sass/header.scss'
import logo from '../assets/logo.png'

const Header = () => {
    let count = 0;
    return (
        <nav>
            <div className="header">
                <div className='header__content'>
                    <img alt="header logo" src='/images/logo.png'></img>
                    <div className='header__content__menues'>
                        <div className='header__content__menues-left'>
                            <NavLink to="/home" className='header__content__menues-left-home'>Home</NavLink>
                            <NavLink to="/product" className='header__content__menues-left-product'>Products</NavLink>
                        </div>
                        <div className='header__content__menues-right'>
                            <div className='header__content__menues-right-signing'>
                                <NavLink to="/login" className='header__content__menues-right-signing-in'>SignIn</NavLink>
                                <NavLink to="/signup" className='header__content__menues-right-signing-register'>Register</NavLink>
                            </div>
                            <div className='header__content__menues-right-cart'>
                                <NavLink to="/cart">
                                    <img alt="header logo" src='/images/cart.svg'></img>
                                    <label>{count} items</label>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
        // <nav>
        //     <NavLink to="/home">Home</NavLink>
        //     <NavLink to="/product">Product</NavLink>
        //     <NavLink to="/cart">Cart</NavLink>
        //     <NavLink to="/login">Login</NavLink>
        //     <NavLink to="/signup">SignUp</NavLink>
        // </nav>
    )
}

export default Header