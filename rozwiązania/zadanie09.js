document.addEventListener("DOMContentLoaded", function () {
    var homeElement = document.getElementById("home");
    var childElements = document.querySelector(".oferts").children;
    var banner = document.querySelector(".ban");
    var blocks = document.querySelectorAll(".block");
    var links = document.querySelector(".links").children;

    /*
    Poniżej napisz kod rozwiązujący zadania
     */

     





function getDatasInfo(elements) { 
    var array = [];

    for (let i = 0; i < array.length;i++ ) {
        array.push(elements[i].dataset);
    }  
    console.Log(array); 
}

getDatesInfo(links);

});