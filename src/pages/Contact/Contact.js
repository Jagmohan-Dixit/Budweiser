import React from 'react';
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { Box, Button, Grid, Typography } from '@material-ui/core';
import { Done } from '@material-ui/icons';
import doctors from "../../Assets/homebackground.jpg";

const Contact = () => {
  return (
    <div>
    <Navbar />
    <div className='' style={{alignItems: "center"}}>
      <img src={doctors} width='100%' height='400px' />
      <div style={{position:"absolute",top: "50%", left: "50%",transform: "translate(-50%, -50%)"}}>
        <h1 style={{color:"black", fontSize: "3.5rem", textShadow: "2px 2px 4px #f2f3f3"}}>Contact Us</h1>
      </div>
    </div>
    <div style={{marginBottom: "30px", padding:"30px"}}>
    <Grid container>
      <Grid style={{display:"flex", justifyContent:"center"}} container item lg={5} md={5} sm={12} xs={12}>
        <Grid className='aboutbg' item lg={12} md={12} sm={10} xs={10}>
        </Grid>
      </Grid>
      <Grid item lg={7} md={7} sm={12} xs={12} style={{paddingInline : "40px"}}>
        <Typography>
          <Typography variant='h3' style={{fontWeight: "600"}}>
            Welcome to <span className='gradientText'>Asphalt Hospital</span>
          </Typography>
          <Typography variant='h6' style={{marginBlock: "15px"}}>
            <Done color='primary' /> Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
          </Typography>
          <Typography variant='h6'>
            <Done color='primary' />Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
          </Typography>
          <Typography variant='h6' style={{marginBlock: "15px"}}>
            <Done color='primary' />A small river named Duden flows by their place and supplies it with the necessary regelialia.
          </Typography>
        </Typography>
        <Typography style={{display: "flex", justifyContent: "space-between"}}>
        <Typography className='border border-2 rounded-2 border-primary p-3'>
          <Typography className='btnParent'>3000</Typography>
          <Typography className='btnParent'>Happy Customers</Typography>
        </Typography>
        <Typography className='border border-2 rounded-2  border-primary p-3'>
          <Typography className='btnParent'>2200</Typography>
          <Typography className='btnParent'>Performed Treatment</Typography>
        </Typography>
        <Typography className='border border-2 rounded-2  border-primary p-3'>
          <Typography className='btnParent'>8</Typography>
          <Typography className='btnParent'>Years of Experience</Typography>
        </Typography>
        </Typography>
      </Grid>
    </Grid>
  </div>

    <Footer />
</div>
  )
}

export default Contact