import {Navigate, Route, Routes, useLocation} from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './pages/About';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
// eslint-disable-next-line no-unused-vars
import {ToastContainer, toast} from 'react-toastify'
import { useContext } from 'react';
import { AppContext } from './context/AppContext';

function App() {

  const location = useLocation()
  const hideLayout = location.pathname === '/login'
  const {token} = useContext(AppContext)

  return (
    <>
      <div>
        <ToastContainer />
        {!hideLayout && <Navbar />}
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/about' element={token ? <About /> : <Navigate to="/login" />}/>
          <Route path='/contact' element={token ? <Contact /> : <Navigate to="/login" />}/>
          <Route path='/dashboard' element={token ? <Dashboard /> : <Navigate to="/login" />}/>
        </Routes>
        {!hideLayout && <Footer />}
      </div>
    </>
  )
}

export default App
