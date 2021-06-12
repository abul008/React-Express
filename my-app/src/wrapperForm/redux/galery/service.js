import axios from "axios";

export const getImagesService=(url)=>{
    return axios.get(`${url}`);
}