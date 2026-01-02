const mongoose = require('mongoose');

const subSectionSchema = new mongoose.Schema(
    {
        title:{
            type:String,
            required:true
        },
        timeduration:{
            type:String,
            required:true
        },
        videourl:{
            type:String,
            required:true
        },
        description:{
            type:String,
            required:true

        }
        
        
    },
    {
        timestampes:true
    }


)

module.exports = mongoose.model('subSection',subSectionSchema);
