import { useContext, useState } from 'react'
import Home from './pages/home/Home'
import Login from './pages/login/login'
import Statistics from './pages/statistics/statistics'
import Register from './pages/register/register'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FavoriteList from './pages/favorite_list/favorite_lidt'
import { AuthContext } from './context/AuthContext'
function App() {
  const { user } = useContext(AuthContext)
  console.log("user" + user)
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={user ? <Home /> : <Login />} />
        <Route path="login" element={user ? <Home /> : <Login />} />
        <Route path="register" element={user ? <Home /> : <Register />} />
        <Route path="statistics" element={user ? <Statistics /> : <Register />} />
        <Route path="favorite" element={<FavoriteList />} />
      </Routes>
    </BrowserRouter>

  );
}
export default App
