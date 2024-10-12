import React from 'react'
import { Link } from 'react-router-dom'

const Main = () => {
  return (
    <>
            <div>
                <div>
                    <div>
                        <img src='' alt='login' />
                    </div>
                    <div>
                        <h3><i></i>Account Login / Signup</h3>
                        <div>
                        <div>
                            <p>Welcome to TxN_BoT</p>
                            <p>!__ Get started with the application __!</p>
                        </div>
        
                        <div></div>
                            <div>
                                <Link to="/login">
                                    <a href='/login'>
                                        Login<i></i>
                                    </a>
                                </Link>
                            </div>
                        <div>
                                <Link to="/signup">
                                    <a href='/signup'>
                                        Signup<i></i>
                                    </a>
                                </Link>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
  )
}

export default Main