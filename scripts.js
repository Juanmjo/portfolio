const visibleMenu = false;

function showHideMenu() {
  if (visibleMenu) {
    document.getElementById("nav").classList = "";
    visibleMenu = false;
  } else {
    document.getElementById("nav").classList = "responsive";
    visibleMenu = true;
  }
}

function select() {
  document.getElementById("nav").classList = "";
  visibleMenu = false;
}
