import { useState, useEffect } from 'react'
import "./style.css";
import { Link, useNavigate } from 'react-router-dom';
import {Grid, Drawer, Typography, Hidden, useTheme, useMediaQuery, List, ListItem, ListItemText, IconButton} from '@material-ui/core';
import {Menu} from '@material-ui/icons';
import logo from "../../Assets/logo.jpg";


const Navbar = () => {
    const theme = useTheme();
    const navigate = useNavigate();
    const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
    const [show, setShow] = useState(false);
    const [openDrawer, setOpenDrawer] = useState(false);
    const token = localStorage.getItem('token');

    useEffect( () => {
        const token = localStorage.getItem('token');
        if(token) {
            setShow(true);
        } else {
            setShow(false);
        }
    })

    return (
        <>
        {isMobile ? 
            <>
            <Drawer
              open={openDrawer}
              onClose={() => setOpenDrawer(false)}
            >
              <List>
               <ListItem onClick={() => setOpenDrawer(false)}>
                  <ListItemText>
                    <Link to="/">Home</Link>
                  </ListItemText>
                </ListItem>
                <ListItem onClick={() => setOpenDrawer(false)}>
                  <ListItemText>
                    <Link to="/about">About</Link>
                  </ListItemText>
                </ListItem>
                <ListItem onClick={() => setOpenDrawer(false)}>
                  <ListItemText>
                    <Link to="/contact">Contact</Link>
                  </ListItemText>
                </ListItem>
                <ListItem onClick={() => setOpenDrawer(false)}>
                  <ListItemText>
                    <Link to="/about">Faq</Link>
                  </ListItemText>
                </ListItem>
              </List>
            </Drawer>
            <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
              <Menu />
            </IconButton>
          </>
        :
        <Grid container className='navbar'>
          <Grid item lg={6} md={6} sm ={2} onClick={() => navigate('/')}>
            <img src={logo} alt='Logo' style={{width:"120px", height:"70px", cursor: "pointer"}} />
          </Grid>
            <Grid lg={6} md={6} sm={10}>
            <Grid container>
              <Grid item lg={2} md={2} sm={2} xs={0}></Grid>
              <Grid item lg={10} md={10} sm={10} xs={12}>
                <Typography style={{display:"flex", justifyContent:"space-around"}}>
                    <Link to='/' className='nav-link'>Home</Link>
                    <Link to='/register' className='nav-link'>About</Link>
                    {!token && <Link to='/register' className='nav-link'>Register</Link> }
                    {!token && <Link to='/login' className='nav-link'>Login</Link> }
                    {token && <Link to='/logout' className='nav-link'>Logout</Link>}
                </Typography>
            </Grid>
            </Grid>
            </Grid>
        </Grid>
        }
    </>
    )
};

export default Navbar;




// import React from 'react';
// // import connectionImage from "../assets/connection.png";
// // import UiColors from '../utils/uiConstants';
// import {Link} from 'react-router-dom';


// const Navbar = () => {
//   return(
//   <nav className="navbar navbar-expand-lg navbar-light bg-light">
//     <div className="container-fluid d-flex justify-content-between">
//       {/* <div style={{backgroundColor: "red"}}>
//         <img src={connectionImage} style={{width: "6vw", height: "6vw"}} />
//       </div> */}
//       <div class="collapse navbar-collapse" id='navbarSupportedContent'>
//         <ul class="navbar-nav me-auto mb-2 mb-lg-0">
//           <li className='nav-item'>
//             <Link to={"/"} className="h5 nav-link active text-primary px-3" aria-current="page" >Home</Link>
//           </li>
//           <li className='nav-item'>
//             <Link to={"/"} className="h5 nav-link text-primary px-3"  aria-current="page">Find Jobs</Link> 
//           </li>
//           <li className='nav-item'>
//             <Link to={"/"} className="h5 nav-link active text-primary px-3">Candidates</Link>
//           </li>
//           <li className='nav-item'>
//             <Link to={"/"} className="h5 nav-link active text-primary px-3">Blogs</Link>
//           </li>
//           <li className='nav-item'>
//             <Link to={"/"} className="h5 nav-link active text-primary px-3">About Us</Link>
//           </li>
//         </ul>
//       </div>
//       <div className='d-flex'>
//         <Link to={"/"} className="h4 nav-item nav-link text-primary">Register</Link>
//         <Link to={"/"} className="h4 nav-item nav-link text-primary">Login</Link>
//       </div>
//       <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//         <span class="navbar-toggler-icon"></span>
//       </button>
//     </div>
//   </nav>
//   )
// }

// export default Navbar;