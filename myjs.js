var clap = new Audio('sounds/clap.mp3');
var crash = new Audio('sounds/crash.mp3');
var hihat = new Audio('sounds/hihat.mp3');
var kick = new Audio('sounds/kick.mp3');
var snare = new Audio('sounds/snare.mp3');

document.addEventListener('keypress', logKey);
function logKey(e) {
  switch (e.code) {
  case "KeyQ":
    clap.play();
  break;
  case "KeyW":
    crash.play();
  break;
  case "KeyE":
    hihat.play();
  break;
  case "KeyR":
  case "Numpad7":
    kick.play();
  break;
  case "KeyT":
  case "Numpad8":
    snare.play();
  break;
  case "KeyY":
  case "Numpad9":
    clap.play();
  break;
  }
}