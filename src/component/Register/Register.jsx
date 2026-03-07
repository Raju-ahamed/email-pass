import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../../firebase.init';


const Register = () => {
    const [errorMsg, setErrorMsg] = useState("");
    const [sucses,setSucses] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        
        const email = e.target.email.value;
        const password = e.target.password.value;
        setSucses(false);
        setErrorMsg('')
        createUserWithEmailAndPassword(auth, email, password).then(result => {
            console.log(result);
            setSucses(true);
        }).catch(error => {
            setErrorMsg(error.message)
            console.log(error)
        })

    }
    return (

        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>

                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <form onSubmit={handleSubmit} className="fieldset">
                            <label className="label">Email</label>
                            <input type="email" name='email' className="input" placeholder="Email" />
                            <label className="label">Password</label>
                            <input type="password" name='password' className="input" placeholder="Password" />
                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button className="btn btn-neutral mt-4">Register</button>
                        </form>
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