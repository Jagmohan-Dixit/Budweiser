import React from 'react';
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { Box, Button, Grid, Typography } from '@material-ui/core';
import { Done } from '@material-ui/icons';

const About = () => {
  return (
    <div className='record-display'>
        <Navbar />

        {/* <div >
        <div style={{position:"absolute",top: "50%", left: "50%",transform: "translate(-50%, -50%)"}}>
        <h1 style={{color:"white", fontSize: "3.5rem"}}>About</h1>
      </div>
        </div> */}

        <div style={{marginBottom: "30px", padding:"30px"}}>
          {/* <div className='btnParent' style={{marginBottom: "30px"}}>
            <h1 style={{color:"white", fontSize: "3.5rem"}}>About</h1>
          </div> */}
        <Grid container>
          <Grid style={{display:"flex", justifyContent:"center"}} container item lg={5} md={5} sm={12} xs={12}>
            <Grid className='' item lg={12} md={12} sm={10} xs={10}>
            </Grid>
          </Grid>
          <Grid item lg={7} md={7} sm={12} xs={12} style={{paddingInline : "40px"}}>
            <Typography>
              <Typography variant='h3' style={{fontWeight: "600", color:"#F4F3C0"}}>
                Welcome to <span className='gradientText'>Asphalt Hospital</span>
              </Typography>
              <Typography variant='h6' style={{marginBlock: "15px", color:"#F4F3C0"}}>
                <Done style={{color:'#FC3939'}} /> Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
              </Typography>
              <Typography variant='h6' style={{color:"#F4F3C0"}}>
                <Done style={{color:'#FC3939'}} />Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
              </Typography>
              <Typography variant='h6' style={{marginBlock: "15px", color:"#F4F3C0"}}>
                <Done style={{color:'#FC3939'}} />A small river named Duden flows by their place and supplies it with the necessary regelialia.
              </Typography>
            </Typography>
            <Typography style={{display: "flex", justifyContent: "space-between"}}>
              <Typography className='border border-2 rounded-2 border-primary p-3'>
                <Typography className='btnParent' style={{color:"#F4F3C0"}}>3000+</Typography>
                <Typography className='btnParent' style={{color:"#F4F3C0"}}>Happy Customers</Typography>
              </Typography>
              <Typography style={{marginInline: "20px"}} className='border border-2 rounded-2 border-primary p-3'>
                <Typography className='btnParent' style={{color:"#F4F3C0"}}>2200+</Typography>
                <Typography className='btnParent' style={{color:"#F4F3C0"}}>Performed Treatment</Typography>
              </Typography>
              <Typography className='border border-2 rounded-2 border-primary p-3'>
                <Typography className='btnParent' style={{color:"#F4F3C0"}}>Serving</Typography>
                <Typography className='btnParent' style={{color:"#F4F3C0"}}>Patients Since 2010</Typography>
              </Typography>
            </Typography>
          </Grid>
        </Grid>
      </div>

        <Footer />
    </div>
  )
}

export default About