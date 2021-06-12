// import { Link } from "react-router-dom";
import {ORDER_ADD,COUNTER_ADD,COUNTER_REMOVE,CLICK_BOTTOM,ADD_GUMAR,MINUS,PRODUCT_LINK,WEATER_DISPLAY} from "./actiontype";


export const addCounter =(count)=>{
    return{
        type:COUNTER_ADD,
        payload: count
    }
} 

export const orderAdd = (order) =>{
     return{
         type:ORDER_ADD,
         payload: order
     }
}
export const removeCounter = (remcount)=>{
    return{
        type:COUNTER_REMOVE,
        payload: remcount
    }

}
export const clickBottom = (click)=>{
    return{
        type:CLICK_BOTTOM,
        payload:click
    }
}
export const addGumar = (gumar)=>{
    return{
        type:ADD_GUMAR,
        payload:gumar
    }
}
export const minus =(minus) =>{
    return{
        type:MINUS,
        payload:minus
    }
 
}
export const productLink=(linkProduct)=>{
    return{
        type:PRODUCT_LINK,
        payload:linkProduct
    }
}   
export const weaterdiplay=(weater)=>{
    return{
        type:WEATER_DISPLAY,
        payload: weater
    }
}

