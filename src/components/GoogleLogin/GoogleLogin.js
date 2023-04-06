import React, { useState, useEffect } from 'react';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Button } from '@material-ui/core';
import google from "../../Assets/gogole.png";

const GoogleLogin = () => {
    const [ user, setUser ] = useState([]);
    const [ profile, setProfile ] = useState([]);
    const navigate = useNavigate();

    const login = useGoogleLogin({
        onSuccess: (codeResponse) => {
            console.log(codeResponse.access_token);
            localStorage.setItem("token", codeResponse.access_token);
            setUser(codeResponse);
        },
        onError: (error) => console.log('Login Failed:', error)
    });

    useEffect(
        () => {
            if (user) {
                axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
                        headers: {
                            Authorization: `Bearer ${user.access_token}`,
                            Accept: 'application/json'
                        }
                    })
                    .then((res) => {
                        console.log(res);
                        setProfile(res.data);
                        localStorage.setItem("name", res.data.name);
                        localStorage.setItem("email", res.data.email);
                        localStorage.setItem("picture", res.data.picture);
                        if(res.status === 200 ) navigate('/');
                    })
                    .catch((err) => console.log(err));
                }
        },[ user ]);

    const logOut = () => {
        googleLogout();
    };
  return (
    <div>
        {!profile ? (
            <div>
                <img src={profile.picture} alt="user image" />
                <h3>User Logged in</h3>
            </div>
        ) : (
            <div style={{display:"flex", justifyContent:"center", backgroundColor: "white"}}>
                <Button variant="contained" color='white' style={{width: "100%", textTransform: "none"}}
                    className='button' onClick={() => login()} >
                    <img src={google} style={{width:"25px", height: "25px", marginRight: "15px"}} />
                    Sign in with Google
                </Button>
            </div>
            // <button onClick={() => login()}>Sign in with Google 🚀 </button>
        )}
    </div>
  )
}

export default GoogleLogin