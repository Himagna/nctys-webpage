var themeCounter = 0;
var inDarkMode = 0;
var r = document.querySelector(":root");
var rs = getComputedStyle(r);
const maxlen = 3;
const c1s = ["#ffcdb2", "#00ffe5", "#f5e45f", "#ff0000"];
const c2s = ["#ffb4a2", "#00c0ac", "#e2c1f3", "#c00000"];
const c3s = ["#e5989b", "#008073", "#00c693", "#800000"];
const c4s = ["#b5838d", "#00403a", "#07bdff", "#400000"];
const c5s = ["#6d6875", "#000000", "#fe51b0", "#000000"];
//const fonts=["DiaryOfAn8BitMage","VerminVibes","connection","WayfarersToyBox"];
function changeColors() {
  if (themeCounter != maxlen) themeCounter++;
  else themeCounter = 0;
  setColors();
}
function setColors() {
  r.style.setProperty("--c1", c1s[themeCounter]);
  r.style.setProperty("--c2", c2s[themeCounter]);
  r.style.setProperty("--c3", c3s[themeCounter]);
  r.style.setProperty("--c4", c4s[themeCounter]);
  r.style.setProperty("--c5", c5s[themeCounter]);
  //r.style.setProperty("--font",fonts[themeCounter]);
}
function darkMode() {
  if (inDarkMode == 0) {
    r.style.setProperty("--c5", c1s[themeCounter]);
    r.style.setProperty("--c4", c1s[themeCounter]);
    r.style.setProperty("--c3", "#000000");
    r.style.setProperty("--c2", "#000000");
    r.style.setProperty("--c1", "#000000");
  } else setColors();
  inDarkMode = 1 - inDarkMode;
}
