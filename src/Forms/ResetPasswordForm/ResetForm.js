import React from 'react';
import classes from '../Form.module.css';
import {Link} from 'react-router-dom';
const reset=()=>{
    return (<div className={classes.boxdiv}>
        <p><b>Reset your password</b></p>
        <form>
            <label className={classes.required}>Username</label>
            <input type="text" name="username" placeholder="Enter your username" required/>
            <div className={classes.header}>
                <p><Link to="/">Back to Sign in</Link></p>
            <button>SEND CODE</button>
            </div>
            
        </form>
    </div>);
}
export default reset;