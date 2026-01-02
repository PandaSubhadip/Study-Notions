const mongoose = require('mongoose');
const ratingSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    rating:{
        type:String,
        required:true

    },
    review:{
        type:String,
        required:true
    }
},{
    timestampes:true
})

module.exports = mongoose.model('rating',ratingSchema);