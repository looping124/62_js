var clap = new Audio('sounds/clap.mp3');
var crash = new Audio('sounds/crash.mp3');
var hihat = new Audio('sounds/hihat.mp3');
var kick = new Audio('sounds/kick.mp3');
var snare = new Audio('sounds/snare.mp3');

document.addEventListener('keydown', logKey);
function logKey(e) {
// console.log("🚀 ~ file: myjs.js ~ line 9 ~ logKey ~ e", e)
key =  document.querySelector(`.${e.key}`);
key.classList.add('playing');
  switch (e.code) {
  case "KeyQ":
    clap.currentTime = 0;
    clap.play();
    
  break;
  case "KeyW":
    crash.currentTime = 0;
    crash.play();
  break;
  case "KeyE":
    hihat.currentTime = 0;
    hihat.play();
  break;
  case "KeyR":
  case "Numpad7":
    kick.currentTime = 0;
    kick.play();
  break;
  case "KeyT":
  case "Numpad8":
    snare.currentTime = 0;
    snare.play();
  break;
  case "KeyY":
  case "Numpad9":
    clap.currentTime = 0;
    clap.play();
  break;
  }
}


const keys = document.querySelectorAll(".touche");
keys.forEach(key => key.addEventListener("transitionend", function(){
  key.classList.remove('playing');
}));