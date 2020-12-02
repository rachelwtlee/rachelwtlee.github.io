function fact() {
    var easterEgg = ["is a lover of eggs", "is a designer in training", "designs for community", "values sincerity",
    "is an introvert", "is a storyteller", "loves the color yellow", "believes in empathy"];
    var randomFact = easterEgg[Math.floor(Math.random()*easterEgg.length)];
    document.getElementById("funFact").textContent = randomFact;
}

function aigaOver() {
  document.getElementById("aiga").style.cursor = "pointer";
  document.getElementById("aiga").style.background = "#80CF91";
  document.getElementById("aiga").style.transition = "0.25s ease-in";
  document.getElementById("aigaHeader").style.background = "#FFCCF0";
  document.getElementById("aigaHeader").style.transition = "0.25s ease-in";
}

function aigaOut() {
  document.getElementById("aiga").style.cursor = "";
  document.getElementById("aiga").style.background = "";
  document.getElementById("aiga").style.transition = "0.25s ease-out";
  document.getElementById("aigaHeader").style.background = "";
  document.getElementById("aigaHeader").style.transition = "0.25s ease-out";
}

function emOver() {
  document.getElementById("em").style.cursor = "pointer";
  document.getElementById("em").style.background = "#FCE0A8";
  document.getElementById("em").style.transition = "0.25s ease-in";
  document.getElementById("emHeader").style.background = "#EDAF70";
  document.getElementById("emHeader").style.transition = "0.25s ease-in";
  document.getElementById("emText").style.color = "#000000";
}

function emOut() {
  document.getElementById("em").style.cursor = "";
  document.getElementById("em").style.background = "";
  document.getElementById("em").style.transition = "0.25s ease-out";
  document.getElementById("emHeader").style.background = "";
  document.getElementById("emHeader").style.transition = "0.25s ease-out";
}

function lgOver() {
  document.getElementById("lg").style.cursor = "pointer";
  document.getElementById("lg").style.background = "#DA4F4F";
  document.getElementById("lg").style.transition = "0.25s ease-in";
  document.getElementById("lgHeader").style.background = "#6E4ACC";
  document.getElementById("lgHeader").style.transition = "0.25s ease-in";
}

function lgOut() {
  document.getElementById("lg").style.cursor = "";
  document.getElementById("lg").style.background = "";
  document.getElementById("lg").style.transition = "0.25s ease-out";
  document.getElementById("lgHeader").style.background = "";
  document.getElementById("lgHeader").style.transition = "0.25s ease-out";
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
