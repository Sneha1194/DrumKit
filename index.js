
var buttonArray = document.querySelectorAll(".drum");
for(var i=0;i<buttonArray.length;i++){
buttonArray[i].addEventListener("click",function(){
    // this.style.color="white"; to change color of text to white

    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
});
}

document.addEventListener("keydown",function(event){
   const keyName = event.key;
   console.log(event);
   console.log(keyName);
   makeSound(keyName);
   buttonAnimation(keyName);
});

function makeSound(key){

switch(key){

  case "w":
  var tom1 = new Audio("sounds/tom-1.mp3");
  tom1.play();
  break;
  case "a":
  var tom2 = new Audio("sounds/tom-2.mp3");
  tom2.play();
  break;
  case "s":
  var tom3 = new Audio("sounds/tom-3.mp3");
  tom3.play();
  break;
  case "d":
  var tom4 = new Audio("sounds/tom-4.mp3");
  tom4.play();
  break;
  case "j":
  var snare = new Audio("sounds/snare.mp3");
  snare.play();
  break;
  case "k":
  var kick_bass = new Audio("sounds/kick-bass.mp3");
  kick_bass.play();
  break;
  case "l":
  var crash = new Audio("sounds/crash.mp3");
  crash.play();
  break;
  default:
  console.log("buttonInnerHTML");
}
}

function buttonAnimation(key){
  var activeButton = document.querySelector("." + key);
  activeButton.classList.add("pressed");

  setTimeout(function(){
    activeButton.classList.remove("pressed");
  },100);
}
