import {SUCSSES_FROM_IMGGET,ERROR__FROM_IMGGET,WAIT_FROM_IMGGET} from "./actionType";
import {getImagesService} from "./service" ;

export const imageRequest = (page=0) =>{
    return (dispatch) => {
        dispatch(refresh());
        getImagesService(`https://picsum.photos/v2/list?page=${page}&limit=10`)
            .then(responsi =>{  
                dispatch(request(responsi.data));
            }) 
            .catch(err=>{
                dispatch(failure(err));
            })
    }
    function request(data){
        return{
            type: SUCSSES_FROM_IMGGET,
            payload: data,
        }
    }
    function refresh(){
        return{
            type:WAIT_FROM_IMGGET,
        }
    }
    function failure(error){
            return{
                type:ERROR__FROM_IMGGET,
                payload: error,
            }
    }
}
