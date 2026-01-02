const mongoose = require('mongoose');

const coursePogressSchema = new mongoose.Schema(
    {
        courseId:{
            type: mongoose.Schema.Types.ObjectId,
            ref:'Course',
        },
        completeVideos:[{
            type:mongoose.Schema.Types.ObjectId,
            ref: 'subSection'
        }]

        

    },
    {
        timestampes:true
    }
)

module.exports = mongoose.model('coursePogress',coursePogressSchema);
