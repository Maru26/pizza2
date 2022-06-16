const PIZZAS = [
    { ID: 1, nombre: 'Pepperoni', ingredientes: [ 'Salsa', ' Muzzarella', 'Huevo', 'Peperoni'] , precio: 560, imgUrl: 'https://www.marubotana.tv/wp-content/uploads/2014/09/pizza-pepe.jpg'},
    { ID: 2, nombre: 'Muzzarella', ingredientes: [ 'Salsa', ' Tomate', 'Queso', 'Oregano'] , precio: 660, imgUrl: 'https://margherita.com.ar/wp-content/uploads/2019/05/mozzarella.jpg'},
    { ID: 3, nombre: 'Jamon', ingredientes: [ 'Salsa', ' Jamon', 'Cebolla', 'Queso'] , precio: 460, imgUrl: 'https://t2.rg.ltmcdn.com/es/posts/5/2/6/pizza_napolitana_32625_orig.jpg'},
    { ID: 4, nombre: 'Morron', ingredientes: [ 'Salsa', ' Morron', 'Ajo', 'Aceitunas'] , precio: 710, imgUrl: 'https://imag.bonviveur.com/presentacion-final-de-la-pizza-prosciutto-o-con-jamon-cocido.jpg'},
    { ID: 5, nombre: 'Napolitana', ingredientes: [ 'Salsa', ' Tomate', 'Oregano', 'Ajo'] , precio: 357, imgUrl: 'https://t2.rg.ltmcdn.com/es/posts/5/2/6/pizza_napolitana_32625_600.jpg'},
]

document.addEventListener('DOMContentLoaded', () => {
    const pizzaLocal = localStorage.setItem('PIZZAS', JSON.stringify(PIZZAS));
});

const buttonSend = document.getElementById('boton');

const cart = document.getElementById('cart');

const render = document.createElement('div');

const infoPizza = document.createElement('div');

cart.appendChild(render);
cart.appendChild(infoPizza);

const imagen = document.createElement('img');


const nombre = document.createElement('p');
const ingredientes = document.createElement('p');
const precio = document.createElement('p');

render.appendChild(imagen);
infoPizza.appendChild(nombre);
infoPizza.appendChild(ingredientes);
infoPizza.appendChild(precio);



const form = document.getElementById('form');


const tomarValor = () => {
    const pizzaNumber = document.getElementById('numero').value;

    if (cart.firstChild) {
        cart.classList.add(`visible`);
        render.classList.add('render');
        infoPizza.classList.add('info');
        nombre.classList.add('nombrePizza')
    } else {
        cart.classList.remove(`visible`);
    };

    if (!pizzaNumber) {
        nombre.innerHTML = "Campo vacio";
        ingredientes.innerHTML = 'Ingresa un ID valido';
        imagen.classList.add('noneimg')
        imagen.setAttribute(`src`);
        return;
    }
    const PizzaSelec = PIZZAS.find((pizza) => pizza.ID == pizzaNumber);
    if (!PizzaSelec) {
        nombre.innerHTML = "ID no encontrado";
        ingredientes.innerHTML = 'Ingresa un ID valido';
        imagen.classList.add('noneimg')
        imagen.setAttribute(`src`);
    } else {
        imagen.setAttribute('src', PizzaSelec.imgUrl);
        imagen.innerHTML = `${PizzaSelec.imgUrl}`;
        nombre.innerHTML = `${PizzaSelec.nombre}`;
        ingredientes.innerHTML = `Los ingredientes son:<ul><li> ${PizzaSelec.ingredientes} <li></ul>`
        precio.innerHTML = `El valor es de $ ${PizzaSelec.precio}`

    }
};

form.addEventListener('submit', (e) => {
    e.preventDefault();
    e.target.reset();
});

buttonSend.addEventListener('click', tomarValor);

