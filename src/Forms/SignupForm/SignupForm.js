import React ,{Component}from 'react';
import classes from '../Form.module.css';
import {Link} from 'react-router-dom';
import {Auth} from 'aws-amplify';

class Signup extends Component
{
    state={
        username:'',
        password:'',
        email:'',
        phonecode:'',
        phone:'',
        signedUp:false
    }
    submitform=(event)=>{
        event.preventDefault();
        const {username,password,email,phonecode,phone,signedUp}=this.state;
        const phone_number=phonecode+phonecode;
        Auth.signUp({username:username,
                    password:password,
                    attributes:
                    {
                        email:email,
                        phone_number:phone_number
                    }
                })
                .then(()=>console.log('SignedUp'))
                .catch((err)=>console.log(err));
        this.setState({signedUp:true});
    }

    eventChangeHandler=(event)=>{   
        this.setState({[event.target.name]:event.target.value});
        console.log(this.state);
    }

    render()
    {
    return (
        <div className={classes.boxdiv}>
                <p><b>Create a new account</b></p>
                <form onSubmit={this.submitform}>
                    <label className={classes.required}>Username</label>
                    <input type="text" name="username" placeholder="UserName" required onChange={this.eventChangeHandler}/>
                    <label className={classes.required}>Password</label>
                    <input type="password" name="password" placeholder="Pasword" required onChange={this.eventChangeHandler}/>
                    <label className={classes.required}>Email Address</label>
                    <input type="email" name="email" placeholder="Email" required onChange={this.eventChangeHandler}/>
                    <label className={classes.required}>Phone Number</label>
                    <div className={classes.phone}>
                        <select name="phonecode" id="phonecode" required onChange={this.eventChangeHandler}>
                        <option value="+91">+91</option>
                        <option value="+7">+7</option>
                        <option value="+234">+234</option>
                        <option value="+225">+225</option>
                        </select>
                        <input type="text" name="phone" placeholder="Phone" required onChange={this.eventChangeHandler}/>
                    </div>
                    <div className={classes.header}>
                        <p>Have an account? <Link to="/">Sign in</Link></p>
                        <button type="submit">CREATE ACCOUNT</button>
                    </div>
                    
                </form>
            </div>
    )
}
}
export default Signup;