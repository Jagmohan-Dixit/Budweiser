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
            <Done color='primary' /> Thank you for your interest in Asphalt Hospital. We welcome any questions or feedback you may have and are committed to providing prompt and courteous service.
          </Typography>
          <Typography variant='h6'>
            <Done color='primary' />Asphalt Hospital is open 24 hours a day, seven days a week. Please note that some departments, such as the billing department, may have different hours of operation
          </Typography>
          <Typography variant='h6' style={{marginBlock: "15px"}}>
            <Done color='primary' />For specific department doctors, please visit our Department page.
          </Typography>
        </Typography>
        <Typography style={{display: "flex", justifyContent: "space-between"}}>
        <Typography className='border border-2 rounded-2 border-primary p-3'>
          <Typography className='btnParent'>Email</Typography>
          <Typography className='btnParent'>info@asphalt.com</Typography>
        </Typography>
        <Typography className='border border-2 rounded-2  border-primary p-3'>
          <Typography className='btnParent'>Contact</Typography>
          <Typography className='btnParent'>+91 9964836623 </Typography>
        </Typography>
        <Typography className='border border-2 rounded-2  border-primary p-3'>
          <Typography className='btnParent'>Address</Typography>
          <Typography className='btnParent'>123 Main Street, Anytown</Typography>
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


// Contact Information:

// Main Phone Number: 555-1234
// Emergency Department: 555-5678
// Billing Department: 555-9012
//  Address: 
// Physical Address: 