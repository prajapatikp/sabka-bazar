import React from "react";
import { NavLink } from "react-router-dom";
import '../sass/header.scss'

const Header = () => {
    let count = 0;
    return (
        <nav>
            <div className="header">
                <div className='header__content'>
                    <img alt="header logo" aria-label="header logo" src='/images/logo.png'></img>
                    <div aria-label="header navigation" className='header__content__menues'>
                        <div className='header__content__menues-left'>
                            <NavLink to="/home" tabIndex={0} aria-label="Home menu" role="button" className='header__content__menues-left-home'>Home</NavLink>
                            <NavLink to="/product"  tabIndex={0} aria-label="Product menu" role="button" className='header__content__menues-left-product'>Products</NavLink>
                        </div>
                        <div className='header__content__menues-right'>
                            <div className='header__content__menues-right-signing'>
                                <NavLink to="/login" tabIndex={0} aria-label="Sign in" role="button" className='header__content__menues-right-signing-in'>SignIn</NavLink>
                                <NavLink to="/signup" tabIndex={0} aria-label="Register" role="button" className='header__content__menues-right-signing-register'>Register</NavLink>
                            </div>
                            <div className='header__content__menues-right-cart'>
                                <NavLink tabIndex={0} aria-label="cart menu" role="button" to="/cart">
                                    <img alt="cart icon" src='/images/cart.svg'></img>
                                    <label>{count} items</label>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header