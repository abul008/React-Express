import { SUCSSES_FROM_IMGGET,ERROR__FROM_IMGGET,WAIT_FROM_IMGGET } from "./actionType";
const intial_state={
    data: [],
    error: "",
    loader: true,
    page: 1 , 
}
 const reducer=(state = intial_state, action)=>{
    switch(action.type){
        case SUCSSES_FROM_IMGGET:
            return{
                ...state,
                loader: false,
                page:state.page +1,
                data:[...state.data,...action.payload]
            }
        case WAIT_FROM_IMGGET:
            return{
                ...state,
                loader:true
            };
        case ERROR__FROM_IMGGET:
            return{
                ...state,
                error: action.payload,
                loader: true
            };
            default:
                return{...state};
    }
}
export default reducer;