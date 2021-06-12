const express = require("express") ;
const cors = require("cors"); 
const mongoose = require("mongoose"); 
const bodyParser = require("body-parser").urlencoded({extended:true}) 
const app = express();
const http = require('http').createServer(app)
const io = require("socket.io")(http)
const nodemailer = require("nodemailer");
const {MongoClient, ObjectID} = require("mongodb"); 
const uploads = require("express-fileupload");



app.use(uploads())


app.use(cors({
       origin:"http://localhost:3000" , 
       credentials:true
}));
app.use(express.json())


let schema = mongoose.Schema({  
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

let loginschema = mongoose.Schema({
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
mongoose.connect("mongodb+srv://homeShop:erevan@abul.m5g87.mongodb.net/home_shop") 

let model = mongoose.model("items",schema) 
let login = mongoose.model("logins",loginschema)

// app.get("/data/photo", (req,res)=>res.send(arr));
app.post("/creat", bodyParser, async (req, res)=>{
        if (req.body.name !==0 && req.body.src !==0 && req.body.buy !== 0 && req.body.cash !==0 && req.body.Monthly !==0 ) {
            await model({
              name:req.body.name,
              src:req.body.src,
              shopnames:req.body.shopnames,
              buy:req.body.buy,
              cesh:req.body.cash,
              color:req.body.Monthly,
              whereabouts:req.body.whereabouts,
              description:req.body.description,
              other:req.body.other,
              info:req.body.info,
              file:req.body.file
            }).save()
         
             switch(req.body.name){
         case "PHONE":
                res.redirect("http://localhost:3000/home/techniquenav/phone") ;
                break;
         case "TV":
            res.redirect("http://localhost:3000/home/techniquenav/tv");
                break;
         case "TABLET":
                res.redirect("http://localhost:3000/home/techniquenav/tablet");
                break; 
         case "WATCH":
                res.redirect("http://localhost:3000/home/techniquenav/watch");
                break; 
         case "COMPUTERS":
                res.redirect("http://localhost:3000/home/techniquenav/computer");
                break; 
         case "ACCESORIES":
                res.redirect("http://localhost:3000/home/techniquenav/accesories");
                break; 
        case "EQUIPMENTS":
                res.redirect("http://localhost:3000/home/techniquenav/equipments"); 
                break; 
        case "PHOTO CAMERAS":
                res.redirect("http://localhost:3000/home/techniquenav/photocameras");
                break; 
        case "Household Appliances":
                res.redirect("http://localhost:3000/home/techniquenav/household");   
                break;                    
        default:
            res.redirect("http://localhost:3000/home");          
      } 
        }
        else{
               res.sendStatus(404)
        } 

})



app.post("/ubdate", bodyParser, async( req , res)=>{
          
        await model.findOneAndUpdate({_id:req.body.id},{$set:{
              name:req.body.name,
              src:req.body.src,
              shopnames:req.body.shopnames,
              buy:req.body.buy,
              cesh:req.body.cash,
              color:req.body.Monthly,
              whereabouts:req.body.whereabouts,
              description:req.body.description,
              other:req.body.other,
              info:req.body.info
       }})
      
       switch(req.body.name){
              case "PHONE":
                     res.redirect("http://localhost:3000/home/techniquenav/phone") ;
                     break;
              case "TV":
                 res.redirect("http://localhost:3000/home/techniquenav/tv");
                     break;
              case "TABLET":
                     res.redirect("http://localhost:3000/home/techniquenav/tablet");
                     break; 
              case "WATCH":
                     res.redirect("http://localhost:3000/home/techniquenav/watch");
                     break; 
              case "COMPUTERS":
                     res.redirect("http://localhost:3000/home/techniquenav/computer");
                     break; 
              case "ACCESORIES":
                     res.redirect("http://localhost:3000/home/techniquenav/accesories");
                     break; 
             case "EQUIPMENTS":
                     res.redirect("http://localhost:3000/home/techniquenav/equipments"); 
                     break; 
             case "PHOTO CAMERAS":
                     res.redirect("http://localhost:3000/home/techniquenav/photocameras");
                     break; 
             case "Household Appliances":
                     res.redirect("http://localhost:3000/home/techniquenav/household");   
                     break;                    
             default:
                 res.redirect("http://localhost:3000/home");          
           } 
})
app.post("/delete",bodyParser, async(req,res)=>{
       await model.findOneAndDelete({_id:req.body.id},{$set:{
}})
switch(req.body.name){
       case "PHONE":
              res.redirect("http://localhost:3000/home/techniquenav/phone") ;
              break;
       case "TV":
          res.redirect("http://localhost:3000/home/techniquenav/tv");
              break;
       case "TABLET":
              res.redirect("http://localhost:3000/home/techniquenav/tablet");
              break; 
       case "WATCH":
              res.redirect("http://localhost:3000/home/techniquenav/watch");
              break; 
       case "COMPUTERS":
              res.redirect("http://localhost:3000/home/techniquenav/computer");
              break; 
       case "ACCESORIES":
              res.redirect("http://localhost:3000/home/techniquenav/accesories");
              break; 
      case "EQUIPMENTS":
              res.redirect("http://localhost:3000/home/techniquenav/equipments"); 
              break; 
      case "PHOTO CAMERAS":
              res.redirect("http://localhost:3000/home/techniquenav/photocameras");
              break; 
      case "Household Appliances":
              res.redirect("http://localhost:3000/home/techniquenav/household");   
              break;                    
      default:
          res.redirect("http://localhost:3000/home");          
    } 
   
   


})

app.get("/datashop",async( req,res)=>{
     let persion = await model.find({})
     res.send(persion)      
       
})

app.get("/datashop/:id", async(req,res)=>{
       let product = await model.findById(req.params.id)
       res.send(product)
       // res.redirect("http://localhost:3000/home/techniquenav/product/")
})

app.post("/login", bodyParser, async(req,res)=>{
       if(true !==0 && req.body.firstname !==0 && req.body.lastname !==0 && req.body.reg_email !== 0 && req.body.reg_passwd !==0 && req.body.men !==0 && req.body.girl !==0) {
           await login({
                firstname:req.body.firstname,
                lastname:req.body.lastname,
                reg_email:req.body.reg_email,
                reg_passwd:req.body.reg_passwd,  
                gender:req.body.gender,
                month:req.body.month,
                good:req.body.good,
                dey:req.body.dey,
                condition: true,
              }).save()
       }else{
     
              res.sendStatus(404)
       
       }
})

app.post("/sing",bodyParser, async(req,res)=>{

     await  login.find({reg_email:req.body.login , reg_passwd:req.body.password},(err,data) =>{
              if(err){
                     throw err
              }
              if(data.length !==0 ){
                     res.send(data) 
              }
    })
     
        
})
app.get("/datashoping",async( req,res)=>{
       let persion = await login.find({})
       res.send(persion)      
         
  })

app.get("/datashoping/:id" ,async(req,res)=>{
       let userspeople = await login.findById(req.params.id)
       res.send(userspeople)
})


  app.post("/sendtomail",bodyParser,async(req,res)=>{
       let transporter = nodemailer.createTransport({
              host: "smtp.mail.ru",
              port: 465,
              secure: true, 
              auth: {
              user: "lessonin@mail.ru",
              pass:  "aDaR3Y8$triO"
              },
            });
        await transporter.sendMail({
              from: '"Fred Foo 👻"<lessonin@mail.ru>', 
              to: 'lessonin@mail.ru', 
              subject: "Order", 
              html: `<b>${req.body.username}</b>
              <b>${req.body.adress}</b>
              <b>${req.body.contact}</b>
              `, 
            });     
  })

http.listen(9000 );