 
 
 /* está indicando que seleccionemos lo que esté en la clase fondo-video y lo guarde en la variable imagen*/
 let imagen = document.querySelector(".fondo-imagen");
 /* está indicando que seleccionemos todos los que estén en la clase enlaces-hover no solo a uno -- all y lo guarde en la variable enlaces*/
 let enlaces = document.querySelectorAll(".enlaces-hover");
 for(let i = 0; i < enlaces.length; i++){
     enlaces[i].addEventListener("mouseover", () => {
         imagen.setAttribute("src",enlaces[i].getAttribute("href"));
     });
 }


