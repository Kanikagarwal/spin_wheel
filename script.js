const wheel = document.querySelector(".wheel");
const button = document.querySelector("button");

button.addEventListener("click",spinWheel);

function spinWheel(e) {
  let round = Math.round((Math.random()*2220)+1);
  wheel.style.setProperty("transition","ease 1s"); 
  wheel.style.transform = "rotate("+round+"deg)";
}

button.addEventListener("mouseover",stopScaling);
function stopScaling() {
  button.style.animation = "none";
}
button.addEventListener("mouseleave",startScaling);
function startScaling() {
  button.style.animation = "scale 1s 1s infinite alternate ease";
}