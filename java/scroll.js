let ubicacionprincipal = window.pageYOffset;
let flecha = document.querySelector("#flecha");

window.addEventListener("scroll", function () {
  let ubicacionactual = window.pageYOffset;

  console.log(ubicacionactual);

  if ((ubicacionprincipal = ubicacionactual)) {
    flecha.style.background = "black";
    flecha.style.color = "white";
  } else {
    flecha.style.background = "transparent";
    flecha.style.color = "transparent";
  }

  ubicacionactual = ubicacionprincipal;
});
