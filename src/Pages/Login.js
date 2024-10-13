import React, { useState } from 'react';
import { useLogin } from '../Hooks/useLogin';
import '../CSS/Login.css'; // Import the CSS file

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login, error, isLoading } = useLogin();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(email, password);
    };

    return (
        <div className="login-container d-flex justify-content-center align-items-center">
            <div className="card" style={{ width: '20rem' }}>
                <img src='' alt="login" className="card-img-top" />
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <h2 className="text-center">LOG IN</h2>
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
                            {isLoading ? "Logging in..." : "Log in"}
                        </button>
                        {error && <div className="alert alert-danger mt-3">{error}...!</div>}
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;