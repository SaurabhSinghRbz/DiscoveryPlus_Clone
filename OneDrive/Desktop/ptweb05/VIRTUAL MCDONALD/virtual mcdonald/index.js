function run(){

    var donaldData=JSON.parse(localStorage.getItem("donaldData"));
    if(donaldData.length!=0){
        var id=document.querySelector("#id")
    id.innerText="order id:mac 0248"
    }   
  

    
//  console.log(donaldData)

donaldData.forEach((ele,i)=>{
    var box =document.createElement("div");
   
    var img=document.createElement("img");
    img.src=ele.src
    var h2=document.createElement("h4");
    h2.innerText=ele.name;
    box.append(img,h2);
    document.querySelector("#display").append(box)
})

 }







    var arr=[]
      function order(){
    var input= document.querySelectorAll("input")
    input.forEach(function(ele){
        if(ele.checked){
            obj={
                name:ele.value,
                src:ele.src,
            }
            arr.push(obj)
        }
    })
    localStorage.setItem("donaldData",JSON.stringify(arr))
    window.location.reload()

      }


    //   var input= document.querySelectorAll("input")
    //   console.log(input[0].alt)






    var donaldData=JSON.parse(localStorage.getItem("donaldData"));
console.log(donaldData)
    var mcdonald= new Promise(function(resolve,reject){
        setTimeout(  function (){
            
run()
      },1000)
    })



     mcdonald.then(function(result){
         console.log(result)
     }).catch(function(error){
         console.log(error)
     })