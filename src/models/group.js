const mongoose = require('mongoose');

const groupSchema = new mongoose.Schema({
    name : {
        type:String,
    },
    isPersonal : {
        type:Boolean,
    },
    users :[
        {
            type:mongoose.Schema.Types.ObjectId
        }
    ],
    profileImg : {
        type:String
    },
    messages : [
        {
            type:mongoose.Schema.Types.ObjectId
        }
    ]
});

const Group = mongoose.model('Group',groupSchema);

module.exports = Group;