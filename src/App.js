import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useAuthContext } from './Hooks/useAuthContext';

import Login from './Pages/Login';
import Signup from './Pages/Signup'
import Main from './Components/Main'
import Home from './Pages/Home';

function App() {

  const user = useAuthContext()
  console.log(user);

  return (
    <>
      <Routes>
        <Route path='/' exact element={!user.user ? <Main /> : <Navigate to='/home' />} ></Route>
        <Route path='/login' exact element={!user.user ? <Login /> : <Navigate to='/home' />} ></Route>
        <Route path='/signup' exact element={!user.user ? <Signup /> : <Navigate to='/home' />} ></Route>
        <Route path='/home' exact element={user.user ? <Home /> : <Navigate to='/' />}></Route>
      </Routes>
    </>
  );
}

export default App;
