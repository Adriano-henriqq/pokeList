export function getData(url,callback){
    fetch(url)
    .then((response => response.json()))
    .then(response => callback(null,response))
    .catch((error)=> callback(error,null))
}