//Dato un array contenente una lista di cinque immagini, creare un carosello. 

//MILESTONE 2
//Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell'array fornito e un semplice ciclo for che concatena un template literal.
//Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile.
//Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript.

//MILESTONE 3
//Al click dell'utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.

//BONUS 1:
//Aggiungere il ciclo infinito del carosello. Ovvero se è attiva la prima immagine e l'utente clicca la freccia per andare all’immagine precedente, dovrà comparire l’ultima immagine dell’array e viceversa.

//BONUS 2:
//Aggiungere la visualizzazione di tutte le thumbnails sulla destra dell’immagine grande attiva, come nello screenshot proposto. Tutte le miniature avranno un layer di opacità scura, tranne quella corrispondente all’immagine attiva, che invece avrà un bordo colorato. Al click delle frecce, oltre al cambio di immagine attiva, gestire il cambio di miniatura attiva.

let foto = [
     './assets/img/01.webp',
     './assets/img/02.webp',
     './assets/img/03.webp',
     './assets/img/04.webp',
     './assets/img/05.webp',
];

const prev = document.querySelector('.prev')
const next = document.querySelector('.next')

console.log( prev, next)

next.addEventListener( 'click', function(){

     let activeFoto = document.querySelector('.foto.active')
     console.log(activeFoto)

     let fotoToActive = activeFoto.nextElementSibling
     console.log(fotoToActive)

     if(activeFoto.classList.contains('last')){
          fotoToActive = document.querySelector('.foto.first')
     }

     activeFoto.classList.remove('active')

     fotoToActive.classList.add('active')

})

prev.addEventListener( 'click', function(){

     let activeFoto = document.querySelector('.foto.active')
     console.log(activeFoto)

     let fotoToActive = activeFoto.previousElementSibling
     console.log(fotoToActive)

     if(activeFoto.classList.contains('first')){
          fotoToActive = document.querySelector('.foto.last')
     }

     activeFoto.classList.remove('active')

     fotoToActive.classList.add('active')

})
