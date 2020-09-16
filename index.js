// document.querySelector("button").addEventListener("click", function () {
//   alert("Hey Bitch");
// });

// Detecting button clicks

for (i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function () {
    switch (this.innerHTML) {
      case "w":
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();

        var oriColor = this.style.color;
        this.style.color = "white";

        setTimeout(() => {
          this.style.color = oriColor;
        }, 200);

        break;

      case "a":
        var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
        var oriColor = this.style.color;
        this.style.color = "white";

        setTimeout(() => {
          this.style.color = oriColor;
        }, 200);
        break;

      case "s":
        var tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
        var oriColor = this.style.color;
        this.style.color = "white";

        setTimeout(() => {
          this.style.color = oriColor;
        }, 200);
        break;

      case "d":
        var tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();

      case "j":
        var snare = new Audio("sounds/snare.mp3");
        snare.play();

        var oriColor = this.style.color;
        this.style.color = "white";

        setTimeout(() => {
          this.style.color = oriColor;
        }, 200);
        break;

      case "k":
        var crash = new Audio("sounds/crash.mp3");
        crash.play();

        var oriColor = this.style.color;
        this.style.color = "white";

        setTimeout(() => {
          this.style.color = oriColor;
        }, 200);
        break;

      case "l":
        var kick = new Audio("sounds/kick-bass.mp3");
        kick.play();

        var oriColor = this.style.color;
        this.style.color = "white";

        setTimeout(() => {
          this.style.color = oriColor;
        }, 200);

        break;

      default:
        console.log("key not found.");
        break;
    }
  });
}

//Detecting keyboard press
document.addEventListener("keydown", function (event) {
  switch (event.key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();

      changeKeyColor(event);

      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();

      changeKeyColor(event);

      break;

    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();

      changeKeyColor(event);

      break;

    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();

      changeKeyColor(event);

      break;

    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();

      changeKeyColor(event);

      break;

    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();

      changeKeyColor(event);

      break;

    case "l":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();

      changeKeyColor(event);

      break;

    // default:
    //   break;
  }
});

function changeKeyColor(event) {
  var keyPressed = document.querySelector("button." + event.key + ".drum");
  var oriColor = keyPressed.style.color;
  keyPressed.style.color = "white";

  setTimeout(() => {
    keyPressed.style.color = oriColor;
  }, 100);
}
