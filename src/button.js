const guideBtns = document.querySelectorAll(".guide-button");
console.log(guideBtns);

function guideBtnsOver(gBtn) {
  gBtn.style.backgroundColor = "rgb(0 0 0 / 5%)";
}
function guideBtnsOut(gBtn) {
  gBtn.style.backgroundColor = "#fff";
}
