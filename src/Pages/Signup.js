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
        <div className="signup-container">
            <div className="signup-card">
                <img 
                    src='https://via.placeholder.com/200' 
                    alt="Signup" 
                    className="signup-logo" 
                />
                <div className="card-body">
                    <h2 className="text-xl font-bold">SIGN UP</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-gray-700">Name</label>
                            <input
                                id='name'
                                type="text"
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                                onChange={(e) => setName(e.target.value)}
                                value={name}
                                required
                            />
                        </div>
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