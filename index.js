"use strict";

const drumBtns = document.querySelectorAll(".drum");
const audioFile = new Audio("./sounds/crash.mp3");
drumBtns.forEach((btn, key) => {
  const bgImg = document.createElement("img");
  bgImg.setAttribute("src", `./images/tom${key + 1}.png`);
  btn.prepend(bgImg);
  btn.addEventListener("mousedown", function () {
    const audioFile = new Audio(`./sounds/tom-${key + 1}.mp3`);
    btn.style.backgroundColor = "yellow";
    audioFile.play();
  });
  btn.addEventListener("mouseup", function () {
    btn.style.backgroundColor = "white";
  });
});
