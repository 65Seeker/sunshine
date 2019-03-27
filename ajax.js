let request = new XMLHttpRequest()
request.open(get,xxx)
for (let key in headers ){
    let value = headers[key]
    request.setRequestHeader(key,value)
}
request.onreadystatechange=()=>{
    if(request.readyState===4&&request.status>=200&&request.status<300){
        
    }
}