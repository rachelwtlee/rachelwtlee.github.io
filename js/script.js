function fact() {
    var easterEgg = ["is a lover of eggs", "is a designer in training", "designs for community", "values sincerity",
    "is an introvert", "is a storyteller", "loves the color yellow", "is from Hong Kong"];
    var randomFact = easterEgg[Math.floor(Math.random()*easterEgg.length)];
    document.getElementById("funFact").textContent = randomFact;
}

function zeroHover() {
    document.getElementById("zero").style.cursor = "pointer";
}

function zeroDefault() {
    document.getElementById("zero").style.cursor = "";
}

function linkedinHover() {
    document.getElementById("linkedin").style.cursor = "pointer";
}

function linkedinDefault() {
    document.getElementById("linkedin").style.cursor = "";
}

function fbHover() {
    document.getElementById("fb").style.cursor = "pointer";
}

function fbDefault() {
    document.getElementById("fb").style.cursor = "";
}
