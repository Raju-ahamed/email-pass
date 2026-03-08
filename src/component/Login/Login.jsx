import { sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useRef, useState } from 'react';
import { NavLink } from 'react-router';
import { auth } from '../../firebase.init';

const Login = () => {
    const [errorMsg, setErrorMsg] = useState("");
    const [success, setSuccess] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        setErrorMsg("")
        setSuccess(false)
        signInWithEmailAndPassword(auth, email, password).then(result => {

            console.log(result)
            setSuccess(true);
        }).catch(error => {
            setErrorMsg(error);
        })
    }
    const emailRef = useRef();
    const handleForgetPass = () => {
        const email = (emailRef.current.value);
        setErrorMsg("");
        sendPasswordResetEmail(auth,email).then(()=>{
            alert("an email is send to your mail")
        })
        .catch(error=>{
            setErrorMsg(error);
        })

    }
    return (
        <div className="card bg-base-100 mx-auto w-full max-w-sm shrink-0 shadow-2xl mt-20">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <div className="card-body">
                <form onSubmit={handleSubmit} className="fieldset">
                    <label className="label">Email</label>
                    <input type="email" name='email' ref={emailRef} className="input" placeholder="Email" />
                    <label className="label">Password</label>
                    <input type="password" name='password' className="input" placeholder="Password" />
                    <div onClick={handleForgetPass}><a className="link link-hover">Forgot password?</a></div>
                    <button className="btn btn-neutral mt-4">Login</button>
                </form>
                <h2>Creat a new account <NavLink to="/register"><span className='text-blue-500 underline'>
                    Register</span>
                </NavLink>
                </h2>
                {
                    errorMsg && <p className='text-red-500'>{errorMsg.message}</p>
                }
                {
                    success && <p className='text-green-500'>Success</p>
                }
            </div>
        </div>
    );
};

export default Login;