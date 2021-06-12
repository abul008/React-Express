const mongoose = require("mongoose");
const Scheman = mongoose.Schema;
const mgSchema = new mongoose.Schema({
     name:String,
     message:String,
     usersid: String
});
const schema = mongoose.Schema({  
     name: String,                 
     src: String,
     buy: Number,
     shopnames:String,
     cash: Number,
     color: Number,
     whereabouts:String,
     description:String,
     other:String,
     info:String,
     file:String,

})

const loginschema = mongoose.Schema({
     firstname: String,
     lastname: String,
     reg_email:String,
     reg_passwd:String,
     gender:String,
     month:String,
     good:Number,
     dey:Number,
     condition:Boolean
     
})

const Model = mongoose.model("items",schema) ;
const Login = mongoose.model("logins",loginschema);
const Msg = mongoose.model('msg' , mgSchema)


module.exports = {Msg,Login,Model}

