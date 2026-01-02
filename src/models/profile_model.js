const mongoose = required('mongoose');

const profileSchema = new mongoose.Schema({
    gender:{
        type:String,
        enum:['male ','female','others']

    },
    about:{
        type:String,

    },
    phonNumber:{
        type:String,

    }
},
    
    
    {
    timestamps:true
})