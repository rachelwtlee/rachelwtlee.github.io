//Side page
function openNav() {
    document.getElementById("sidepagemain").style.left = "6.1%";
}

function openNav2() {
    document.getElementById("sidepagefeature").style.left = "53.1%";
}

function navHome() {
   document.getElementById("featureTitle").innerHTML="FEATURED TODAY";
    document.getElementById("feature1").innerHTML="Secret Sofa";
    document.getElementById("feature2").innerHTML="Vimeo Filmmakers Document Small Businesses Navigating a World in Flux";
    document.getElementById("feature3").innerHTML="Volunteer to Help the Elderly with Their Chores";
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
    
     document.getElementById("feature1").style.display="block";
    document.getElementById("feature2").style.display="block";document.getElementById("feature3").style.display="block";
    document.getElementById("credits").innerHTML="";
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

function closeNav() {
    document.getElementById("sidepagemain").style.left = "-100vw";
    document.getElementById("sidepagemain").style.transition = "1.5s";
    document.getElementById("sidepagefeature").style.transition = "1.5s";
    document.getElementById("sidepagefeature").style.left = "-100vw";
}

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
    document.getElementById("questStories").style.background = "#FE653B";
    document.getElementById("contentTitle").style.color = "#FFFFFF";
    document.getElementById("contentAuthor").style.color = "#FFFFFF";
}

function storiesDefault() {
    document.getElementById("questStories").style.background = "";
    document.getElementById("contentTitle").style.color="#FE653B";
    document.getElementById("contentAuthor").style.color = "";
}

function storiesHover2() {
    document.getElementById("intimacy").style.background = "#FE653B";
    document.getElementById("contentTitleIntimacy").style.color = "#FFFFFF";
    document.getElementById("contentAuthorIntimacy").style.color = "#FFFFFF";
}

function storiesDefault2() {
    document.getElementById("intimacy").style.background = "";
    document.getElementById("contentTitleIntimacy").style.color="#FE653B";
    document.getElementById("contentAuthorIntimacy").style.color = "";
}


function storiesHover3() {
    document.getElementById("phone").style.background = "#FE653B";
    document.getElementById("contentTitlePhone").style.color = "#FFFFFF";
    document.getElementById("contentAuthorPhone").style.color = "#FFFFFF";
}

function storiesDefault3() {
    document.getElementById("phone").style.background = "";
    document.getElementById("contentTitlePhone").style.color="#FE653B";
    document.getElementById("contentAuthorPhone").style.color = "";
}

function storiesHover4() {
    document.getElementById("wuhan").style.background = "#FE653B";
    document.getElementById("contentTitleWuhan").style.color = "#FFFFFF";
    document.getElementById("contentAuthorWuhan").style.color = "#FFFFFF";
}

function storiesDefault4() {
    document.getElementById("wuhan").style.background = "";
    document.getElementById("contentTitleWuhan").style.color="#FE653B";
    document.getElementById("contentAuthorWuhan").style.color = "";
}

function storiesHover5() {
    document.getElementById("vimeo").style.background = "#FE653B";
    document.getElementById("contentTitleVimeo").style.color = "#FFFFFF";
    document.getElementById("contentAuthorVimeo").style.color = "#FFFFFF";
}

function storiesDefault5() {
    document.getElementById("vimeo").style.background = "";
    document.getElementById("contentTitleVimeo").style.color="#FE653B";
    document.getElementById("contentAuthorVimeo").style.color = "";
}

function storiesHover6() {
    document.getElementById("commencement").style.background = "#FE653B";
    document.getElementById("contentTitleCommencement").style.color = "#FFFFFF";
    document.getElementById("contentAuthorCommencement").style.color = "#FFFFFF";
}

function storiesDefault6() {
    document.getElementById("commencement").style.background = "";
    document.getElementById("contentTitleCommencement").style.color="#FE653B";
    document.getElementById("contentAuthorCommencement").style.color = "";
}

function storiesHover7() {
    document.getElementById("cactusStories").style.background = "#FE653B";
    document.getElementById("contentTitleCactus").style.color = "#FFFFFF";
    document.getElementById("contentAuthorCactus").style.color = "#FFFFFF";
}

function storiesDefault7() {
    document.getElementById("cactusStories").style.background = "";
    document.getElementById("contentTitleCactus").style.color="#FE653B";
    document.getElementById("contentAuthorCactus").style.color = "";
}

function storiesHover8() {
    document.getElementById("instagramStories").style.background = "#FE653B";
    document.getElementById("contentTitleInstagram").style.color = "#FFFFFF";
    document.getElementById("contentAuthorInstagram").style.color = "#FFFFFF";
}

function storiesDefault8() {
    document.getElementById("instagramStories").style.background = "";
    document.getElementById("contentTitleInstagram").style.color="#FE653B";
    document.getElementById("contentAuthorInstagram").style.color = "";
}

function storiesHover9() {
    document.getElementById("doodleStories").style.background = "#FE653B";
    document.getElementById("contentTitleDoodle").style.color = "#FFFFFF";
    document.getElementById("contentAuthorDoodle").style.color = "#FFFFFF";
}

function storiesDefault9() {
    document.getElementById("doodleStories").style.background = "";
    document.getElementById("contentTitleDoodle").style.color="#FE653B";
    document.getElementById("contentAuthorDoodle").style.color = "";
}

function storiesHover10() {
    document.getElementById("peace").style.background = "#FE653B";
    document.getElementById("contentTitlePeace").style.color = "#FFFFFF";
    document.getElementById("contentAuthorPeace").style.color = "#FFFFFF";
}

function storiesDefault10() {
    document.getElementById("peace").style.background = "";
    document.getElementById("contentTitlePeace").style.color="#FE653B";
    document.getElementById("contentAuthorPeace").style.color = "";
}

function storiesHover11() {
    document.getElementById("BA").style.background = "#FE653B";
    document.getElementById("contentTitleBA").style.color = "#FFFFFF";
    document.getElementById("contentAuthorBA").style.color = "#FFFFFF";
}

function storiesDefault11() {
    document.getElementById("BA").style.background = "";
    document.getElementById("contentTitleBA").style.color="#FE653B";
    document.getElementById("contentAuthorBA").style.color = "";
}

function storiesHover12() {
    document.getElementById("saveWithStoriesStories").style.background = "#FE653B";
    document.getElementById("contentTitleSWS").style.color = "#FFFFFF";
}

function storiesDefault12() {
    document.getElementById("saveWithStoriesStories").style.background = "";
    document.getElementById("contentTitleSWS").style.color="#FE653B";
}


function storiesHover13() {
    document.getElementById("lucasSinStories").style.background = "#FE653B";
    document.getElementById("contentTitleLucas").style.color = "#FFFFFF";
    document.getElementById("contentAuthorLucas").style.color = "#FFFFFF";
}

function storiesDefault13() {
    document.getElementById("lucasSinStories").style.background = "";
    document.getElementById("contentTitleLucas").style.color="#FE653B";
    document.getElementById("contentAuthorLucas").style.color = "";
}

function storiesHover14() {
    document.getElementById("erinSullivanStories").style.background = "#FE653B";
    document.getElementById("contentTitleSullivan").style.color = "#FFFFFF";
    document.getElementById("contentAuthorSullivan").style.color = "#FFFFFF";
}

function storiesDefault14() {
    document.getElementById("erinSullivanStories").style.background = "";
    document.getElementById("contentTitleSullivan").style.color="#FE653B";
    document.getElementById("contentAuthorSullivan").style.color = "";
}

function storiesHover15() {
    document.getElementById("aiga").style.background = "#FE653B";
    document.getElementById("contentTitleAIGA").style.color = "#FFFFFF";
    document.getElementById("contentAuthorAIGA").style.color = "#FFFFFF";
}

function storiesDefault15() {
    document.getElementById("aiga").style.background = "";
    document.getElementById("contentTitleAIGA").style.color="#FE653B";
    document.getElementById("contentAuthorAIGA").style.color = "";
}

function storiesHover16() {
    document.getElementById("trees").style.background = "#FE653B";
    document.getElementById("contentTitleTrees").style.color = "#FFFFFF";
    document.getElementById("contentAuthorTrees").style.color = "#FFFFFF";
}

function storiesDefault16() {
    document.getElementById("trees").style.background = "";
    document.getElementById("contentTitleTrees").style.color="#FE653B";
    document.getElementById("contentAuthorTrees").style.color = "";
}

function storiesHover17() {
    document.getElementById("isolationStories").style.background = "#FE653B";
    document.getElementById("contentTitleIsolation").style.color = "#FFFFFF";
    document.getElementById("contentAuthorIsolation").style.color = "#FFFFFF";
}

function storiesDefault17() {
    document.getElementById("isolationStories").style.background = "";
    document.getElementById("contentTitleIsolation").style.color="#FE653B";
    document.getElementById("contentAuthorIsolation").style.color = "";
}

function storiesHover18() {
    document.getElementById("togetherApartStories").style.background = "#FE653B";
    document.getElementById("contentTitleTogether").style.color = "#FFFFFF";
    document.getElementById("contentAuthorTogether").style.color = "#FFFFFF";
}

function storiesDefault18() {
    document.getElementById("togetherApartStories").style.background = "";
    document.getElementById("contentTitleTogether").style.color="#FE653B";
    document.getElementById("contentAuthorTogether").style.color = "";
}

function storiesHover19() {
    document.getElementById("fbStories").style.background = "#FE653B";
    document.getElementById("contentTitleFb").style.color = "#FFFFFF";
    document.getElementById("contentAuthorFb").style.color = "#FFFFFF";
}

function storiesDefault19() {
    document.getElementById("fbStories").style.background = "";
    document.getElementById("contentTitleFb").style.color="#FE653B";
    document.getElementById("contentAuthorFb").style.color = "";
}

function storiesHover20() {
    document.getElementById("nikeStories").style.background = "#FE653B";
    document.getElementById("contentTitleNike").style.color = "#FFFFFF";
    document.getElementById("contentAuthorNike").style.color = "#FFFFFF";
}

function storiesDefault20() {
    document.getElementById("nikeStories").style.background = "";
    document.getElementById("contentTitleNike").style.color="#FE653B";
    document.getElementById("contentAuthorNike").style.color = "";
}

function storiesHover21() {
    document.getElementById("masksStories").style.background = "#FE653B";
    document.getElementById("contentTitleMasks").style.color = "#FFFFFF";
}

function storiesDefault21() {
    document.getElementById("masksStories").style.background = "";
    document.getElementById("contentTitleMasks").style.color="#FE653B";
}


function storiesHover22() {
    document.getElementById("londonStories").style.background = "#FE653B";
    document.getElementById("contentTitleLondon").style.color = "#FFFFFF";
    document.getElementById("contentAuthorLondon").style.color = "#FFFFFF";
}

function storiesDefault22() {
    document.getElementById("londonStories").style.background = "";
    document.getElementById("contentTitleLondon").style.color="#FE653B";
    document.getElementById("contentAuthorLondon").style.color = "";
}

function storiesHover23() {
    document.getElementById("AC").style.background = "#FE653B";
    document.getElementById("contentTitleAC").style.color = "#FFFFFF";
    document.getElementById("contentAuthorAC").style.color = "#FFFFFF";
}

function storiesDefault23() {
    document.getElementById("AC").style.background = "";
    document.getElementById("contentTitleAC").style.color="#FE653B";
    document.getElementById("contentAuthorAC").style.color = "";
}

function storiesHover24() {
    document.getElementById("china").style.background = "#FE653B";
    document.getElementById("contentTitleChina").style.color = "#FFFFFF";
    document.getElementById("contentAuthorChina").style.color = "#FFFFFF";
}

function storiesDefault24() {
    document.getElementById("china").style.background = "";
    document.getElementById("contentTitleChina").style.color="#FE653B";
    document.getElementById("contentAuthorChina").style.color = "";
}

function storiesHover25() {
    document.getElementById("creatives").style.background = "#FE653B";
    document.getElementById("contentTitleCreatives").style.color = "#FFFFFF";
}

function storiesDefault25() {
    document.getElementById("creatives").style.background = "";
    document.getElementById("contentTitleCreatives").style.color="#FE653B";
    document.getElementById("contentAuthorCreatives").style.color = "";
}

function storiesHover26() {
    document.getElementById("resilienceStories").style.background = "#FE653B";
    document.getElementById("contentTitleResilience").style.color = "#FFFFFF";
    document.getElementById("contentAuthorResilience").style.color = "#FFFFFF";
}

function storiesDefault26() {
    document.getElementById("resilienceStories").style.background = "";
    document.getElementById("contentTitleResilience").style.color="#FE653B";
    document.getElementById("contentAuthorResilience").style.color = "";
}

function storiesHover27() {
    document.getElementById("sustainableStories").style.background = "#FE653B";
    document.getElementById("contentTitleSustainable").style.color = "#FFFFFF";
    document.getElementById("contentAuthorSustainable").style.color = "#FFFFFF";
}

function storiesDefault27() {
    document.getElementById("sustainableStories").style.background = "";
    document.getElementById("contentTitleSustainable").style.color="#FE653B";
    document.getElementById("contentAuthorSustainable").style.color = "";
}

function storiesHover28() {
    document.getElementById("flavoursStories").style.background = "#FE653B";
    document.getElementById("contentTitleFlavours").style.color = "#FFFFFF";
    document.getElementById("contentAuthorFlavours").style.color = "#FFFFFF";
}

function storiesDefault28() {
    document.getElementById("flavoursStories").style.background = "";
    document.getElementById("contentTitleFlavours").style.color="#FE653B";
    document.getElementById("contentAuthorFlavours").style.color = "";
}