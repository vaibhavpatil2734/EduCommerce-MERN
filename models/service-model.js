const mongoose = require('mongoose');
const { string } = require('zod');

const serviceSchema = new mongoose.Schema({  
id:Number,
title:String,
description:String,
benefit:String
});

Service = mongoose.model('Service', serviceSchema);

module.exports = Service;