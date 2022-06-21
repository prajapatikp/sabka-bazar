import React from "react";
import '../sass/signup.scss'

const SignUp = () => {
    return (
        <div className="signup">
            <div className='signup__left'>
                <h2>Signup</h2>
                <label>We do not share your personal details with anyone</label>
            </div>
            <div className='signup__right'>
                <div>
                    <label name='fname'>First Name</label>
                    <input type="text" id="fname" name="fname" placeholder='First Name' />
                </div>
                <div>
                    <label name='lname'>Last Name</label>
                    <input type="text" id="lname" name="lname" placeholder='Last Name' />
                </div>
                <div>
                    <label name='email'>Email</label>
                    <input type="text" id="email" name="email" placeholder='Email' />
                </div>
                <div>
                    <label name='password'>Password</label>
                    <input type="text" id="password" name="password" placeholder='Password' />
                </div>
                <div>
                    <label name='confirm-password'>Confirm Password</label>
                    <input type="text" id="confirm-password" name="confirm-password" placeholder='Confirm Password' />
                </div>
                <button type='submit' className='signup__right-submit-button'>Signup</button>
            </div>
        </div>
    )
}

export default SignUp