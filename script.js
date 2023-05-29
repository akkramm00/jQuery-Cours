$(document).ready(function() {
    alert('jQuery est bien chargé !')
    // la fonction anonyme "function()" est ce qu'on appelle collBack.
    //on peut utiliser la formule la plus simple
    //  $(function () {
    //     // une bonne pratique est de mettre le code a l'interieur de  la function collBack...
    //     // pour s'assurer de la dsponibité de la librairie
    //  });


// interagir avec le DOM
//++++++++++selectionner un selecteur++++++++++

let titleContent = $('main-title').text();
console.log(titleContent) // cette opreration consiste a récupérer le contenu du titre sans les balises html
//Si on utilise la methode 'text(avec parametre)' ,on injecte du contenu dans la page html
$('#main-title').text('un nouveaux title'); // dans ce cas on change le titre

let aboutCOntent = $('#about').html(); // cette opération consiste a récupéré le contenu htlm avec les balises html.
// la meme chose avec la mmethode "html()" avec des parametres dedans ,on injecte du html ...

$('#main-title').css('color' , 'red') // de la meme manière on injecte du css dans le fichier  css...

// on peut meme chainer les methodes pour in meme selecteur ...

$('#main-title').text('un deuxième title').css('color' , 'green');

//========== Add du CSS a la div "box" ======================

$('#box').css({
    'background' : "lightblue" ,
    'height' : '200px' ,
    'width' : '400px' ,
    'padding' : '30px'
});

// ============ Add event click a la div "box" ==============

$('#box').click((event) => {
    alert('la box a été cliquée !');
    console.log('event');
})


});

