//Side page
function openNav() {
    document.getElementById("sidepagemain").style.left = "6.1%";
}

function openNav2() {
    document.getElementById("sidepagefeature").style.left = "53.1%";
}

function navHome() {
   document.getElementById("featureTitle").innerHTML="FEATURED TODAY";
    document.getElementById("feature1").innerHTML="IN / DEEP with Animator Andy Biddle";
    document.getElementById("feature2").innerHTML="A Chef Finds New Flavors in a Pandemic";
    document.getElementById("feature3").innerHTML="Build a Fantastical City at Home";
}

function navEvents() {
    document.getElementById("featureTitle").innerHTML="FEATURED EVENTS";
    document.getElementById("feature1").innerHTML="IN / DEEP with Animator Andy Biddle";
    document.getElementById("feature2").innerHTML="Innovate, Build or Rebuild?";
    document.getElementById("feature3").innerHTML="320 Festival";
}

function navStories() {
    document.getElementById("featureTitle").innerHTML="FEATURED STORIES & INSPIRATION";
    document.getElementById("feature1").innerHTML="A Walk Through Wuhan: Fergus Coyle’s Warm Portrait of a City Full of Character and Light";
    document.getElementById("feature2").innerHTML="A Chinese Chef’s Tasting-Menu Deliveries, with a Side of Instagram Live";
    document.getElementById("feature3").innerHTML="Vimeo Filmmakers Document Small Businesses Navigating a World in Flux";
}

function navEntertainment() {
    document.getElementById("featureTitle").innerHTML="FEATURED THINGS TO DO";
    document.getElementById("feature1").innerHTML="Movies to Watch During Your Next Netflix Party";
    document.getElementById("feature2").innerHTML="Help Heart of Dinner Feed Chinatown's Homebound Elderly";
    document.getElementById("feature3").innerHTML="Visit Anno Mitsumasa's Audiovisual Exhibition";
    document.getElementById("credits").innerHTML="";
    
    document.getElementById("feature1").style.display="block";
    document.getElementById("feature2").style.display="block";document.getElementById("feature3").style.display="block";
}

function navAbout() {
    document.getElementById("featureTitle").innerHTML="With the deluge of negative media surrounding COVID-19 appearing on our social feeds, it is easy to feel despondent, uninspired and weary. This project aims to deliver 'bright spots' to you every day. This site is a space where we celebrate community resilience, flexibility, and creativity, and above all, prove that there is a lot to be hopeful for.";

    document.getElementById("feature1").style.display="none";
    document.getElementById("feature2").style.display="none";document.getElementById("feature3").style.display="none";
    
    document.getElementById("credits").innerHTML="Designed by Rachel Lee for Communications Studio IV";
}

function closeNav() {
    document.getElementById("sidepagemain").style.left = "-100vw";
    document.getElementById("sidepagemain").style.transition = "1.5s";
    document.getElementById("sidepagefeature").style.transition = "1.5s";
    document.getElementById("sidepagefeature").style.left = "-100vw";
}
//SIDE NAV END

//NAV BAR
function hoverEvents() {
    document.getElementById("eventsHeaderHover").style.background = "#FE653B";
    document.getElementById("eventsTitle").style.color = "#FFFFFF";
}

function hoverEventsDefault() {
    document.getElementById("eventsHeaderHover").style.background = "";
    document.getElementById("eventsTitle").style.color="#FE653B";
}

function hoverStories() {
    document.getElementById("storiesHeaderHover").style.background = "#FE653B";
    document.getElementById("storiesTitle").style.color = "#FFFFFF";
}

function hoverStoriesDefault() {
    document.getElementById("storiesHeaderHover").style.background = "";
    document.getElementById("storiesTitle").style.color="#FE653B";
}

function hoverEntertainment() {
    document.getElementById("entertainmentHeaderHover").style.background = "#FE653B";
    document.getElementById("entertainmentTitle").style.color = "#FFFFFF";
}

function hoverEntertainmentDefault() {
    document.getElementById("entertainmentHeaderHover").style.background = "";
    document.getElementById("entertainmentTitle").style.color="#FE653B";
}
//MAIN NAV HOVER END

function storiesHover() {
    document.getElementById("nike").style.background = "#FE653B";
    document.getElementById("contentTitle").style.color = "#FFFFFF";
    document.getElementById("contentAuthor").style.color = "#FFFFFF";
}

function storiesDefault() {
    document.getElementById("nike").style.background = "";
    document.getElementById("contentTitle").style.color="#FE653B";
    document.getElementById("contentAuthor").style.color = "";
}

function storiesHover2() {
    document.getElementById("masks").style.background = "#FE653B";
    document.getElementById("contentTitleMasks").style.color = "#FFFFFF";
}

function storiesDefault2() {
    document.getElementById("masks").style.background = "";
    document.getElementById("contentTitleMasks").style.color="#FE653B";
}


function storiesHover3() {
    document.getElementById("london").style.background = "#FE653B";
    document.getElementById("contentTitleLondon").style.color = "#FFFFFF";
    document.getElementById("contentAuthorLondon").style.color = "#FFFFFF";
}

function storiesDefault3() {
    document.getElementById("london").style.background = "";
    document.getElementById("contentTitleLondon").style.color="#FE653B";
    document.getElementById("contentAuthorLondon").style.color = "";
}

function storiesHover4() {
    document.getElementById("AC").style.background = "#FE653B";
    document.getElementById("contentTitleAC").style.color = "#FFFFFF";
    document.getElementById("contentAuthorAC").style.color = "#FFFFFF";
}

function storiesDefault4() {
    document.getElementById("AC").style.background = "";
    document.getElementById("contentTitleAC").style.color="#FE653B";
    document.getElementById("contentAuthorAC").style.color = "";
}

function storiesHover5() {
    document.getElementById("china").style.background = "#FE653B";
    document.getElementById("contentTitleChina").style.color = "#FFFFFF";
    document.getElementById("contentAuthorChina").style.color = "#FFFFFF";
}

function storiesDefault5() {
    document.getElementById("china").style.background = "";
    document.getElementById("contentTitleChina").style.color="#FE653B";
    document.getElementById("contentAuthorChina").style.color = "";
}

function storiesHover6() {
    document.getElementById("creatives").style.background = "#FE653B";
    document.getElementById("contentTitleCreatives").style.color = "#FFFFFF";
}

function storiesDefault6() {
    document.getElementById("creatives").style.background = "";
    document.getElementById("contentTitleCreatives").style.color="#FE653B";
    document.getElementById("contentAuthorCreatives").style.color = "";
}

function storiesHover7() {
    document.getElementById("resilience").style.background = "#FE653B";
    document.getElementById("contentTitleResilience").style.color = "#FFFFFF";
    document.getElementById("contentAuthorResilience").style.color = "#FFFFFF";
}

function storiesDefault7() {
    document.getElementById("resilience").style.background = "";
    document.getElementById("contentTitleResilience").style.color="#FE653B";
    document.getElementById("contentAuthorResilience").style.color = "";
}

function storiesHover8() {
    document.getElementById("sustainable").style.background = "#FE653B";
    document.getElementById("contentTitleSustainable").style.color = "#FFFFFF";
    document.getElementById("contentAuthorSustainable").style.color = "#FFFFFF";
}

function storiesDefault8() {
    document.getElementById("sustainable").style.background = "";
    document.getElementById("contentTitleSustainable").style.color="#FE653B";
    document.getElementById("contentAuthorSustainable").style.color = "";
}

function storiesHover9() {
    document.getElementById("flavours").style.background = "#FE653B";
    document.getElementById("contentTitleFlavours").style.color = "#FFFFFF";
    document.getElementById("contentAuthorFlavours").style.color = "#FFFFFF";
}

function storiesDefault9() {
    document.getElementById("flavours").style.background = "";
    document.getElementById("contentTitleFlavours").style.color="#FE653B";
    document.getElementById("contentAuthorFlavours").style.color = "";
}

function entertainmentHover() {
    document.getElementById("PPE").style.background = "#FE653B";
    document.getElementById("contentTitlePPE").style.color = "#FFFFFF";
}

function entertainmentDefault() {

    document.getElementById("PPE").style.background = "";
    document.getElementById("contentTitlePPE").style.color="#FE653B";
}

function entertainmentHover2() {
    document.getElementById("bread").style.background = "#FE653B";
    document.getElementById("contentTitleBread").style.color = "#FFFFFF";
}

function entertainmentDefault2() {

    document.getElementById("bread").style.background = "";
    document.getElementById("contentTitleBread").style.color="#FE653B";
}

function entertainmentHover3() {
    document.getElementById("zoom").style.background = "#FE653B";
    document.getElementById("contentTitleZoom").style.color = "#FFFFFF";
}

function entertainmentDefault3() {

    document.getElementById("zoom").style.background = "";
    document.getElementById("contentTitleZoom").style.color="#FE653B";
}

function entertainmentHover4() {
    document.getElementById("foster").style.background = "#FE653B";
    document.getElementById("contentTitleFoster").style.color = "#FFFFFF";
}

function entertainmentDefault4() {

    document.getElementById("foster").style.background = "";
    document.getElementById("contentTitleFoster").style.color="#FE653B";
}

function entertainmentHover5() {
    document.getElementById("unite").style.background = "#FE653B";
    document.getElementById("contentTitleUnite").style.color = "#FFFFFF";
}

function entertainmentDefault5() {

    document.getElementById("unite").style.background = "";
    document.getElementById("contentTitleUnite").style.color="#FE653B";
}
