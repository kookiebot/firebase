window.onload = function() {
  document.getElementById('myDIV').style.display = 'none';
};
function myToggleMenu() {
  var x = document.getElementById("myDIV");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}