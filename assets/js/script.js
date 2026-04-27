/* Random fun fact displayed in header */
var EASTER_EGGS = [
  "needs to believe in the why",
  "is happiest outside",
  "makes tiny fruits",
  "thinks a good typeface changes everything",
  "decides what to order when the waiter arrives",
  "picks up what needs picking up",
  "loves a good puzzle",
  "always has a book on the go",
  "believes empathy is a design tool",
  "crafts with care"
];

var FUN_FACT_STORAGE_KEY = "headerFunFactIndex";

function shuffleIndexes(total) {
  var indexes = [];
  var i;

  for (i = 0; i < total; i += 1) {
    indexes.push(i);
  }

  for (i = indexes.length - 1; i > 0; i -= 1) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = indexes[i];
    indexes[i] = indexes[j];
    indexes[j] = temp;
  }

  return indexes;
}

function pickFactIndex(total, previousIndex) {
  var indexes = shuffleIndexes(total);

  if (total <= 1 || previousIndex === null || previousIndex < 0 || previousIndex >= total) {
    return indexes[0];
  }

  if (indexes[0] === previousIndex) {
    return indexes[1];
  }

  return indexes[0];
}

function selectHeaderFact(funFactEl) {
  var isMobile = window.matchMedia("(max-width: 504px)").matches;
  var previousIndex = parseInt(sessionStorage.getItem(FUN_FACT_STORAGE_KEY), 10);
  var usablePreviousIndex = Number.isNaN(previousIndex) ? null : previousIndex;

  if (isMobile) {
    // Keep the header compact on mobile.
    funFactEl.textContent = "";
    return;
  }

  var selectedIndex = pickFactIndex(EASTER_EGGS.length, usablePreviousIndex);
  funFactEl.textContent = EASTER_EGGS[selectedIndex];
  sessionStorage.setItem(FUN_FACT_STORAGE_KEY, String(selectedIndex));
}

function fact() {
  var funFactEl = document.getElementById("funFact");
  if (!funFactEl) {
    return;
  }

  // Start hidden so text can ease in smoothly after assignment.
  funFactEl.classList.remove("is-visible");
  selectHeaderFact(funFactEl);

  if (!window.matchMedia("(max-width: 504px)").matches && funFactEl.textContent) {
    window.requestAnimationFrame(function() {
      funFactEl.classList.add("is-visible");
    });
  }
}

document.addEventListener("DOMContentLoaded", fact);

/*Feature projects styling on home page*/
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
  document.getElementById("em").style.background = "#F4EBE0";
  document.getElementById("em").style.transition = "0.25s ease-in";
  document.getElementById("emHeader").style.background = "#F9C151";
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
  document.getElementById("lg").style.background = "#DAE6F6";
  document.getElementById("lg").style.transition = "0.25s ease-in";
  document.getElementById("lgHeader").style.background = "#8868AD";
  document.getElementById("lgHeader").style.transition = "0.25s ease-in";
}

function lgOut() {
  document.getElementById("lg").style.cursor = "";
  document.getElementById("lg").style.background = "";
  document.getElementById("lg").style.transition = "0.25s ease-out";
  document.getElementById("lgHeader").style.background = "";
  document.getElementById("lgHeader").style.transition = "0.25s ease-out";
}

/*Display next project in left panel when user scrolls to bottom of page*/
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
