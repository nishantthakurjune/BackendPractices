const express = require('express');
const mongoose = require('mongoose')
const UserModel = require('../models/userSchema');


//get all user
const getUserModels = async(req, res)=>{
    const user = await UserModel.find({}).sort({createdAt: -1})
    res.status(200).json(user)
}


// get a single user
const getUserModel = async(req, res)=>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'no such user'})
    }
    const user = await UserModel.findById(id)
    if(!user){
        return res.status(404).json({error: "No user found"})
    }
    res.status(200).json(user);
}


//create a new user
const addElement = async (req, res)=>{
    const {college, job, home} = req.body;
    
    //add doc to database
    try{
        const schema = await UserModel.create({college, job, home})
        res.status(200).json(schema)
    }catch(error){
        res.status(400).json({error: error.message})
    }
}


//delete a new user
const deleteUser = async (req, res)=>{
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "No Such User"})
    }
    const user = await UserModel.findOneAndDelete({_id: id});
    if(!user){
        return res.status(404).json({error: "User not found"})
    }
    res.status(200).json(user)
}

//update user
const updateUser = async(req, res)=>{
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "No such User"})
    }

    const user = await UserModel.findOneAndReplace({_id: id});
    if(!user){
        return res.status(404).json({error: "User not found"})
    }
    res.status(200).json(user);
}


module.exports = {
    addElement,
    getUserModel,
    getUserModels,
    deleteUser,
    updateUser
}