import {Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './pages/About';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
// eslint-disable-next-line no-unused-vars
import {ToastContainer, toast} from 'react-toastify'

function App() {

  return (
    <>
      <div>
        <ToastContainer />
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/contact' element={<Contact />}/>
          <Route path='/dashboard' element={<Dashboard />}/>
        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App
