document.querySelector('form').addEventListener("submit",submitfn)
var UserData;
if(localStorage.getItem("UserData")==null){
    UserData=[]
}else{
    UserData=JSON.parse(localStorage.getItem("UserData"))  // to get the user data
}
function submitfn(){
    event.preventDefault();
    var userObj={
        neme:document.querySelector("#name").value,
        contact:document.querySelector("#contact").value,
        email:document.querySelector("#email").value,
        password:document.querySelector("#password").value,
       

    }
  

    
    UserData.push(userObj)
    localStorage.setItem("UserData",JSON.stringify(UserData)) 
    
    document.querySelector('form').addEventListener("submit",chk)
    function chk(){
        if(document.getElementById("name").value==""){
         alert("enter your name")
         return false;
        }else if(document.getElementById("contact").value==""){
            alert("enter your contact")
            return false;

    }
    else if(document.getElementById("email").value==""){
        alert("enter your email")
        return false;
    
    }
   else if(document.getElementById("password").value==""){
        alert("enter your password")
        return false;
    }
 
}


}   