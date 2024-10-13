import React from 'react';
import { Link } from 'react-router-dom';

const Main = () => {
    return (
        <div className="container d-flex flex-column justify-content-center align-items-center vh-100">
            <div className="text-center">
                <img src='' alt='logo' className="mb-4" style={{ width: '150px', height: '150px' }} />
                <h3 className="mb-3"><i className="bi bi-person-circle"></i> Account Login / Signup</h3>
                <div className="mb-3">
                    <p>Welcome to TxN_BoT</p>
                    <p>!__ Get started with the application __!</p>
                </div>

                <div className="d-flex flex-column">
                    <Link to="/login" className="btn btn-primary mb-2">
                        Login <i className="bi bi-arrow-right"></i>
                    </Link>
                    <Link to="/signup" className="btn btn-secondary">
                        Signup <i className="bi bi-arrow-right"></i>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Main;