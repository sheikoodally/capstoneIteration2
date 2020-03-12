//sheik
import React, { useState } from 'react';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import useForm from "../components/useForm";
import validate from "../components/validateLogin";

export const Login = () => {
    const {handleChange,
        handleSubmit,
        values, errors} = useForm(submit, validate);
    function submit(){
        console.log("Validated");
    };
    return (
        <div>
            <Banner>
            <div className="bannerlogin">
                <div className="loginForm">
                    <form  onSubmit={handleSubmit} noValidate>
                            <label><h3>Sign In</h3></label>
                            <input className="input" name="email" type="email" placeholder="Email" value={values.email} onChange={handleChange}/>
                            {errors.email && <p className="error">{errors.email}</p>}
                            
                            
                            <input className="input" name="password" type="password" placeholder="Password"value={values.password} onChange={handleChange}/>
                            {errors.password && <p className="error">{errors.password}</p>}
                            
                            <button className="login" type="submit">Login</button>

                            <Link to="/register" className="link"> Click here to register</Link>
                    </form>
                </div>
        </div>
            </Banner>
        </div>
    )
}

export default Login;