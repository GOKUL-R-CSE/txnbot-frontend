import React, { useState } from 'react';
import { useSignup } from '../Hooks/useSignup';
import '../CSS/Signup.css'; // Import the CSS file

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { signup, error, isLoading } = useSignup();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await signup(name, email, password);
    };

    return (
        <div className="signup-container d-flex justify-content-center align-items-center">
            <div className="card" style={{ width: '20rem' }}>
                <img src='' alt="Signup" className="card-img-top" />
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <h2 className="text-center">SIGN UP</h2>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input
                                id='name'
                                type="text"
                                className="form-control"
                                onChange={(e) => setName(e.target.value)}
                                value={name}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input
                                id='email'
                                type="email"
                                className="form-control"
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input
                                id='password'
                                type="password"
                                className="form-control"
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}
                            />
                        </div>
                        <button type="submit" className="btn btn-primary w-100" disabled={isLoading}>
                            {isLoading ? 'Signing up...' : 'Sign up'}
                        </button>
                        {error && <div className="alert alert-danger mt-3">{error}...!</div>}
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Signup;