const guideBtns = document.querySelectorAll(".guide-button", "#search-button");

function guideBtnsOver(gBtn) {
  gBtn.style.backgroundColor = "rgb(0 0 0 / 5%)";
}
function guideBtnsOut(gBtn) {
  gBtn.style.backgroundColor = "#fff";
}
function searchBtnsOut(sBtn) {
  sBtn.style.backgroundColor = "#f8f8f8";
}

//
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

// menu-button

function menuButton() {
  const menuBtn = document.querySelector("#menu-button");
  const scrollMenu = document.querySelector("#scroll-container");
  const miniMenu = document.querySelector("#mini-guider");
  function closeMenu() {
    miniMenu.style.display = "block";
    scrollMenu.style.display = "none";
  }
  function showMenu() {
    miniMenu.style.display = "none";
    scrollMenu.style.display = "block";
  }
  if (
    ((miniMenu.style.display = "block"), (scrollMenu.style.display = "none"))
  ) {
    showMenu();
  } else if (
    ((miniMenu.style.display = "none"), (scrollMenu.style.display = "block"))
  ) {
    closeMenu();
  }
}
