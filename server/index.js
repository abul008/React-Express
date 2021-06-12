const express = require('express');
const cors = require("cors"); 
const bodyParser = require("body-parser").urlencoded({extended:true}); 
const {Msg,Login,Model} = require('./models/messages')
const app = express()
const mongoose = require('mongoose');
const http = require('http').createServer(app);
const io = require("socket.io")(http)
const nodemailer = require("nodemailer");
const {MongoClient, ObjectID} = require("mongodb"); 
const uploads = require("express-fileupload");
const mongoDB = "mongodb+srv://homeShop:erevan@abul.m5g87.mongodb.net/home_shop?retryWrites=true&w=majority";


mongoose.connect(mongoDB,{useNewUrlParser:true, useUni:true}).then(()=>{
    console.log('connected')
}).catch(err => console.log(err))



app.use(uploads())


app.use(cors({
       origin:"http://localhost:3000" , 
       credentials:true
}));
app.use(express.json())



// app.get("/data/photo", (req,res)=>res.send(arr));
app.post("/creat", bodyParser, async (req, res)=>{
        if (req.body.name !==0 && req.body.src !==0 && req.body.buy !== 0 && req.body.cash !==0 && req.body.Monthly !==0 ) {
            await Model({
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
          
        await Model.findOneAndUpdate({_id:req.body.id},{$set:{
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
       await Model.findOneAndDelete({_id:req.body.id},{$set:{
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
     let persion = await Model.find({})
     res.send(persion)      
       
})

app.get("/datashop/:id", async(req,res)=>{
       let product = await Model.findById(req.params.id)
       res.send(product)
       // res.redirect("http://localhost:3000/home/techniquenav/product/")
})

app.post("/login", bodyParser, async(req,res)=>{
       if(true !==0 && req.body.firstname !==0 && req.body.lastname !==0 && req.body.reg_email !== 0 && req.body.reg_passwd !==0 && req.body.men !==0 && req.body.girl !==0) {
           await Login({
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
              res.redirect('http://localhost:3000/')
       }else{
     
              res.sendStatus(404)
       
       }
})

app.post("/sing",bodyParser, async(req,res)=>{

     await  Login.find({reg_email:req.body.login , reg_passwd:req.body.password},(err,data) =>{
              if(err){
                     throw err
              }
              if(data.length !==0 ){
                     res.send(data) 
              }
    })
     
        
})
app.get("/datashoping",async( req,res)=>{
       let persion = await Login.find({})
       res.send(persion)      
         
  })

app.get("/datashoping/:id" ,async(req,res)=>{
       let userspeople = await Login.findById(req.params.id)
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

 

io.on('connection' ,(socket)=>{

    Msg.find().then(res=>{
        socket.emit('output-messages', res)
        
    })
    socket.on('chat message',(data)=>{
        const message = new Msg({
              message: data.message,
              name: data.name,
              usersid: data.usersid
           });
          message.save().then(()=>{
            io.emit('chat messigeubdate', data)
          })  
          console.log(data)    
    })
})



http.listen(9000, function() {
    console.log('listeninsg on port 4000')
  })