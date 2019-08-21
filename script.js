// FUNCTION TO ADD NAV BAR TO PAGE
function navBar() {
  $("#nav-placeholder").load("header.html");
}
// FUNCTION TO ADD NAV BAR TO PAGE
function clearNavBar() {
  $("#nav-placeholder").load("clear_header.html");
}
function footer() {
  $("#footer-placeholder").load("footer.html");
}

function openNav() {
  document.getElementById("nav").style.width = "100%";
}
