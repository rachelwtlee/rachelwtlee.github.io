function fact() {
    var easterEgg = ["is a lover of eggs", "is a designer in training", "designs for community", "values sincerity",
    "is an introvert", "is a storyteller", "loves the color yellow", "believes in empathy"];
    var randomFact = easterEgg[Math.floor(Math.random()*easterEgg.length)];
    document.getElementById("funFact").textContent = randomFact;
}

// var elem = document.querySelector('.js-packery');
// var pckry = new Packery( elem, {
//   itemSelector: '.gridItem',
//   gutter: 10
// });
