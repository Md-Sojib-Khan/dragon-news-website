import React, { use, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Context/AuthContext/AuthProvider';

const Login = () => {
    const {logInUser, forgatePassword} = use(AuthContext);
    const [error, setError] = useState('')
    const location = useLocation();
    const navigate = useNavigate();
    const emailRef = useRef(null)

    const handleLogIn = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        logInUser(email, password)
            .then(result => {
                const userData = result.user;
                navigate(`${location.state ? location.state : '/'}`)
            })
            .catch(error => {
                setError(error.code)
            })
    }

    const handleForgatePass = () =>{
        const email = emailRef.current.value;
        forgatePassword(email)
        .then((res)=>{
            console.log(res)
            alert('Check your email to reset password')
        })
        .catch(error =>{
            console.log(error)
        })
    }

    return (
        <div className="hero">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                <h1 className="text-2xl font-bold text-center">Login your account!</h1>
                <form onSubmit={handleLogIn} className="card-body">
                    <fieldset className="fieldset">
                        <label className="label font-bold text-primary">Email</label>
                        <input type="email" ref={emailRef} name='email' className="input" placeholder="Email" />
                        <label className="label font-bold text-primary">Password</label>
                        <input type="password" name='password' className="input" placeholder="Password" />
                        <div><a onClick={handleForgatePass} className="link link-hover" type='button'>Forgot password?</a></div>
                        {
                            error && <p className='text-xs text-red-500'>{error}</p>
                        }
                        <button type='submit' className="btn btn-neutral mt-4">Login</button>
                        <p className='font-semibold text-accent text-center mt-2'>Dont’t Have An Account ? <Link to={'/auth/register'} className='text-secondary'>Register</Link></p>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default Login;