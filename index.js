// for (let i = 0; i<document.querySelectorAll(".drum").length; i++){
//     document.querySelectorAll(".drum")[i].addEventListener("click", handleClick)

// }

// function handleClick(){
//     alert("Clicked");
// }

// document.querySelectorAll(".drum").forEach(element => {
//     element.addEventListener("click", handleClick);
// });

// function handleClick(){
//     alert("Clicked");
// }



document.querySelectorAll(".drum").forEach(element => {
    element.addEventListener("click", function(){
        this.style.color = "white"; 
    });
}); 


// let audio = new Audio('./sounds/tom-1.mp3');
// audio.play();