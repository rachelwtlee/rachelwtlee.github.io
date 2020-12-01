function fact() {
    var easterEgg = ["is a lover of eggs", "is a designer in training", "designs for community", "values sincerity",
    "is an introvert", "is a storyteller", "loves the color yellow", "believes in empathy"];
    var randomFact = easterEgg[Math.floor(Math.random()*easterEgg.length)];
    document.getElementById("funFact").textContent = randomFact;
}

$(window).scroll(function() {
   if($(window).scrollTop() + $(window).height() == $(document).height()) {
     document.getElementById("emNext").style.display = "block";
     document.getElementById("emNext").style.opacity = "1";
     document.getElementById("leftSummary").style.display = "none";
   }
   else {
     document.getElementById("emNext").style.display = "none";
     document.getElementById("emNext").style.opacity = "0";
     document.getElementById("leftSummary").style.display = "block";
   }
});
