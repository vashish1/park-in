var value=0;
// function btncolor1(){
//     var property = document.getElementById("1");
//      if(value==0){
//          property.style.backgroundColor ="red";
           
//          value= 1;
//     }else{
//          property.style.backgroundColor = "green";
//          value=0;        
//         }
//         console.log("btncolor called")
//         }

/*function btncolor2(){
    var property = document.getElementById("2");
     if(value==0){
         property.style.backgroundColor ="red";
           
         value= 1;
    }else{
         property.style.backgroundColor = "green";
         value=0;        
        }
        }
function btncolor3(){
    var property = document.getElementById("3");
        if(value==0){
            property.style.backgroundColor ="red";
               
            value= 1;
         }else{
            property.style.backgroundColor = "green";
            value=0;        
            }
            }
function btncolor4(){
    var property = document.getElementById("4");
        if(value==0){
             property.style.backgroundColor ="red";
                   
             value= 1;
       }else{
             property.style.backgroundColor = "green";
             value=0;        
             }
             }
 function btncolor5(){
     var property = document.getElementById("5");
        if(value==0){
            property.style.backgroundColor ="red";
                               
             value= 1;
       }else{
            property.style.backgroundColor = "green";
            value=0;        
                         }
                         }
function btncolor6(){
     var property = document.getElementById("6");
        if(value==0){
            property.style.backgroundColor ="red";
                                           
             value= 1;
         }else{
             property.style.backgroundColor = "green";
             value=0;        
                                     }}
function btncolor7(){
     var property = document.getElementById("7");
        if(value==0){
            property.style.backgroundColor ="red";
                                                       
              value= 1;
       }else{
            property.style.backgroundColor = "green";
             value=0;        
         }
         }
 function btncolor8(){
     var property = document.getElementById("8");
         if(value==0){
              property.style.backgroundColor ="red";
                                                                   
              value= 1;
        }else{
             property.style.backgroundColor = "green";
              value=0;        
         }
         }

 function btncolor9(){
    var property = document.getElementById("9");
        if(value==0){
            property.style.backgroundColor ="red";
                                                                                           
             value= 1;
        }else{
            property.style.backgroundColor = "green";
             value=0;        
                                                                                     }
     }
function btncolor10(){
    var property = document.getElementById("10");
         if(value==0){
            property.style.backgroundColor ="red";
                                                                                                       
              value= 1;
         }else{
            property.style.backgroundColor = "green";
              value=0;        
         }
         }
 function btncolor11(){
    var property = document.getElementById("11");
         if(value==0){
             property.style.backgroundColor ="red";
                                                                                                                   
                 value= 1;
         }else{
            property.style.backgroundColor = "green";
            value=0;        
                                                                                                             }
                                                                                                             }
function btncolor12(){
         var property = document.getElementById("12");
           if(value==0){
              property.style.backgroundColor ="red";
                                                                                                                               
               value= 1;
           }else{
             property.style.backgroundColor = "green";
             value=0;        
 } }
// function btncolor(){
//     var property = document.getElementById("2");
//     if(value1==0){
//         property.style.backgroundColor ="red";
       
//     	value1= 1;
//     }else{
//         property.style.backgroundColor = "green";
//         value1=0;        
//     }
//     }
//     function myFunction() {
//         document.body.style.backgroundColor = "red";
//         fetch('https://jsonplaceholder.typicode.com/users')   
//     .then(response => response.json())   
//     .then(json => console.log(json))
//     }
    /*let response = await fetch(url);
if (response.ok) { // if HTTP-status is 200-299
  // get the response body (the method explained below)
  let json = await response.json();
} else {
  alert("HTTP-Error: " + response.status);*/
//   async function postData(url ,data) {
//     // Default options are marked with *
//     const response = await fetch(url, {
//       method: 'POST', // *GET, POST, PUT, DELETE, etc.
//       mode: 'cors', // no-cors, *cors, same-origin
//       cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
//       credentials: 'same-origin', // include, *same-origin, omit
//       headers: {
//         'Content-Type': 'application/json'
//         // 'Content-Type': 'application/x-www-form-urlencoded',
//       },
//       body: JSON.stringify(data) // body data type must match "Content-Type" header
//     });
//     return await response.json(); // parses JSON response into native JavaScript objects
//   }
var prev=false,curr=false;
function working(){ 

};

let ;
function data(){
    var property = document.getElementById("1");
    if(value==0){
        property.style.backgroundColor ="red";
          
        value= 1;
   }else{
        property.style.backgroundColor = "green";
        value=0;        
   }
//    console.log("stage 1")
//    let obj = {
//        id: 1
//    };
   
//   postData('http://localhost:80/Parking', { id: val })
//   .then((data) => {
//     console.log(data); // JSON data parsed by `response.json()` call
//   });
fetch('http://localhost:80/Parking',{method:'GET'})
.then(res=>res.json())    
.then(json=>{console.log(json)},
    console.log("stage 2"))
// fetch('http://localhost:80/Parking',{
//         method: "POST",
//         body: JSON.stringify(obj)
//     },   
// )
}
    // if(value.Boxno==)
// .then(items=>items[0].boxno);
// console.log(items=>items[0].boxno);
// .then(json=>{console.log(json)
// function data1(){
//     console.log("stage 1")
//     fetch('http://localhost:80/Parking',{method:'GET'})
//     .then(res=>res.json())
//     .then(json=>{console.log(json)
//     data1.value.array.forEach(element=>console.log(element))
        
//     });

        
    



// function myFunction() {    
//     //const proxyurl = "https://cors-anywhere.herokuapp.com/";
//     const url = "http://localhost:80/Parking";
//     document.body.style.backgroundColor = "red";
//     fetch(url,{method:'GET'})  
// .then(response => response.json())   
// .then(json => console.log(json))
// console.log("Done")

// }