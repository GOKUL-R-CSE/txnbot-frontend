import React, {useState} from 'react'
import {useLogin} from '../Hooks/useLogin'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {login, error, isLoading} = useLogin()

    const handleSubmit = async(e) => {
        e.preventDefault()
        await login(email, password)
    }
  return (
        <div>
        <div>
            <img src='' alt="login" />
        </div>

        <div>
            <form onSubmit={handleSubmit}>
                <h2>LOG IN</h2>
                <div>
                    <label>Email</label>
                    <input id='email' type="email"
                    onChange={(e) => setEmail(e.target.value)} value={email} />
                </div>
                <div>
                    <label>Password</label>
                    <input id='password' type="password"
                    onChange={(e) => setPassword(e.target.value)} value={password} />
                </div>
                <button disabled={isLoading}>Log in</button>
                {error &&  <div>{error}...!</div>}
            </form>
        </div>
    </div>
  )
}

export default Login