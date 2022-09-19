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

let myPizzas = JSON.parse(localStorage.getItem("pizzas"));

const saveToLocalStorage = () => {
  localStorage.setItem("pizzas", JSON.stringify(pizzas));
};

const showError = () => {
  resultado.innerHTML = `<div> 
    <h2> Ingrese un ID valido. <h2>  <div>`;
};

//Creo la funcion
function MostrarPizzas() {
  const dato = parseInt(formulario.value);
  if (dato > 6) {
    showError();
    // alert("Ingrese un ID valido.");
    console.log("Ingrese un ID valido.");
    return;
  }

  // Funciona todo correctamente, al poner un ID que no se encuentra se printea el mensaje de que no es valido, el problema es que se queda ahi trabado y no supe como hacer para solucionarlo.

  pizzas.forEach((pizza) => {
    if (pizza.id === dato) {
      pizzaName.textContent = "Seleccionste: " + `${pizza.nombre}`;
      pizzaIngredients.textContent = `${pizza.ingredientes}`;
      pizzaPrice.textContent = `$${pizza.precio}`;
      pizzaFoto.src = `${pizza.foto}`;
    }
  });

  saveToLocalStorage();
}

btnBusqueda.addEventListener("click", MostrarPizzas);
