let btn=document.querySelector("#z1z1");
let div=document.querySelector(".t1t1")

btn.addEventListener("click",()=>{
    div.innerHTML="Netflix is a streaming service that offers a wide variety of award-winning TV shows, <br>movies, anime, documentaries and more on thousands of internet-connected devices.<br>You can watch as much as you want, whenever you want, without a single ad all for one <br>low monthly price. There's always something new to discover, and new TV shows and <br>movies are added every week!";
    div.setAttribute("t1t1",".t1t1")
    console.log("hlo bro")
})