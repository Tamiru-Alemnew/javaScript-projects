const video = document.querySelector(".video-container");
const switchBtn = document.querySelector(".switch-btn");

switchBtn.addEventListener("click",function(){
    if(!switchBtn.classList.contains("slide")){
        video.pause()
    }else{
       video.play() 
    }
    switchBtn.classList.toggle("slide")
});

// preloader
const preloader = document.querySelector(".preloader");

window.addEventListener("load", function () {
  preloader.classList.add("hide-preloader");
});