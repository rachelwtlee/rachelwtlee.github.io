/* Easter egg accent palette — each link and superscript gets its own random color */
var ACCENT_COLORS = ['#2266CA', '#6C4DEB', '#F9C151', '#8868AD', '#F5550E'];

function randomAccent() {
  return ACCENT_COLORS[Math.floor(Math.random() * ACCENT_COLORS.length)];
}

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
function cpasOver() {
  document.getElementById("cpas").style.cursor = "pointer";
  document.getElementById("cpas").style.background = "#DCECFE";
  document.getElementById("cpas").style.transition = "0.25s ease-in";
  document.getElementById("cpasHeader").style.background = "#2266CA";
  document.getElementById("cpasHeader").style.color = "#F6F6F2";
  document.getElementById("cpasHeader").style.transition = "0.25s ease-in";
}

function cpasOut() {
  document.getElementById("cpas").style.cursor = "";
  document.getElementById("cpas").style.background = "";
  document.getElementById("cpas").style.transition = "0.25s ease-out";
  document.getElementById("cpasHeader").style.background = "";
  document.getElementById("cpasHeader").style.color = "";
  document.getElementById("cpasHeader").style.transition = "0.25s ease-out";
}

function cvOver() {
  document.getElementById("cv").style.cursor = "pointer";
  document.getElementById("cv").style.background = "#C1FAE7";
  document.getElementById("cv").style.transition = "0.25s ease-in";
  document.getElementById("cvHeader").style.background = "#6C4DEB";
  document.getElementById("cvHeader").style.color = "#F6F6F2";
  document.getElementById("cvHeader").style.transition = "0.25s ease-in";
}

function cvOut() {
  document.getElementById("cv").style.cursor = "";
  document.getElementById("cv").style.background = "";
  document.getElementById("cv").style.transition = "0.25s ease-out";
  document.getElementById("cvHeader").style.background = "";
  document.getElementById("cvHeader").style.color = "";
  document.getElementById("cvHeader").style.transition = "0.25s ease-out";
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
     document.getElementById("nextProject").style.opacity = "1";
     document.getElementById("nextProject").style.visibility = "visible";
     document.getElementById("featureNumber").style.opacity = "0";
     document.getElementById("featureTitle").style.opacity = "0";
     document.getElementById("featureSummary").style.opacity = "0";
   }
   else {
     document.getElementById("nextProject").style.opacity = "0";
     document.getElementById("nextProject").style.visibility = "hidden";
     document.getElementById("featureNumber").style.opacity = "1";
     document.getElementById("featureTitle").style.opacity = "1";
     document.getElementById("featureSummary").style.opacity = "1";
   }
});

document.addEventListener('DOMContentLoaded', function() {

  /* Per-element random color for external links — squiggle colored on load, text on hover */
  document.querySelectorAll('.bodyLink').forEach(function(el) {
    var color = randomAccent();
    el.style.textDecorationColor = color;
    el.addEventListener('mouseenter', function() { el.style.color = color; });
    el.addEventListener('mouseleave', function() { el.style.color = ''; });
  });

  /* Superscript: number always colored immediately, text + panel reveal on hover over full inlineSuperscript */
  document.querySelectorAll('.superscript').forEach(function(el) {
    var color = randomAccent();
    el.style.color = color;

    var inline = el.closest('.inlineSuperscript');
    var trigger = inline || el;

    if (inline) {
      inline.style.cursor = 'pointer';
      trigger.addEventListener('mouseenter', function() { inline.style.color = color; });
      trigger.addEventListener('mouseleave', function() { inline.style.color = ''; });
    }

    var noteId = el.dataset.note || 'superContent1';
    var note = document.getElementById(noteId);
    if (note) {
      trigger.addEventListener('mouseenter', function() { note.style.opacity = '1'; note.style.visibility = 'visible'; });
      trigger.addEventListener('mouseleave', function() { note.style.opacity = '0'; note.style.visibility = 'hidden'; });
    }
  });

});
