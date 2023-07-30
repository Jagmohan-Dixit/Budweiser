import { useState, useEffect } from 'react'
import "./style.css";
import { useLocation } from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom';
import {Grid, Drawer, Button, Typography, Hidden, useTheme, useMediaQuery, List, ListItem, ListItemText, IconButton} from '@material-ui/core';
import {Menu} from '@material-ui/icons';
import logo from "../../Assets/logo.jpg";


const Navbar = () => {
    const theme = useTheme();
    const navigate = useNavigate();
    const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
    const [openDrawer, setOpenDrawer] = useState(false);
    const token = localStorage.getItem('token');
    const location = useLocation().pathname;

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
        <Grid container className={location === "/" || location === "/about" ? "navbar" : "navbar navbarnohome"}>
          <Grid item lg={4} md={6} sm ={2} onClick={() => navigate('/')}>
            <img src={logo} alt='Logo' style={{width:"120px", height:"70px", cursor: "pointer"}} />
          </Grid>
            <Grid lg={8} md={8} sm={10}>
            <Grid container>
              <Grid item lg={2} md={2} sm={2} xs={0}></Grid>
              <Grid item lg={10} md={10} sm={10} xs={12}>
                <Typography style={{display:"flex", justifyContent:"space-between"}}>
                    <Link to='/' className={location === "/" || location === "/about" ? 'nav-link' : 'nav-link text-dark'}>Home</Link>
                    <Link to='/about' className={location === "/" || location === "/about" ? 'nav-link' : 'nav-link text-dark'}>About</Link>
                    <Link to='/contact' className={location === "/" || location === "/about" ? 'nav-link' : 'nav-link text-dark'}>Contact</Link>
                    {!token && <> 
                      <Link to='/register' className={location === "/" || location === "/about" ? 'nav-link' : 'nav-link text-dark'}>Register</Link>
                      <Link to='/login' className={location === "/" || location === "/about" ? 'nav-link' : 'nav-link text-dark'}>Login</Link> 
                    </> }
                    {token && <>
                      <Link to='/departments' className={location === "/" || location === "/about" ? 'nav-link' : 'nav-link text-dark'}>Departments</Link>
                      <Link to='/appointments' className={location === "/" || location === "/about" ? 'nav-link' : 'nav-link text-dark'}>Appointments</Link>
                      <Button style={{color: "#A9A9A9",textTransform: "none", fontWeight:"400",}}
                        className={location === "/" || location === "/about" ? 'nav-link' : 'text-dark nav-link'}                       onClick={() => {
                        localStorage.removeItem('token');
                        localStorage.removeItem('name');
                        localStorage.removeItem('email');
                        navigate('/');
                      }}>Logout</Button>
                      </>}
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
