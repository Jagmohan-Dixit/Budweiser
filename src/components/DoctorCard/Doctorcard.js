import { Grid, Typography, Button } from '@material-ui/core'
import React from 'react';
import Doctor from "../../Assets/doctor.jpg";
import "./Doctorcard.css";
import axios from "axios";

const Doctorcard = ({data, department}) => {
    const handleAppointment = async (e) => {
        e.preventDefault();

        const name = localStorage.getItem('name');
        const email = localStorage.getItem('email');
        console.log(name);

        const res = await axios.post("/appointment/new", {
            name: name, email: email, phoneno : "",
            department: department, doctor: data.name,
          }).then(function (res) {
            console.log(res?.data?.data);
            if(res.status === 200) alert("Your Appointment accepted")
            else if(res.status === 201) alert(res?.data?.msg+" with id : "+res?.data?.data[0]?._id)
          })
          .catch(function (error) {
            console.log(error);
          });

    }
    console.log(data);
  return (
    <Grid item lg={3} md={4} sm={6} xs={10} className='main-card'>
      <div style={{backgroundColor: "#963940", padding:"10px", borderRadius: "20px"}}>
        <div className='doctorCard'>
          <img src={data.imagesrc} style={{width: "240px", height: "220px", borderRadius: "10px"}}></img>
        </div>
        <div style={{marginTop: "20px"}}>
          <Typography className='doctorText'>{data.name}</Typography>
          <Typography className='doctorText'>{data.designation}</Typography>
          <div className='doctorText' style={{marginBlock: "10px"}} >
            <Button variant='contained' color='primary' className='bookButton' style={{textTransform: "none", fontSize:"1.08rem"}}
               onClick={(e)=> handleAppointment(e)} >
                Book Appointment
            </Button>
          </div>
        </div>
      </div>
    </Grid>
  )
}

export default Doctorcard