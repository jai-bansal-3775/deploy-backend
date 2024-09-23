const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    email:{type:String, required:true},
    name: { type: String, required: true },
    description: {type:String,required:true}
});

module.exports = mongoose.model('Item', itemSchema);
