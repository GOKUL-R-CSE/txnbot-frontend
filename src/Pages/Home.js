import React from 'react'
import {useLogout} from '../Hooks/useLogout'

const Home = () => {

    const {logout} = useLogout()
    const handleClick = () => {
        logout()
    }

  return (
    <div>
        <li onClick={handleClick} >Log out<i></i></li>
    </div>
  )
}

export default Home