import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/Main.css'; // Import CSS file

const Main = () => {
    return (
        <div className="main-container">
            <div className="card">
                <img 
                    src='https://img.freepik.com/premium-photo/chat-bot-3d_777576-10113.jpg' // Adjusted for side by side layout
                    alt='logo' 
                    className="img-logo" 
                />
                <div className="card-body">
                    <h3 className="mb-3 main-title">
                        <i className="bi bi-person-circle"></i> Account Login/Signup
                    </h3>
                    <div className="mb-3 text-center">
                        <p className="font-bold">Welcome to TxN_BoT!</p>
                        <p>Get access to all features and services by logging in or signing up.</p>
                        <p>Join our community and start managing your transactions with ease!</p>
                    </div>

                    <div className="flex justify-center space-x-4"> {/* Flexbox for side-by-side buttons */}
                        <Link to="/login" className="btn btn-primary">
                            Login <i className="bi bi-box-arrow-in-right me-2"></i>
                        </Link>
                        <Link to="/signup" className="btn btn-secondary">
                            Signup <i className="bi bi-person-add me-2"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;