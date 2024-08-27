const Service = require("../models/service-model")

const getService = async(req,res)=>{
    try {
        const service = await Service.find();
        res.status(200).json(service);
    } catch (error) {
        console.error("error at service sontroller",error)
    }
}

module.exports = { getService };