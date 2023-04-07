const Appointment = require('../model/AppointmentModel');

// connecting to database
require('../db/conn');


const CreateAppointment = async (req, res) => {
    try {
        const { id, name, email, department, doctor, phoneno } = req.body;
        const exist = await Appointment.find({$and : [{name: name}, {doctor: doctor}]});
        console.log(exist);
        if(exist.length !== 0) return res.status(201).json({data: exist, msg: "You have already taken Appointment"});
        const newAppointment = new Appointment({doctor, department, name, email, phoneno });
        await newAppointment.save();
        console.log(newAppointment);
        return res.status(200).json({data: newAppointment, msg: "New Appointment Added"});
    } catch(err) { 
        console.log(err);
        res.status(400).json(err);
    }  
}

const GetAppointmentbyID = async (req, res) => {
    try {
        const { id } = req.params;
        const appointment = await Appointment.findOne({_id : id});
        console.log(appointment);
        return res.status(200).json(appointment);
    } catch(err) { 
        console.log(err);
        res.status(400).json(err);
    }  
}

const DeleteAppointmentbyID = async (req, res) => {
    try {
        const { id } = req.params;
        console.log(id);
        const appointment = await Appointment.deleteOne({_id : id});
        if(appointment.deletedCount == 0) 
            return res.status(400).json({"msg":"Appointment Not Found"});
        return res.status(200).json({data: appointment, msg : "Appointment Deleted Successfully"});
    } catch(err) { 
        console.log(err);
        res.status(400).json(err);
    }  
}

const UpdateAppointmentbyID = async (req, res) => {
    try {
        const { id, name, email, department, doctor, phoneno } = req.body;
        const Appointment = await Appointment.findOne({_id : id});
        if(!Appointment) res.status(400).json({"msg":"Appointment Not Found"});
        Appointment.name = name;
        Appointment.doctor = doctor;
        Appointment.department = department;
        Appointment.email = email;
        Appointment.phoneno = phoneno;
        await Appointment.save();
        console.log(Appointment);
        return res.status(200).json(Appointment);
    } catch(err) { 
        console.log(err);
        res.status(400).json(err);
    }  
}

// Gettting All Appointment From Database

const GetAllAppointment = async (req, res) => {
    try {
        const { name } = req.params;
        const allAppointment = await Appointment.find({name: name});
        console.log(allAppointment);
        return res.status(200).json(allAppointment);
    } catch(err) { 
        console.log(err);
        res.status(400).json(err);
    }   
};

const AllAppointment = async (req, res) => {
    try {
        const allAppointment = await Appointment.find();
        console.log(allAppointment);
        return res.status(200).json(allAppointment);
    } catch(err) { 
        console.log(err);
        res.status(400).json(err);
    }   
};

module.exports = { GetAppointmentbyID, DeleteAppointmentbyID, UpdateAppointmentbyID, CreateAppointment, GetAllAppointment, AllAppointment};