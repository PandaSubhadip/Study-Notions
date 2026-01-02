const mongoose = required('mongoose');

const sectionSchema = new mongoose.Schema (
    {
        section:{
            type:String,
            required:true
        },
        subsection:[{
            type:mongoose.Schema.Typese.objectId,
            ref:'subSection'
        }]
    }
)
module.exports = mongoose.model('section',sectionSchema);