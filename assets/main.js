// Extraigo del DOM.

const pizzaPrice = document.querySelector("#PrecioPizza");
const pizzaName = document.querySelector("#NombrePizza");
const pizzaIngredients = document.querySelector("#ingredientesPizza");
const formulario = document.querySelector("#Formulario");
const btnBusqueda = document.querySelector("#Boton");
const resultado = document.querySelector("#Resultado");
const pizzaFoto = document.querySelector("#pizzaFoto");

//escuchador de eventos para que una vez haya cargado por completo el contenido del dom, se ejecute la funcion MostrarPizzas

document.addEventListener("DOMContentLoaded", () => {
  MostrarPizzas();
});

//Creo la funcion
function MostrarPizzas() {
  const dato = parseInt(formulario.value);
  if (dato > 6) {
    resultado.innerHTML = `<div> 
    <h2> Ingrese un ID valido. <h2>  <div>`;
    // alert("Ingrese un ID valido.");
    console.log("Ingrese un ID valido.");
  }
  pizzas.forEach((pizza) => {
    if (pizza.id === dato) {
      pizzaName.textContent = "Seleccionste: " + `${pizza.nombre}`;
      pizzaIngredients.textContent = `${pizza.ingredientes}`;
      pizzaPrice.textContent = `$${pizza.precio}`;
      pizzaFoto.textContent = `${pizza.foto}`;
    }
  });
}

btnBusqueda.addEventListener("click", MostrarPizzas);
