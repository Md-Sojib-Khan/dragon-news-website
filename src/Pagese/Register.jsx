import React, { use } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../Context/AuthContext/AuthProvider';
import { toast } from 'react-toastify';

const Register = () => {
    const { createUser, setUser, updateUser } = use(AuthContext)
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                const userData = result.user;
                updateUser({ displayName: name, photoURL: photoURL })
                    .then(() => {
                        setUser({ ...userData, displayName: name, photoURL: photoURL });
                        navigate('/')
                    })
                    .catch((error) => {
                        toast(error.code)
                        setUser(userData)
                    })
            })
            .catch(error => {
                toast(error.code)
            })
    }

    return (
        <div className="hero">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                <h1 className="text-2xl font-bold text-center">Register your account!</h1>
                <form onSubmit={handleRegister} className="card-body">
                    <fieldset className="fieldset">
                        <label className="label font-bold text-primary">Your Name</label>
                        <input type="text" name='name' className="input" placeholder="Enter your name" />
                        <label className="label font-bold text-primary">Photo URL</label>
                        <input type="text" name='photoURL' className="input" placeholder="Photo URL" />
                        <label className="label font-bold text-primary">Email</label>
                        <input type="email" name='email' className="input" placeholder="Email" />
                        <label className="label font-bold text-primary">Password</label>
                        <input type="password" name='password' className="input" placeholder="Password" />
                        <button type='submit' className="btn btn-neutral mt-4">Register</button>
                        <p className='font-semibold text-accent text-center mt-2'>Allready Have An Account ? <Link to={'/auth/login'} className='text-secondary'>Login</Link></p>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default Register;