import {ORDER_ADD,COUNTER_ADD,COUNTER_REMOVE,CLICK_BOTTOM,ADD_GUMAR,MINUS,PRODUCT_LINK,WEATER_DISPLAY} from "./actiontype";
const initialState = { 
    counter: 0,
    order: [], 
    click: "",
    gumar: 0 ,
    minus: 0 ,
    linkProduct:" ",
    weater: false,
}
const shopCaunterAdd=(state=initialState,action)=>{
        
        switch(action.type){
            case ORDER_ADD:
                return{
                    ...state,
                    order:[...state.order,action.payload]
                }
            case COUNTER_ADD:
                return{
                    ...state,
                    counter:state.counter + 1
                }    
            case COUNTER_REMOVE:
                return{
                    ...state,
                    counter: state.counter - 1 
                } 
            case CLICK_BOTTOM:
                return{
                    ...state,
                    click: action.payload
                }    
            case ADD_GUMAR:
                return{
                    ...state,
                    gumar: parseInt(state.gumar + action.payload)
                }
            case MINUS:
                return{
                    ...state,
                    gumar:parseInt(state.gumar - action.payload)
                }    
            case PRODUCT_LINK:
                return{
                    ...state,
                    linkProduct:action.payload
                }  
            case WEATER_DISPLAY:
                return{
                    ...state,
                    weater:action.payload

                }    
             default:
                 return state      
        }
}
export default shopCaunterAdd;