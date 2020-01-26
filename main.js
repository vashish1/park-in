
let item=[];
let last;

 function data1(){
   
   console.log("stage 1")
   let obj = {
       id: 1
   };
   

 fetch('http://localhost:80/Parking',{method:'GET'})
 .then(res=>res.json()).then(item=>{console.log(item[0]);
    var store= item[0].Occupied;
var property = document.getElementById("1");
 if(store==true){
     property.style.backgroundColor="red";
     }
else{
    property.style.backgroundColor="green";
}})
last=1

fetch('http://localhost:80/Parking',{
    method: "POST",
    body: JSON.stringify(obj)
},
 )
}

function data2(){
   
    console.log("stage 1")
    let obj = {
        id: 2
    };
    
 
  fetch('http://localhost:80/Parking',{method:'GET'})
  .then(res=>res.json()).then(item=>{console.log(item[1]);
     var store= item[1].Occupied;
 var property = document.getElementById("2");
  if(store==true){
      property.style.backgroundColor="red";
      }
 else{
     property.style.backgroundColor="green";
 }})
 last=2
 fetch('http://localhost:80/Parking',{
    method: "POST",
    body: JSON.stringify(obj)
},
 )
}
 function data3(){
   
    console.log("stage 1")
    let obj = {
        id: 3
    };
    
 
  fetch('http://localhost:80/Parking',{method:'GET'})
  .then(res=>res.json()).then(item=>{console.log(item[2]);
     var store= item[2].Occupied;
 var property = document.getElementById("3");
  if(store==true){
      property.style.backgroundColor="red";
      }
 else{
     property.style.backgroundColor="green";
 }})
 last=3
 fetch('http://localhost:80/Parking',{
    method: "POST",
    body: JSON.stringify(obj)
},
 )
}
 function data4(){
   
    console.log("stage 1")
    let obj = {
        id: 4
    };
    
 
  fetch('http://localhost:80/Parking',{method:'GET'})
  .then(res=>res.json()).then(item=>{console.log(item[3]);
     var store= item[3].Occupied;
 var property = document.getElementById("4");
  if(store==true){
      property.style.backgroundColor="red";
      }
 else{
     property.style.backgroundColor="green";
 }})
     last=4
 fetch('http://localhost:80/Parking',{
    method: "POST",
    body: JSON.stringify(obj)
},
 )
}

 function data5(){
   
    console.log("stage 1")
    let obj = {
        id: 5
    };
    
 
  fetch('http://localhost:80/Parking',{method:'GET'})
  .then(res=>res.json()).then(item=>{console.log(item[4]);
     var store= item[4].Occupied;
 var property = document.getElementById("5");
  if(store==true){
      property.style.backgroundColor="red";
      }
 else{
     property.style.backgroundColor="green";
 }})
     last=5
 
 fetch('http://localhost:80/Parking',{
    method: "POST",
    body: JSON.stringify(obj)
},
 )
}
 function data6(){
   
    console.log("stage 1")
    let obj = {
        id: 6
    };
    
 
  fetch('http://localhost:80/Parking',{method:'GET'})
  .then(res=>res.json()).then(item=>{console.log(item[5]);
     var store= item[5].Occupied;
 var property = document.getElementById("6");
  if(store==true){
      property.style.backgroundColor="red";
      }
 else{
     property.style.backgroundColor="green";
 }})
     last=6
 
 fetch('http://localhost:80/Parking',{
    method: "POST",
    body: JSON.stringify(obj)
},
 )
}
 function data7(){
   
    console.log("stage 1")
    let obj = {
        id: 7
    };
    
 
  fetch('http://localhost:80/Parking',{method:'GET'})
  .then(res=>res.json()).then(item=>{console.log(item[6]);
     var store= item[6].Occupied;
 var property = document.getElementById("7");
  if(store==true){
      property.style.backgroundColor="red";
      }
 else{
     property.style.backgroundColor="green";
 }})
     last=7
 
 fetch('http://localhost:80/Parking',{
    method: "POST",
    body: JSON.stringify(obj)
},
 )
}
 function data8(){
   
    console.log("stage 1")
    let obj = {
        id: 8
    };
    
 
  fetch('http://localhost:80/Parking',{method:'GET'})
  .then(res=>res.json()).then(item=>{console.log(item[7]);
     var store= item[7].Occupied;
 var property = document.getElementById("8");
  if(store==true){
      property.style.backgroundColor="red";
      }
 else{
     property.style.backgroundColor="green";
 }})
 last=8
 fetch('http://localhost:80/Parking',{
    method: "POST",
    body: JSON.stringify(obj)
},
 )
}
 function data9(){
   
    console.log("stage 1")
    let obj = {
        id: 9
    };
    
 
  fetch('http://localhost:80/Parking',{method:'GET'})
  .then(res=>res.json()).then(item=>{console.log(item[8]);
     var store= item[8].Occupied;
 var property = document.getElementById("9");
  if(store==true){
      property.style.backgroundColor="red";
      }
 else{
     property.style.backgroundColor="green";
 }})
 last=9
 fetch('http://localhost:80/Parking',{
    method: "POST",
    body: JSON.stringify(obj)
},
 )
}
 function data10(){
   
    console.log("stage 1")
    let obj = {
        id: 10
    };
    
 
  fetch('http://localhost:80/Parking',{method:'GET'})
  .then(res=>res.json()).then(item=>{console.log(item[9]);
     var store= item[9].Occupied;
 var property = document.getElementById("10");
  if(store==true){
      property.style.backgroundColor="red";
      }
 else{
     property.style.backgroundColor="green";
 }})
last=10
 fetch('http://localhost:80/Parking',{
    method: "POST",
    body: JSON.stringify(obj)
},
 )
}
 function data11(){
   
    console.log("stage 1")
    let obj = {
        id: 11
    };
    
 
  fetch('http://localhost:80/Parking',{method:'GET'})
  .then(res=>res.json()).then(item=>{console.log(item[10]);
     var store= item[10].Occupied;
 var property = document.getElementById("11");
  if(store==true){
      property.style.backgroundColor="red";
      }
 else{
     property.style.backgroundColor="green";
 }})
 last=11
 fetch('http://localhost:80/Parking',{
    method: "POST",
    body: JSON.stringify(obj)
},
 )

}

 function data12(){
   
    console.log("stage 1")
    let obj = {
        id: 12
    };
    
 
  fetch('http://localhost:80/Parking',{method:'GET'})
  .then(res=>res.json()).then(item=>{console.log(item[11]);
     var store= item[11].Occupied;
 var property = document.getElementById("12");
  if(store==true){
      property.style.backgroundColor="red";
      }
 else{
     property.style.backgroundColor="green";
 }})
     last=12
 fetch('http://localhost:80/Parking',{
    method: "POST",
    body: JSON.stringify(obj)
},
 )
}
function exit(){
    let obj = {
        id: last
    };
    fetch('http://localhost:80/Parking',{
        method: "POST",
        body: JSON.stringify(obj)
    },
     )
    

}

 //store work nhi krra hai sir
//  var store= item[0].Occupied;
 
//  var property = document.getElementById("1");
//  if(store==true){
//      document.style.backgroundColor="red";
//      }
// else{
//     document.style.backgroundColor="green";
// }


//   let item = JSON.parse(this.response);
//  for(var i=0;item.length;i++){
//      console.log(item[i].Occupied)

// .then(res=>res.json()).then(json=>{console.log(json)
// return item; }) 
// // const state= JSON.map(item=>item.Occupied)
// console.log(item)
//  }

// .then(json=>{console.log(json)
// .then(items=>items[0].Occupied);
// console.log(items=>items[0].Occupied);
// };
   
    
// fetch('http://localhost:80/Parking',{
//         method: "POST",
//         body: JSON.stringify(obj)
//     },   
// )
// }
//     // if(value.Boxno==)
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
// var prev=false,curr=false;
// function working(){ 
//     if(prev==false&& curr==true)
//     {
//         document.style.backgroundColor="green";
//         prev=true;
//         //post fetching
//     }
//     else if (prev==true&& curr==false){
//         document.style.backgroundColor="red";
//         prev=false;
//         //payment gateway call
//     }
   

  
    

// };