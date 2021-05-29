const mongoose = require("mongoose")
const usersSchema =  mongoose.Schema({
username:{
    type:String,
  },
  email_address:{
    type:String, 
  },
phone_number:{
    type:String, 
  },
  created: {
    type: Date,
    default: Date.now
}
  
})
var User = module.exports = mongoose.model('User', usersSchema);



