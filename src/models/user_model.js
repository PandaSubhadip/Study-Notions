const moongoose = required ('mongoose');

const userSchema = new moongoose.Sechema({
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
        type:moongoose.Sechema.Typese.objectId,
        ref:'Profile'
    },
    course:[{
        type:moongoose.Sechema.Typese.objectId,
        ref:'Course'
    }],
    Image:{
        type:String,
        default:null
    },
    courseProgress:[{
        type:moongoose.Sechema.Typese.objectId,
        ref:'coursePogress'
    }]




   
    
},{
    timeStamps:true
});
module.exports = moongoose.model('User',userSchema);
