import './styles/App.scss';
import { Route, Routes } from 'react-router-dom';
import "react-toastify/dist/ReactToastify.css";
import Signup from './pages/Signup';
import Login from './pages/Login'
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import { toast } from 'react-toastify';

const App = () => {
  return (
    <> 
      <Routes>
        <Route  path="/login" element={<Login/>} />
        <Route  path="/signup" element={<Signup toast={toast}/>} />
        <Route  path="/" element={<Home/>} />
        <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>  
    </>
  );
}

export default App;
