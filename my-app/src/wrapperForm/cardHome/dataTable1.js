import React,{useState,useEffect} from "react";
import axios from "axios";



function DataCardFunction () {
  
    const  [data, setData] = useState([])

    useEffect(()=>{
     
        axios.get("http://localhost:9000/datashop")
        .then(res=>{setData(res.data.filter(word =>{
            return( word => word.length < 6)
        }))})

    },[])



    return(
        <div className="datacardinp"> 
          <div className="dataCard" >   
            <div className="datacar1">

                {
                    data.map((data , l)=>{
                        return(
                            <a href={"/home/techniquenav/product/"+ data._id} key={l} className="card">
                            <div className="cardCantrol" >
                                <h2>{data.shopnames}</h2>
                                <div style={{backgroundImage:`url(${data.src})`,backgroundSize:"cover"}} className="cardStory">
                                </div>
                                <spn>{data.buy}.000AMD</spn>
                                <p>{data.info}</p>

                            </div>
                            </a>
                        )
                    })
                }
         
        
             </div>   
           </div>
        </div> 
    )
}

export default DataCardFunction;