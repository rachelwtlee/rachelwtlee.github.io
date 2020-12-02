function fact() {
    var easterEgg = ["is a lover of eggs", "is a designer in training", "designs for community", "values sincerity",
    "is an introvert", "is a storyteller", "loves the color yellow", "believes in empathy"];
    var randomFact = easterEgg[Math.floor(Math.random()*easterEgg.length)];
    document.getElementById("funFact").textContent = randomFact;
}

$(window).scroll(function() {
   if($(window).scrollTop() + $(window).height() == $(document).height()) {
     document.getElementById("nextProject").style.display = "block";
     document.getElementById("nextProject").style.opacity = "1";
     document.getElementById("featureNumber").style.display = "none";
     document.getElementById("featureTitle").style.display = "none";
     document.getElementById("featureSummary").style.display = "none";
   }
   else {
     document.getElementById("nextProject").style.display = "none";
     document.getElementById("nextProject").style.opacity = "0";
     document.getElementById("featureNumber").style.display = "block";
     document.getElementById("featureTitle").style.display = "block";
     document.getElementById("featureSummary").style.display = "block";
   }
});
