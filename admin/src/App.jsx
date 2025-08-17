// eslint-disable-next-line no-unused-vars
import { ToastContainer, toast } from 'react-toastify';
import { Navigate, useLocation, Routes, Route } from 'react-router-dom';
import { useContext } from 'react';
import { AdminContext } from './context/AdminContext';
import TopNavbar from './components/TopNavbar';
import SideNavbar from './components/SideNavbar';
import AdminHome from './pages/AdminHome';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import BinFull from './pages/BinFull';
import Emergency from './pages/Emergency';
import Feedback from './pages/Feedback';


function App() {

  const location = useLocation()
  const hideLayout = location.pathname === '/admin-login'
  const {aToken} = useContext(AdminContext)

  return (
    <>
      <div>
        <ToastContainer />
        {!hideLayout && <TopNavbar />}
        {!hideLayout && <SideNavbar />}
        <Routes>
          <Route path='/' element={aToken ? <AdminHome /> : <Navigate to="/admin-login" />}/>
          <Route path='/admin-login' element={<AdminLogin />}/>
          <Route path='/admin-dashboard' element={aToken ? <AdminDashboard /> : <Navigate to="/admin-login" />}/>
          <Route path='/binFull' element={aToken ? <BinFull /> : <Navigate to="/admin-login" />}/>
          <Route path='/emergency' element={aToken ? <Emergency /> : <Navigate to="/admin-login" />}/>
          <Route path='/feedback' element={aToken ? <Feedback /> : <Navigate to="/admin-login" />}/>
        </Routes>
      </div>
    </>
  )
}

export default App
