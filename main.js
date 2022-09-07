// Extraigo del DOM.

const pizzaPrice= document.querySelector("#PrecioPizza")
const pizzaName= document.querySelector("#NombrePizza")
const pizzaIngredients= document.querySelector("#ingredientesPizza")
const formulario = document.querySelector("#Formulario")
const btnBusqueda=document.querySelector("#Boton")
const resultado = document.querySelector("#Resultado") 


//escuchador de eventos para que una vez haya cargado por completo el contenido del dom, se ejecute la funcion MostrarPizzas

document.addEventListener('DOMContentLoaded', () =>
{
    MostrarPizzas()
})

//Creo la funcion 
function MostrarPizzas(){
    
    const dato= parseInt(formulario.value)
    if (dato > 6) {
        alert("Ingrese un ID valido.");
    }
    pizzas.forEach(pizza =>{
        if(pizza.id === dato){
            pizzaName.textContent =  pizza.nombre
            pizzaPrice.textContent =`${pizza.precio}`
            pizzaIngredients.textContent = `${pizza.ingredientes}`
        }
    })
}

btnBusqueda.addEventListener('click', MostrarPizzas)
