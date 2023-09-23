import React, { useContext } from 'react';
import Login from './pages/login/Login';
import Home from './pages/Home';
import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';
import { AuthContext } from './context/AuthContext';

function App() {

  const {currentUser}=useContext(AuthContext)

  //console.log(currentUser)

  const ProtectedRoute=({children}) => {
    if(!currentUser)
    {
      return <Navigate to='/login'/>
    }

    return children
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element={<ProtectedRoute><Home/></ProtectedRoute>}/>
          <Route path='login' element={<Login/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
