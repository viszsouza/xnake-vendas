/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

const imgs = document.getElementById("img");
const img = document.querySelectorAll("#img img");

let idx = 0;

function carrossel(){
  idx ++;

  if(idx > img.length - 1){
    idx = 0;
  }

  imgs.style.transform = `translateX(${-idx * 500}px)`;
}

setInterval(carrossel, 1800);

