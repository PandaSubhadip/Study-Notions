const mongoose = require('mongoose');
const mailservice = require('../services/mail_service')

const otpSchema = new mongoose.Schema ({
    email:{
        type:String,
        required:true,
        unique:true
    },
    otp:{
        type:String,
        required:true,
        unique:true
    },
    createdAt:{
        type:Date,
        default:Date.now,
        expires:300
    }

})

// send verification email function

const  sendMail  = async(email,otp)=>{
    try{
    const mailsender = await mailservice(email,'Verifiction Mail from Study Point',otp);
    console.log(`Mail sent sucessfull ${mailsender}`);
    }catch (error){
        console.log(`eror into otp model fumction ${error}`);
    }
}
// pre middlewear  use
otpSchema.pre('save',async function (next) {
   await sendMail (this.email,this.otp);
   next();
    
})


module.exports = mongoose.model('Otp',otpSchema);