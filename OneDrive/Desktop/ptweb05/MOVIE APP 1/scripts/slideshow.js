var images = [
    "https://cdn.pixabay.com/photo/2021/11/09/02/29/theater-6780537__340.jpg",
     "https://cdn.pixabay.com/photo/2022/07/11/14/27/waterfall-7315169__340.jpg",
     "https://cdn.pixabay.com/photo/2022/02/07/06/41/vietnam-6998583__340.jpg",
     "https://cdn.pixabay.com/photo/2022/07/10/18/21/allium-7313550__340.jpg",

]
var x;
var slideShowContainer = document.getElementById("slideshow_container")
function start(){
    slideShowContainer.innerHTML=""
    var slideshowimgeement=document.createElement("img")
    var i=0;
    x=setInterval(function(){
        if(i===images.length){
            i=0;
        }
        slideshowimgeement.src=images[i]
        slideshowimgeement.className="sllideshow-img"
        i=i+1;
    },2000)
    slideShowContainer.append(slideshowimgeement)
}
function stop(){
    clearInterval(x)
}