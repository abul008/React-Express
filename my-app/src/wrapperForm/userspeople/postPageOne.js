import React from 'react'


const Postpageone=({posts,loading})=>{

    if(loading){
        return <h2>Loading...</h2>
    }


    return(
       <ul className="list-group mb-4">
      {
          posts.map((data)=>{
              return(
                  <li key={data.id}>
                      {data._id}
                  </li>
              )
          })
      }
       </ul>

    )
}

export default Postpageone;