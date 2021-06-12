import {combineReducers} from "redux";
import imgGallery from "../redux/galery/reducer";
import shopCaunterAdd from '../redux/shop/reducer';
import loginInfoFun from "../redux/login/reducer";

const allReducers = combineReducers({
    img:imgGallery,
    count:shopCaunterAdd,
    login:loginInfoFun
   
})
export default allReducers;














