import React, { useEffect } from "react";
import "./Profile.css"
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import profile from "../../Assets/raj.jpg";
import { Grid } from "@material-ui/core";
import { Email, Instagram, LinkedIn, ContactPhone } from "@material-ui/icons";
import { Link } from "react-router-dom";

const Profile = () => {
    const token = localStorage.getItem("token");
    const name = localStorage.getItem("name");
    const email = localStorage.getItem("email");
    const picture = localStorage.getItem("picture");

  return (
    <div>
      <Navbar />
     {token && <div style={{display: "flex", justifyContent: "center", padding: "30px" }}>
        <Grid item lg={5} md={5} sm={7} xs={10}  className="profile-card" style={{ padding: "20px", borderRadius: "25px"}}>
            <div style={{display: "flex", justifyContent: "center", marginBottom: "20px"}}>
              <h1 style={{color:"white", textShadow: "3px 3px 4px #000000"}}>User Profile</h1>
            </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img className="border border-primary border-3 rounded-circle profile-image" src={picture ? picture : profile} width="200px" height="200px" />
          </div>
          <div style={{alignItems: "center",
              marginTop: "20px"}}>
            <div style={{display: "flex", justifyContent: "center", color:"white"}}>
              <h2>{name}</h2>
            </div>
            <div style={{display: "flex", justifyContent: "center", color:"white", marginTop: "0.5vw"}}>
               <h5>{email}</h5>
            </div>
            <div style={{display: "flex", justifyContent: "center", color:"white", marginTop: "0.2vw"}}>
               <h5>+91 7618579183</h5>
            </div>
            <div style={{display: "flex", justifyContent: "center", color:"white"}}>
               <h5> New Delhi</h5>
            </div>
          </div>
          <div style={{display:"flex", justifyContent:"center",marginTop:"20px"}}>
            <div style={{display:"flex", justifyContent:"space-around",width:"50%"}}>
                <ContactPhone className="social-icons" />
                <Instagram className="social-icons" />
                <LinkedIn className="social-icons" />
                <Email className="social-icons" />
            </div>
          </div>
        </Grid>
      </div>}

      {!token && <div style={{display:"flex", justifyContent:"center", alignItems:"center", padding: "40px"}}>
        <div>
          <h2>You are not Logged In!!!</h2>
          <div className='btnParent' style={{marginTop: "2vw"}}>
            <Link to='/login' className="btn btn-primary">
              Login
            </Link>
          </div>
        </div>
      </div>}
      <Footer />
    </div>
  );
};

export default Profile;
