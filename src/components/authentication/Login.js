import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../../../assets/css/login.css'
const Login = () => {
    return (
        <div className="container">
            <br/>
            <div className="card shadow-lg">
            <div class="form-content register-box">
            <form>
                <div class="form-group form-box">
                    <label for="email">Email</label>
                    <input type="text" class="form-control" id="email" placeholder="Email Address" />
                </div>
                <div class="form-group form-box">
                    <label for="pass">Password</label>
                    <input type="password" class="form-control" id="pass" placeholder="Password" />
                </div>
               <div class="forgetpass">
<Link to="#">Forget Password</Link>
</div>
                <button type="submit" class="btn register-button">Register</button>
           
</form>

<div class="register">
<Link to="#">Create a new Account</Link>
            </div>
</div>
            </div>
        </div>
    )
};
export default Login;
