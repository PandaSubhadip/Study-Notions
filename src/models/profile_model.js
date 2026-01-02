const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
    gender:{
        type:String,
        enum:['male ','female','others'],
         required:true

    },
    dateOfBirth:{
        type:String,
        required:true

    },
    about:{
        type:String,
         required:true

    },
    phonNumber:{
        type:String,
         required:true

    }
},
    
    
    {
    timestamps:true
})

module.exports = mongoose.model('Profile',profileSchema);