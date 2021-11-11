for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var drumbtnInnerHtml = this.innerHTML;
        makesound(drumbtnInnerHtml);
        buttonAnimation(drumbtnInnerHtml);

    });
}
document.addEventListener("keypress", function (event) {
    makesound(event.key);
    buttonAnimation(event.key);
});

function makesound(key) {
    switch (key) {
        case "a":
            new Audio("sounds/tom-1.mp3").play()
            break;
        case "s":
            new Audio("sounds/tom-2.mp3").play()
            break;
        case "d":
            new Audio("sounds/tom-3.mp3").play()
            break;
        case "f":
            new Audio("sounds/tom-4.mp3").play()
            break;
        case "j":
            new Audio("sounds/snare.mp3").play()
            break;
        case "k":
            new Audio("sounds/kick-bass.mp3").play()
            break;
        case "l":
            new Audio("sounds/crash.mp3").play()
            break;
        default:
            console.log(drumbtnInnerHtml);

    }
}

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 300)
}