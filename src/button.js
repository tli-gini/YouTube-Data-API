const guideBtns = document.querySelectorAll(".guide-button", "#search-button");
console.log(guideBtns);

function guideBtnsOver(gBtn) {
  gBtn.style.backgroundColor = "rgb(0 0 0 / 5%)";
}
function guideBtnsOut(gBtn) {
  gBtn.style.backgroundColor = "#fff";
}
function searchBtnsOut(sBtn) {
  sBtn.style.backgroundColor = "#f8f8f8";
}

const rightBtns = document.querySelectorAll(".right-icon");
function rightBtnsOver(rBtn) {
  rBtn.style.backgroundColor = "rgb(0 0 0 / 10%)";
}
function rightBtnsOut(rBtn) {
  rBtn.style.backgroundColor = "#fff";
}
function voiceBtnsOut(vBtn) {
  vBtn.style.backgroundColor = "rgb(0 0 0 / 5%)";
}
