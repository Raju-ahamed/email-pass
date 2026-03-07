import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../../firebase.init';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { NavLink } from 'react-router';


const Register = () => {
    const [errorMsg, setErrorMsg] = useState("");
    const [sucses, setSucses] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;
        const checkbox = e.target.checkbox.checked;
        
        setSucses(false);
        setErrorMsg('')
        const passwordExUp = /^(?=.*[A-Z]).+$/;
        const passwordExlow = /^(?=.*[a-z]).+$/;
        const passwordExN = /^(?=.*\d).{8,}$/
        if (passwordExUp.test(password) === false) {
            setErrorMsg('Enter One Uper case');
            return;
        }
        else if (passwordExlow.test(password) === false) {
            setErrorMsg('Enter One Lower case');
            return;
        }
        else if (passwordExN.test(password) === false) {
            setErrorMsg('Enter One Number');
            return;
        }
        if(!checkbox){
            setErrorMsg("Please clicked checkbox")
            return;
        }
        createUserWithEmailAndPassword(auth, email, password).then(result => {
            console.log(result);
            setSucses(true);
        }).catch(error => {
            setErrorMsg(error.message)
            console.log(error)
        })

    }
    const [showPass, setShowPass] = useState(false);

    return (

        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register!</h1>

                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <form onSubmit={handleSubmit} className="fieldset">
                            <label className="label">Email</label>
                            <input type="email" name='email' className="input" placeholder="Email" />
                            <label className="label">Password</label>
                            <div className='relative'>
                                <input
                                    type={
                                        showPass ? "text" : "password"
                                    }
                                    name='password'
                                    className="input"
                                    placeholder="Password" />
                                <p onClick={() => setShowPass(!showPass)} className='btn btn-xs top-2 right-4 absolute'>{
                                    showPass ? <FaEyeSlash /> : <FaEye />
                                }</p>
                            </div>
                            <div><a className="link link-hover">Forgot password?</a></div>
                            <label className="label mt-1">
                                <input 
                                type="checkbox"
                                name='checkbox'
                                className="checkbox" />
                                Remember me
                            </label>
                            <button className="btn btn-neutral mt-4">Register</button>
                        </form>
                        <h1>Already Have an account <NavLink to="/login"><span className='text-blue-600 underline'>login</span></NavLink></h1>
                        
                        {
                            errorMsg && <p className='text-red-500'>{errorMsg}</p>
                        }
                        {
                            sucses && <p className='text-green-500'>sucses</p>
                        }
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Register;