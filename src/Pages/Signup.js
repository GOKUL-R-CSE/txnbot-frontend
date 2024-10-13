import React, {useState} from 'react'
import {useSignup} from '../Hooks/useSignup' 

const Signup = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {signup, error, isLoading} = useSignup()

    const handleSubmit = async(e) => {
        e.preventDefault()
        await signup(name, email, password)
        
        
    }
  return (
         <div>
        <div>
            <img src='' alt="Signup" />
        </div>

        <div>
            <form onSubmit={handleSubmit}>
                <h2>SIGN UP</h2>
                <div>
                    <label>Name</label>
                    <input id='name' type="text"
                    onChange={(e) => setName(e.target.value)} value={name} />
                </div>
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
                <button disabled={isLoading}>Sign up</button>
                {error &&  <div>{error}...!</div>}
            </form>
        </div>
    </div>
  )
}

export default Signup