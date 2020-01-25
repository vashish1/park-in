//Learn more or give us feedback
function myFunction() {    
    //const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = "http://localhost:80/Parking";
    document.body.style.backgroundColor = "red";
    fetch(url,{method:'GET'})  
.then(response => response.json())   
.then(json => console.log(json))
console.log("Done")
}