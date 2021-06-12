import React,{useState,useEffect} from "react";
import axios from "axios";
import {useSelector} from "react-redux"
// import {useParams} from  "react-router-dom";
import "./productShop.css";
import datas from "../../shop.json";
import { BsChevronLeft ,BsChevronRight ,BsChevronDoubleDown } from "react-icons/bs";


 const ProductShop=({match})=>{

     
    // const productLink = useSelector(state=>state.count.productLink)
    const productLink = useSelector(state=>state.count.productLink);
    // const {id} = useParams()
    const [iddata ,setIddata] = useState()
    const [datashop, setDatashop] = useState([])
    const [radiochange ,setRadiochange] = useState("black")
    const [radiochange1 ,setRadiochange1] = useState("black")
    const [radiochange2 ,setRadiochange2] = useState("black")
    const [margintop , setMargintop] = useState(true)
    const [ubdate , setUbdate] = useState(true)
 
  
    useEffect(async()=>{
    await  axios.get(`http://localhost:9000/datashop/${match.params.undefined}`)
     .then(res=>setIddata(res.data));
    },[])
    useEffect(()=>{
       axios.get("http://localhost:9000/datashop")
       .then(res=>setDatashop(res.data.reverse()))
    },[]) 
    
    return(
        <div className="productWrapper">
            <div className="productWrapperCantrol">
           <div className="productImage">
          <div className="productImagebackground">
                  <div id="img1" style={{backgroundImage:`url(${iddata ? iddata.src : null})`}}  className="prodctImage1"></div>
                  <div id="img2" className="prodctImage1" ></div>
                  <div id="img3" className="prodctImage1" ></div>
             </div>
           <div className="ProductimgScrollHreaf">
               <a href="#img1"><div onClick={()=>{setRadiochange("red");setRadiochange1("black");setRadiochange2("black")}} style={{background:radiochange}} id="radius"></div></a>
               <a href="#img2"><div onClick={()=>{setRadiochange("black");setRadiochange1("red");setRadiochange2("black")}} id="radius" style={{background:radiochange1}}></div></a>
               <a href="#img3"><div onClick={()=>{setRadiochange("black");setRadiochange1("black");setRadiochange2("red")}} id="radius" style={{background:radiochange2}}></div></a>
           </div>  
          </div>
           <div className="productInfo">
                <div className="praductinformation">
                <div className="praductInformationCanotrol">
                   <div className="titleAndUpdate">
                    <h2>{iddata ? iddata.shopnames : null} </h2>
                    <button onClick={()=>setUbdate(false)}>ubdate</button>
                    </div> 
                    <span>Price {iddata ? iddata.buy : null}00 AMD</span>
                    <a href="#"> location: {iddata ? iddata.whereabouts : null}</a>
                </div> 
                    <p>{iddata ? iddata.info : null}</p>
                </div>

             <div style={{display:ubdate ? "none" : "flex"}} className="ubdateForm">
              <form action="http://localhost:9000/ubdate" method="post"  >
                  <div className="formTirleAndCloss">
                      <h2>Update and delete</h2>
                      <span onClick={()=>setUbdate(true)}><img src="https://cdn.icon-icons.com/icons2/1674/PNG/512/close_111152.png" style={{width:"25px"}} /></span>
                  </div>
                       <select style={{display:"none"}} onClick={(e)=>{console.log(e.target.name,e.target.value)}}  name="name">
                          { datas.texnika.map((data)=>{return(<option>{data.nameT}</option> )})}
                       </select>
             <div className="inputUbdate">   
                 <div className="ubdateForm1.5">    
                      <input name="id"     type="hidden" value={iddata ? iddata._id : null} />
                      <input type="text"    name="src" placeholder="tmg_url" />
                      <input type="text"    name="shopnames" placeholder="model" />
                      <input type="number"  name="buy" placeholder="buy" />
                      <input  type="number" name="cesh" placeholder="cash" />
                 </div> 
                 <div className="ubdateForm3">    
                      
                      <input type="text"    name="Monthly" placeholder="Monthly" />
                      <input type="text" name="whereabouts" placeholder="Whereabouts" />
                      <input type="text" name="description" placeholder="Description" />
                      <input  name="info"  type="text" /> 
                 </div>    
             </div>      
                       
                 <div  id="ubdateButton">
                      <button style={{background:"lime"}}>update</button> 
                      <button type="submit" formaction="http://localhost:9000/delete" style={{background:"red"}}>delet</button>
                 </div>
              </form>
         </div> 
           </div>
         </div>
         {/* <div className="oteherTop">
             <div className="otherTopAll" onClick={fun}>     
             similar products
             <BsChevronDoubleDown/>  
          </div>
         </div> */}
           
         
        <div className="otherPraducts" style={{top:margintop ? "0px" : "0px"}}> 
          <div className="OtherPraductsScroll">
              {
                  datashop.map((data)=>{
                    return(
                        <div  className="oteherPraductsScrollCard"><a  style={{background:`url(${data.src})`,backgroundSize:"cover"}}  href="#">
                        <span>
                        </span> 
                                    <div className="oteherPraductName">
                                      {data.shopnames} 
                          </div>                        
                        </a>
                        </div>
                    )
                })
              }
            </div>    
        </div>
              
               
        </div>
    )
}

export default ProductShop;