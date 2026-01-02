const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    name:{

        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    instructor:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    whatyoulearn:{
        type:String,
        required:true
    },
    coursecontent:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Section'
    }],
    price:{
        type:Number,
        required:true
    },
    thumbnail:{
        type:String,
        default:null
    },
    tag:{
       type:mongoose.Schema.Types.ObjectId,
       ref:'Tag'
    },
    studentenrolled:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }]

    

},{
    timestampes:true
})
module.exports = mongoose.model('Course',courseSchema);