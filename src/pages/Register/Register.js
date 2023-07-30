import React, { useState, useEffect } from 'react';
import { Button, Grid, TextField, Typography, IconButton } from '@material-ui/core';
import img from "../../Assets/doctor.jpg";
import Navbar from '../../components/Navbar/Navbar';
import { Link, useNavigate} from 'react-router-dom';
import axios from "axios";
import { Visibility, VisibilityOff } from '@material-ui/icons';
import Footer from '../../components/Footer/Footer';

const Register = () => {
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const handleRegister = async (e) => {
    e.preventDefault();

    const res = await axios.post("https://asphaltapi1.onrender.com/register", {
      name: name,
      email: email,
      password: password, 
      confirmpassword: confirmpassword
    }).then(function (response) {
      if(response.status === 200) {
        setError("");
        navigate('/login');
      }
      else {
        setError(response.message);
      }
    })
    .catch(function (err) {
      setError(err.response.data.error);
    });
    
  }

  useEffect(() => {
    if(token) navigate('/');
  },[])

  return (
    <div className='loginBg'>
      <Navbar />
      {!token && <Grid className='login' container style={{display: "flex", justifyContent: "center"}}>
        <Grid item lg={8} md={10} sm={12} xs={12}>
          <Grid container>
            <Grid item lg={6} md={6} sm={6}>
              <div className='loginImage'  style={{ backgroundImage: `url(${img})` }}>
              </div>
            </Grid>
            <Grid item lg={6} md={6} sm={6}>
              <Typography className='inputBoxes'>
                <Typography style={{backgroundColor: "#B0E0E6", borderRadius:"20px"}}>
                  <Typography className='btnParent' style={{padding: "10px 0",  fontSize: "1.4rem", fontWeight: "600"}}>
                    Sign Up
                  </Typography>
                  {error && <Typography style={{paddingInline: "10px",color: "red"}}>{error}</Typography>}
                <Typography style={{backgroundColor: "white", padding: "30px", borderRadius:"20px"}}>
                  <TextField label="Name" variant="standard" value={name}
                      className='inputBox' style={{marginBottom: "1vw"}}
                      onChange={(e) => setName(e.target.value)} />
                  <TextField label="Email / Phone" variant="standard" value={email}
                      className='inputBox' style={{marginBottom: "1vw"}}
                      onChange={(e) => setEmail(e.target.value)} />
                  <TextField label="Password" variant="standard" className='inputBox' 
                      value={password}
                      onChange={(e) => setPassword(e.target.value)} />
                  <Typography style={{display:"flex", marginTop: "12px"}} >
                    <TextField label="Confirm Password" variant="standard" className='inputBox' 
                      type={showPassword ? "text" : "password"} value={confirmpassword}
                      onChange={(e) => setConfirmpassword(e.target.value)} />
                      <IconButton style={{marginLeft: "0px"}}
                        onClick={() => setShowPassword(!showPassword)}>
                         {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                  </Typography>
                  <Typography className='btnParent' style={{marginTop: "3vw"}}>
                    <Button variant="contained" color='primary' 
                        className='button' onClick={(e) => handleRegister(e)}>
                        Sign Up
                    </Button>
                  </Typography>
                  <Typography className='btnParent' style={{marginTop: "2vw"}}>
                    <Link to='/login' style={{textDecoration: "none", color:"red"}}>I have an Account ?</Link>
                  </Typography>
                </Typography>
                </Typography>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid> }
      <Footer />
    </div>
  )
}

export default Register;