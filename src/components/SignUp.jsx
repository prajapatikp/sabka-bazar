import React from "react";
import '../sass/signup.scss'

const SignUp = () => {
    return (
        <div aria-label="Registeration page" className="signup">
            <div className='signup__left'>
                <h2>Signup</h2>
                <label>We do not share your personal details with anyone</label>
            </div>
            <div className='signup__right'>
                <div>
                    <label aria-labelledby="first name" name='fname'>First Name</label>
                    <input aria-label="enter first name" tabIndex={0} type="text" id="fname" name="fname" placeholder='First Name' />
                </div>
                <div>
                    <label aria-labelledby="last name" name='lname'>Last Name</label>
                    <input aria-label="enter last name" tabIndex={0} type="text" id="lname" name="lname" placeholder='Last Name' />
                </div>
                <div>
                    <label aria-labelledby="email" name='email'>Email</label>
                    <input aria-label="enter email" tabIndex={0} type="text" id="email" name="email" placeholder='Email' />
                </div>
                <div>
                    <label aria-labelledby="password" name='password'>Password</label>
                    <input aria-label="enter password" tabIndex={0} type="text" id="password" name="password" placeholder='Password' />
                </div>
                <div>
                    <label aria-labelledby="confirm password" name='confirm-password'>Confirm Password</label>
                    <input aria-label="enter password again" tabIndex={0} type="text" id="confirm-password" name="confirm-password" placeholder='Confirm Password' />
                </div>
                <button tabIndex={0} type='submit' className='signup__right-submit-button'>Signup</button>
            </div>
        </div>
    )
}

export default SignUp