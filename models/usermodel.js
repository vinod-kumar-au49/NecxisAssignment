const mongoose = require('mongoose');
const { Schema } = require('mongoose')

const userSchema = new Schema ({
    name: {
        type: String,
        required: true,
        maxLength: 25
      },
      
      description: {
        type:String,
        maxlength:50,

      },
      image:{
        type:String,
        FileSizeInBytes : 5000
      }

})

const UserModel = mongoose.model('users',userSchema) 
module.exports = UserModel