const mongoose = require("mongoose");
const createdTaskModel = require("../models/createtaskmodel");

async function createtask(req, res) {
    const { task, startingdate, endingdate } = req.body;
    try {
        const task = await createdTaskModel.create(req.body);
        res.status(201).json(task);
    } catch (error) {
        res.status(400).json(error)
    }
}
async function updatetask(req, res) {
    try {
        const { id } = req.params
        const task = await createdTaskModel.findByIdAndUpdate({ "_id": id }, req.body, { new: true });
        if (task) { 
            res.status(200).json(task)
        }
        else {
            res.status(400).json({ "message": "record not found" })
        }
    } catch (error) {
        if(error.name === "CastError")
            res.status(400).json({"messages":"invalid id"})
        else{
            res.status(500).json(error)
        }
    } 

}
module.exports = {createtask,updatetask};