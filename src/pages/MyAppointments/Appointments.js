import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import axios from "axios";
import { TextField, Table, TableBody, TableCell, TableHead, TableRow, TableContainer, Button } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';

const Appointments = () => {
    const [currentdata, setCurrentdata] = useState();
    const [data, setData] = useState();
    const [query, setQuery] = useState();
    const name = localStorage.getItem('name');
    const navigate = useNavigate();

    const getData = async () => {
        const res = await axios.get(`/appointments/${name}`)
        .then(function (response) {
            console.log(response);
            setData(response.data);
        }).catch(function(err) {
            console.log(err);
        });
    }

    const handleDelete = async (e, id) => {
        e.preventDefault();
        const res = await axios.delete(`/appointment/${id}`)
        .then(function (response) {
            console.log(response);
            var arr = data;
            arr = arr.filter(function (val) {
                return val._id != id;
            })
            setData(arr);
            setCurrentdata(arr);
        }).catch(function (err) {
            console.log(err);
        })
        console.log(res);
    }

    const handleQuery = (e) => {
        e.preventDefault();
        setQuery(e.target.value);
        console.log(query);
        if(query == "") {
            return setData(currentdata);
        }
        var arr = data?.filter((val) =>
            val?.doctor.startsWith(query)
        )
        console.log(arr);
        setData(arr);
    }

    useEffect(() => {
        getData();
        const token = localStorage.getItem('token');
        if(!token) navigate('/');
    },[])

  return (
    <div>
        <Navbar />
        <div style={{display:"flex", justifyContent:"center", marginTop: "20px"}}>
            <h1 className='gradientText'>Your Appointments</h1>
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
        </div>
        <Footer />
    </div>
  )
}

export default Appointments;