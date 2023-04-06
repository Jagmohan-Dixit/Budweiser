import './App.css';
import {Routes, Route, BrowserRouter} from "react-router-dom";
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Home from './pages/Home/Home';
import Departments from './pages/Departments/Departments';
import Appointments from './pages/MyAppointments/Appointments';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Error from './pages/Error/Error';
import Profile from './pages/Profile/Profile';
 
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' Component={Home} />
        <Route exact path='/about' Component={About} />
        <Route exact path='/profile' Component={Profile} />
        <Route exact path='/contact' Component={Contact} />
        <Route exact path='/appointments' Component={Appointments} />
        <Route exact path='/departments' Component={Departments} />
        <Route exact path='/login' Component={Login} />
        <Route exact path='/register' Component={Register} />
        <Route exact path="*" Component={Error} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
