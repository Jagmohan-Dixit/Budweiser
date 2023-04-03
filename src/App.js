import './App.css';
import {Routes, Route, BrowserRouter} from "react-router-dom";
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Home from './pages/Home/Home';
 
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' Component={Home} />
        <Route exact path='/login' Component={Login} />
        <Route exact path='/register' Component={Register} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
