import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/Main.css';

const Main = () => {
    return (
        <div className="d-flex flex-column justify-content-center align-items-center main-container">
            <div className="text-center">
                <img src='https://via.placeholder.com/200' alt='logo' className="img-logo" />
                <h3 className="mb-3 main-title">
                    <i className="bi bi-person-circle"></i> Account Login / Signup
                </h3>
                <div className="mb-3">
                    <p>Welcome to TxN_BoT</p>
                    <p>!__ Get started with the application __!</p>
                </div>

                <div className="d-flex flex-column">
                    <Link to="/login" className="btn btn-primary btn-custom mb-2">
                        Login <i className="bi bi-arrow-right"></i>
                    </Link>
                    <Link to="/signup" className="btn btn-secondary btn-custom">
                        Signup <i className="bi bi-arrow-right"></i>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Main;