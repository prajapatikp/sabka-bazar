import React from "react";
import '../sass/login.scss'

const Login = () => {
    return (
        <div className="signup">
            <div className='signup__left'>
                <h2>Login</h2>
                <label>Get access to your Orders, Wishlist and Recommendations</label>
            </div>
            <div className='signup__right'>
                <div>
                    <label name='email'>Email</label>
                    <input type="text" id="email" name="email" placeholder='Email' />
                </div>
                <div>
                    <label name='password'>Password</label>
                    <input type="text" id="password" name="password" placeholder='Password' />
                </div>
                <button type='submit' className='signup__right-submit-button'>Login</button>
            </div>
        </div>
    )
}

export default Login