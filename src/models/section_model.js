const mongoose = require('mongoose');

const sectionSchema = new mongoose.Schema (
    {
        section:{
            type:String,
            required:true
        },
        subsection:[{
            type:mongoose.Schema.Types.ObjectId,
            ref:'subSection'
        }]
    }
)
module.exports = mongoose.model('section',sectionSchema);