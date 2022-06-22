import React from "react";
import '../sass/login.scss'

const Login = () => {
    return (
        <div aria-label="Login page" className="signup">
            <div className='signup__left'>
                <h2>Login</h2>
                <label>Get access to your Orders, Wishlist and Recommendations</label>
            </div>
            <div className='signup__right'>
                <div>
                    <label aria-labelledby="email" name='email'>Email</label>
                    <input tabIndex={0} aria-label="enter email" type="text" id="email" name="email" placeholder='Email' />
                </div>
                <div>
                    <label aria-labelledby="password" name='password'>Password</label>
                    <input tabIndex={0} aria-label="enter email" type="text" id="password" name="password" placeholder='Password' />
                </div>
                <button type='submit' className='signup__right-submit-button'>Login</button>
            </div>
        </div>
    )
}

export default Login