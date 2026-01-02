const moongoose = require('mongoose');

const userSchema = new moongoose.Schema({
    firstName: {
        type: String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    email: {
        type: String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true
    },
  
    accountType:{
        type:String,
        enum:['user','admin','instructor'],

    },
    additionalDetails:{
        type:moongoose.Sechema.Types.objectId,
        ref:'Profile'
    },
    course:[{
        type:moongoose.Sechema.Types.objectId,
        ref:'Course'
    }],
    Image:{
        type:String,
        default:null
    },
    courseProgress:[{
        type:moongoose.Sechema.Types.objectId,
        ref:'coursePogress'
    }]




   
    
},{
    timeStamps:true
});
module.exports = moongoose.model('User',userSchema);
