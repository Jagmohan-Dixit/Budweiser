import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import axios from "axios";
import { TextField, Table, TableBody, TableCell, TableHead, TableRow, TableContainer, Button } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';

const Appointments = () => {
    const [currentdata, setCurrentdata] = useState();
    const [data, setData] = useState([]);
    const [query, setQuery] = useState();
    const name = localStorage.getItem('name');
    const token = localStorage.getItem('token');
    const navigate = useNavigate();
    
    const getData = async () => {
        const res = await axios.get(`https://asphaltapi1.onrender.com/appointments/${name}`,{
            headers : {
                'Authorization': token
            }
        })
        .then(function (response) {
            setData(response.data);
            setCurrentdata(response.data);
        }).catch(function(err) {
            console.log(err);
        });
    }

    const handleDelete = async (e, id) => {
        e.preventDefault();
        const res = await axios.delete(`https://asphaltapi1.onrender.com/appointment/${id}`, {
            headers: {
              'Authorization': token
            }
          })
        .then(function (response) {
            var arr = data;
            arr = arr.filter(function (val) {
                return val._id != id;
            })
            setData(arr);
            setCurrentdata(arr);
        }).catch(function (err) {
            console.log(err);
        })
    }

    const handleQuery = (e) => {
        e.preventDefault();
        setQuery(e.target.value);
        const arr = currentdata?.filter(post => {
         if (e.target.value === "") return post;
            return post?.doctor?.toLowerCase().includes(e.target.value.toLowerCase())
        })
        setData(arr);
    }

    useEffect(() => {
        getData();
        const token = localStorage.getItem('token');
        if(!token) navigate('/');
    },[])

  return (
    <div className='appointment'>
        <Navbar />
        <div >
        <div style={{display:"flex", justifyContent:"center", marginTop: "20px"}}>
            <h1 className='appointment-heading'>Your Appointments</h1>
          </div>
        <div style={{padding: "30px"}}>
            <div>
                <TextField label="Search Appointment" variant="standard" value={query}
                    className='inputBox' style={{marginBottom: "1vw"}}
                    onChange={(e) => handleQuery(e)} />
            </div>
        <TableContainer>
          <Table>
           <TableHead>
             <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Doctor's Name</TableCell>
                <TableCell>Department</TableCell>
                <TableCell>Delete Appointment</TableCell>
              </TableRow>
           </TableHead>
        <TableBody>
        {data?.map((item) => {
            return (
                <TableRow>
                    <TableCell>{item._id}</TableCell>
                    <TableCell>{item.doctor}</TableCell>
                    <TableCell>{item.department}</TableCell>
                    <TableCell>
                        <Button  variant="contained" color='primary' 
                        className='button' onClick={(e) => handleDelete(e, item._id)}>Delete</Button>
                    </TableCell>
                </TableRow>
            )
        })}
        </TableBody>
        </Table>
        </TableContainer>
        {!data.length && <div style={{display:"flex", padding:"20px", justifyContent:"center",alignItems:"center"}}>
            <h2>No Doctor name contains <span style={{color:"red"}}>{query}</span></h2>
            </div>}
        </div>
        <Footer />
        </div>
    </div>
  )
}

export default Appointments;