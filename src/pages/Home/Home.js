import React from 'react';
import "./Home.css";
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import family from "../../Assets/family.avif";
import { Button, Grid, Typography } from '@material-ui/core';
import { Done } from '@material-ui/icons';
import { useNavigate } from 'react-router-dom';
import video from "../../Assets/bgvideo.mp4";

const Home = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  console.log(token);
  
  
  return (
    <div>
      <div style={{position:"fixed"}}>
         <video autoPlay muted loop src={video} style={{width:"100%", height: "100%"}} />
      </div>
      <div style={{position: "absolute"}}>
        <div>
          <Navbar />  
         <Grid>
          <Grid item lg={7} md={7} sm={12} xs={12} style={{padding : "40px"}}>
            <Typography variant='h3' style={{fontWeight: "600", color: "whitesmoke"}}>
              The <span className='gradientText'>Right</span> Care When You Need It Most
            </Typography>
            <Typography variant='h6' style={{marginBlock: "25px", color: "white"}}>
              Talk to a doctor, therapist or medical expert anywhere you are by phone or video.
            </Typography>
            {!token && <Grid item lg={6} md={5} sm={5} xs={8}>
              <Button variant='contained' color='primary' onClick={() => navigate('/login')}
              style={{width: "100%", padding: '10px'}}>
                Get Started Now
            </Button>
            </Grid>}
          </Grid>
          <Grid item lg={5} md={5} sm={0} xs={0}>
          </Grid>
        </Grid>
      </div>

      <div style={{marginBottom: "30px", paddingInline:"30px"}}>
        <Grid container>
          <Grid style={{display:"flex", justifyContent:"center"}} container item lg={5} md={5} sm={12} xs={12}>
            <Grid className='homebg' item lg={12} md={12} sm={10} xs={10}>
            </Grid>
          </Grid>
          <Grid item lg={7} md={7} sm={12} xs={12} style={{padding : "40px"}}>
            <Typography variant='h3' style={{fontWeight: "600", color:"whitesmoke"}}>
              It’s the detail that makes the <span className='gradientText'>Difference</span>
            </Typography>
            <Typography variant='h6' style={{marginBlock: "15px", color:"whitesmoke"}}>
               <Done color='primary' /> Combining exceptional knowledge and experience with the latest in ophthalmic technology, we provide complete eye care across multiple specialities
            </Typography>
            <Typography variant='h6' style={{color:"whitesmoke"}}>
              <Done color='primary' /> Read more about our deep expertise in areas like cataract, refractive error correction with laser, glaucoma management, squint and others.
            </Typography>
          </Grid>
        </Grid>
      </div>

      <div style={{marginBottom: "30px", paddingInline:"30px"}}>
        <Grid container >
          <Grid item lg={7} md={7} sm={12} xs={12} style={{padding : "40px"}}>
            <Typography variant='h3' style={{fontWeight: "600", color:"whitesmoke"}}>
              Our <span className='gradientText'>Secret</span> to great virtual care is great doctors
            </Typography>
            <Typography variant='h6' style={{marginBlock: "15px", color:"whitesmoke"}}>
               <Done color='primary' /> To learn more about COVID-19 and how Teladoc can help, explore the frequently asked questions
            </Typography>
            <Typography variant='h6' style={{color:"whitesmoke"}}>
              <Done color='primary' /> Before your first virtual care visit, set up your account online or on the app and then complete a brief medical history (it will help your doctor treat or advise you better)
            </Typography>
          </Grid>
            <Grid style={{display:"flex", justifyContent:"center"}} container item lg={5} md={5} sm={12} xs={12}>
              <Grid className='doctors' item lg={12} md={12} sm={10} xs={10}>
              </Grid>
            </Grid>
          </Grid>
      </div>
      <Footer />
    </div>
    </div>
  )
}

export default Home;