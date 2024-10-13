import { useState } from "react";

import { useAuthContext } from './useAuthContext'

export const useSignup = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const { dispatch } = useAuthContext()


    const signup = async (name, email, password) => {
        setIsLoading(true)
        setError(null)
        console.log("Entered useSignup")
        const response = await fetch('http://localhost:5000/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: name,
                email: email,
                password: password
            })
        })

        const json = await response.json()

        if (!response.ok) {
            setIsLoading(false)
            setError(json.error)
        }
        if (response.ok) {
            localStorage.setItem('user', JSON.stringify(json))

            // update auth content
            dispatch({ type: 'LOGIN', payload: json })
            setIsLoading(false)
        }

    }
    return { signup, isLoading, error }

}