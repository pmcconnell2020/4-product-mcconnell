// Add the w3-red class to all opened accordions
var x = document.getElementById(id);
if (x.className.indexOf("w3-show") == -1) {
  x.className += " w3-show";
  x.previousElementSibling.className += " w3-red";
} else { 
  x.className = x.className.replace("w3-show", "");
  x.previousElementSibling.className = 
  x.previousElementSibling.className.replace("w3-red", "");
}