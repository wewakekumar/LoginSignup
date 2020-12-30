import React from 'react';
import classes from '../Form.module.css';
import {Link} from 'react-router-dom';

const login=()=>{
    return (<div className={classes.boxdiv}>
        <p><b>Sign in to your account</b></p>
        <form>
            <label className={classes.required}>Username</label>
            <input type="text" name="username" placeholder="Enter your userName" required/>
            <label className={classes.required}>Password</label>
            <input type="password" name="password" placeholder="Enter your pasword" required/>
            <label>Forgot your password? <Link to="/reset">Reset password</Link></label>
            <div className={classes.header}>
                <p>No account? <Link to="/signup">Create account</Link></p>
            <button>SIGN IN</button>
            </div>
            
        </form>
    </div>);
}
export default login;