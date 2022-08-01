

document.querySelector("form").addEventListener('submit',loginfn)
var registeruser=JSON.parse(localStorage.getItem("UserData"));
function loginfn(){

    event.preventDefault();
    var enteremail=document.querySelector("#email").value;
    var enterpass=document.querySelector("#password").value;

   registeruser.forEach(userdata => {
       if(userdata.email===enteremail && userdata.password===enterpass){
           alert("login success")
           window.location.href= 'index.html';
    

       }else{
           alert("invalid credentials")
       }
   });
}