const mongoose = required('mongoose');

const coursePogressSchema = new mongoose.Schema(
    {
        courseId:{
            type: mongoose.Schema.Typese.objectId,
            ref:'Course',
        },
        completeVideos:[{
            type:mongoose.Schema.Typese.objectId,
            ref: 'subSection'
        }]

        

    },
    {
        timestampes:true
    }
)