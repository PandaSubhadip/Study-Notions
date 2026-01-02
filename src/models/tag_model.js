const mongoose = required('mongoose');

const tagSchema = new mongoose.Schema ({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },

    course: {
        type:mongoose.Schema.Typeses.objectId,
        ref:'Course'
    }
},{
    timestamps:true
})

module.exports = mongoose.model('Tag',tagSchema);