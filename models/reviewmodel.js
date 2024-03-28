const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const reviewSchema =  new Schema ({
    userName: String,
    Comment:{
        type:String,
        maxlength:100,
        default:0
    },
    likes : {
        type:Number,
        default:0
    },
    userID: {
        type: mongoose.SchemaTypes.ObjectId,
        
        ref: 'reviews'
      }

})

const ReviewModel = mongoose.model('reviews',reviewSchema)
module.exports = ReviewModel