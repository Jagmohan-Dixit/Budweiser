import React, {useEffect} from 'react';
import "./Departments.css";
import Doctorcard from '../../components/DoctorCard/Doctorcard';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { Grid } from '@material-ui/core';
import {Doctorsdata} from "../../Data/Doctorsdata";
import { useNavigate } from 'react-router-dom';

const Departments = () => {
  console.log(Doctorsdata[0]);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if(!token) navigate('/');
  },[])

  return (
    <div>
      <Navbar />
      <div style={{padding: "30px",}} className='department'>
      <div>
          <div style={{display:"flex", justifyContent:"center", marginBlock: "20px"}}>
            <h1 className='gradientText'>Surgical Department</h1>
          </div>
           <Grid container spacing={5} style={{display:"flex", justifyContent:"center"}}>
            {Doctorsdata[0].SurgicalDepartment.map((item) => {
              return (
                <Doctorcard data={item} department="surgicaldepartment"/>
              )
            })}
          </Grid>
        </div>

        <div style={{marginTop: "70px"}}>
          <div style={{display:"flex", justifyContent:"center", marginBlock: "20px"}}>
            <h1 className='gradientText'>Cardiology Department</h1>
          </div>
           <Grid container spacing={5} style={{display:"flex", justifyContent:"center"}}>
            {Doctorsdata[0].CardiologyDepartment.map((item) => {
              return (
                <Doctorcard data={item} department="cardiologydepartment"/>
              )
            })}
          </Grid>
        </div>

        <div style={{marginTop: "70px"}}>
          <div style={{display:"flex", justifyContent:"center", marginBlock: "20px"}}>
            <h1 className='gradientText'>Neurology Department</h1>
          </div>
           <Grid container spacing={5} style={{display:"flex", justifyContent:"center"}}>
            {Doctorsdata[0].NeurologyDepartment.map((item) => {
              return (
                <Doctorcard data={item} department="neurologydepartment"/>
              )
            })}
          </Grid>
        </div>

        <div style={{marginTop: "70px"}}>
          <div style={{display:"flex", justifyContent:"center", marginBlock: "20px"}}>
            <h1 className='gradientText'>Gynecology Department</h1>
          </div>
           <Grid container spacing={5} style={{display:"flex", justifyContent:"center"}}>
            {Doctorsdata[0].GynecologyDepartment.map((item) => {
              return (
                <Doctorcard data={item} department="gynecologydepartment"/>
              )
            })}
          </Grid>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Departments;