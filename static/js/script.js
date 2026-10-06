// Funcionalidad de Likes
let like = document.querySelector("#like");
let boton = document.querySelector("#likesin");

boton.addEventListener("click", function () {
    let contador = parseInt(like.innerText);
    like.innerText = contador + 1;
});

// Funcionalidad de Dislikes
let likeson = document.querySelector("#dislike");
let boton1 = document.querySelector("#dislikesin");

boton1.addEventListener("click", function () {
    let contador = parseInt(likeson.innerText);
    likeson.innerText = contador + 1;
});

// Funcionalidad Suscribirse
const botonn = document.querySelector("#Suscribirse");
const mass = document.querySelector("#suscripcion");
let contadorr = parseInt(mass.innerText);
let menos = parseInt(mass.innerText);

botonn.addEventListener('click', () => {
    if (botonn.textContent === 'Suscribirse') {
        botonn.textContent = 'Suscrito';
        botonn.style.backgroundColor = '#b5bbb8';
        botonn.style.color = 'black';
        mass.innerText = `${contadorr + 1} de suscriptores`;
    } else {
        botonn.textContent = 'Suscribirse';
        botonn.style.backgroundColor = '#fa0000';
        botonn.style.color = 'white';
        mass.innerText = `${menos - 0} de suscriptores`;
    }
});

// Añadir a la cola
const añadir_cola = document.querySelector("#añadirr");
if (añadir_cola) {
    añadir_cola.addEventListener('click', () => {
        alert(`Video añadido a la cola`);
    });
}

const añadir_colaa = document.querySelector("#añadirr1");
if (añadir_colaa) {
    añadir_colaa.addEventListener('click', () => {
        alert(`Video añadido a la cola`);
    });
}

const añadir_colaaa = document.querySelector("#añadirr2");
if (añadir_colaaa) {
    añadir_colaaa.addEventListener('click', () => {
        alert(`Video añadido a la cola`);
    });
}

// Hover sobre el video de la Patagonia
const explorando = document.querySelector("#explorando_lapatagonia");
if (explorando) {
    explorando.addEventListener("mouseover", function () {
        explorando.src = "static/video/explorando_patagonia.mp4";
    });

    explorando.addEventListener("mouseout", function () {
        explorando.src = "static/images/patagonia.png";
    });
}