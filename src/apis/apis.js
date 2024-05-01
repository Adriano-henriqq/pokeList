import axios from "axios";

export function getData(url,callback){
    axios.get(url)
    .then((response =>  callback(null,response.data)))
    .catch((error)=> callback(error,null))
}