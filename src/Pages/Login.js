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
        <div className="login-container">
            <div className="card">
                <img src='https://cdn.prod.website-files.com/5e42772e6a8cfd42a9715206/62d15bfed359cc963c6ebe27_Chatbot-Design_article-cover%20(1).jpg' alt="login" className="img-logo" />
                <div className="card-body">
                    <h1 className='font-bold mb-4'>LOG IN</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700">Email</label>
                            <input
                                id='email'
                                type="email"
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block text-gray-700">Password</label>
                            <input
                                id='password'
                                type="password"
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}
                                required
                            />
                        </div>
                        <button 
                            type="submit" 
                            className={`btn btn-primary w-full`} 
                            disabled={isLoading}
                        >
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