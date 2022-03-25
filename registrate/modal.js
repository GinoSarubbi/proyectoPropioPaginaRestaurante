var btn = document.querySelector('.botonsesion')
var modal = document.querySelector('.modal')
var equis = document.querySelector('.label1')

btn.addEventListener("click", (e) => {
   
    modal.classList.toggle("active");
  
   
  });

  equis.addEventListener("click", (e) => {
   
    modal.classList.toggle("opacity");
  
   
  });
