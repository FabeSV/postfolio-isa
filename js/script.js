 
 
// Selecciona todos los elementos con la clase "Activo"
const elementos = document.querySelectorAll(".activo");

elementos.forEach(elemento => {
  elemento.addEventListener("click", () => {
      
      // Primero, desactiva la clase "encendido" en todos las activos
      elementos.forEach(i => i.classList.remove("encendido"));
      
      // Luego, activa la clase "encendido" solo en la clase activa clicada
      elemento.classList.add("encendido");
  });
});


 
const navegacion = document.querySelector("nav");
const botones = document.querySelectorAll(".open,.active-close");

function toggleNavegacion(){
  navegacion.classList.toggle("desplegado");
}

 for(let i = 0; i < botones.length; i++){
   botones[i].addEventListener("click", toggleNavegacion);

 }



  const sectionsLeft = document.querySelectorAll(".section-left");
  // Crear un nuevo Intersection Observer
  const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add("show");
              entry.target.classList.remove("hidden");
          } else {
              entry.target.classList.remove("show");
              entry.target.classList.add("hidden");
          }
      });
  }, {
      threshold: 0.1 // Cambia el valor si necesitas que el efecto ocurra antes o después
  });

    // Observa cada sección
     sectionsLeft.forEach(section => {
      observer.observe(section);
  });




 const miniaturas = document.querySelectorAll(".gallery a");
 const modal = document.querySelector(".modal") ;
 const imgModal = document.querySelector(".modal img");
 const flechas = document.querySelectorAll(".modal button");
 let indiceImg = 0;
 
     miniaturas.forEach((miniatura,i) => {
         miniatura.addEventListener("click", evento => {
             evento.preventDefault();
             indiceImg = i;
             imgModal.setAttribute("src",miniatura.getAttribute("href"));
            modal.classList.add("visible");
             });
         });
 
     modal.addEventListener("click", () => {
             modal.classList.remove("visible");
     });
     
     flechas.forEach((flecha,i) => {
     flecha.addEventListener("click", evento =>{
         evento.stopPropagation();
           if ( i == 0){
             //atras
             indiceImg = indiceImg > 0 ? indiceImg - 1 : miniaturas.length -1;
           }else{
            //adelante
            indiceImg = indiceImg < miniaturas.length - 1 ? indiceImg + 1 : 0;
           }
           imgModal.setAttribute("src",miniaturas[indiceImg].getAttribute("href"));
          console.log(indiceImg);
 
     });
     });