import React, {useEffect, useState} from 'react';
import "./Login.css"
import { Button, Grid, TextField, Typography, IconButton } from '@material-ui/core';
import img from "../../Assets/doctor.jpg";
import Navbar from '../../components/Navbar/Navbar';
import { Link, useNavigate, } from 'react-router-dom';
import axios from "axios";
import { Visibility, VisibilityOff } from '@material-ui/icons';
import Footer from '../../components/Footer/Footer';
import GoogleLogin from '../../components/GoogleLogin/GoogleLogin';

const Login = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log(email+" "+password);
    const res = await axios.post("/login", {
          email: email,
          password: password, 
        }).then(function (res) {
          console.log(res.data.error);
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("name", res.data.user.name);
          localStorage.setItem("email", res.data.user.email);
          if(res.status === 200 ) navigate('/');
        })
        .catch(function (err) {
          console.log(err.response.data.error);
          setError(err.response.data.error);
        });
  }

  useEffect(() => {
    const token = localStorage.getItem('token');
    if(token) navigate('/');
  },[])

  return (
    <div className='loginBg'>
      <Navbar />
      <Grid className='login' container style={{display: "flex", justifyContent: "center"}}>
        <Grid item lg={8} md={10} sm={12}>
          <Grid container>
            <Grid item lg={6} md={6} sm={6}>
              <div className='loginImage'  style={{ backgroundImage: `url(${img})` }}>
              </div>
            </Grid>
            <Grid item lg={6} md={6} sm={6}>
              <Typography className='inputBoxes'>
                <Typography style={{backgroundColor: "#B0E0E6", borderRadius:"20px"}}>
                  <Typography className='btnParent' style={{padding: "10px",  fontSize: "1.4rem", fontWeight: "600"}}>
                    Sign In
                  </Typography>
                  {error && <Typography style={{paddingInline: "10px",color: "red"}}>{error}</Typography>}
                <Typography style={{backgroundColor: "#F3E7E7", padding: "30px", borderRadius:"20px"}}>
                  <TextField label="Email / Phone" variant="standard" value={email}
                      className='inputBox' style={{marginBottom: "1vw"}}
                      onChange={(e) => setEmail(e.target.value)} />
                  <Typography style={{display:"flex"}}>
                    <TextField label="Password" variant="standard" className='inputBox' 
                      type={showPassword ? "text" : "password"} value={password}
                      onChange={(e) => setPassword(e.target.value)} />
                      <IconButton style={{marginLeft: "0px"}}
                        onClick={() => setShowPassword(!showPassword)}>
                         {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                  </Typography>
                  <Typography className='btnParent' style={{marginTop: "3vw"}}>
                    <Button variant="contained" color='primary' 
                      className='button' onClick={(e) => handleLogin(e)}>
                      Login
                    </Button>
                  </Typography>
                  <Typography className='btnParent' style={{marginTop: "3vw"}}>
                    <GoogleLogin />
                  </Typography>
                  <Typography className='btnParent' style={{marginTop: "2vw"}}>
                    <Link to='/register' style={{textDecoration: "none", color:"red"}}>I don't have an Account ?</Link>
                  </Typography>
                </Typography>
                </Typography>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Footer />
    </div>
  )
}

export default Login