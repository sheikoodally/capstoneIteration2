import React, { useState } from 'react';
import Banner from '../components/Banner';
import BgBanner from '../components/BgBanner';
import useForm from "../components/useForm";
import validate from "../components/validateLogin";
import {Link} from 'react-router-dom';

const Register = () => {
    const {handleChange,
        handleSubmit,
        values, errors} = useForm(submit, validate);
    function submit(){
        console.log("Validated");
    };
    return (
        <Banner>
        <div className="bannerRegister">
        <div className="registerForm">
            <h3>Create your account</h3>
            <form onSubmit={handleSubmit} noValidate>
            <div>
                <input className="remail" placeholder="Email" name="email" type="email" value={values.email} onChange={handleChange}/>
                

                <input className="rpw" name="password"  placeholder="Password" type="password" value={values.password} onChange={handleChange}/>
               

                <input className="rpw1" placeholder="Re-enter Password" name="password1"  type="password1" value={values.password1} onChange={handleChange}/>
                
                <input className="rphone" placeholder="Phone number" name="phone"   type="phone" value={values.phone} onChange={handleChange}/>
               
                <input className="raddress" placeholder="Address" name="address" type="address" value={values.address} onChange={handleChange}/>
                

                <input className="rcity" placeholder="City" name="city" type="city" value={values.city} onChange={handleChange}/>

                <input className="rpro" placeholder="Province" name="pro" type="text" value={values.pro} onChange={handleChange}/>
                

                <input className="rsubinput" placeholder="Postal code" name="ps" type="ps" value={values.ps} onChange={handleChange}/>

                {errors.email && <p className="error">{errors.email}</p>}
                {errors.password && <p className="error">{errors.password}</p>}
                {errors.password1 && <p className="error">{errors.password1}</p>}
                {errors.phone && <p className="error">{errors.phone}</p>}
                {errors.address && <p className="error">{errors.address}</p>}
                {errors.city && <p className="error">{errors.city}</p>}
                {errors.pro && <p className="error">{errors.pro}</p>}
                {errors.ps && <p className="error">{errors.ps}</p>}

            </div>
                <p className="term">By clicking Register, you agree on our <Link to="/" className="rlink">Term and Condition</Link>.</p>
                <button className="registerbutton" type="submit">Create</button>
            
            </form>
            </div>
        </div>
        </Banner>
    );
};

export default Register;