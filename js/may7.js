//Side page
function openNav() {
    document.getElementById("sidepagemain").style.left = "6.1%";
}

function openNav2() {
    document.getElementById("sidepagefeature").style.left = "53.1%";
}

function navHome() {
   document.getElementById("featureTitle").innerHTML="FEATURED TODAY";
    document.getElementById("feature1").innerHTML="Innovate, Build or Rebuild?";
    document.getElementById("feature2").innerHTML="Design's Role in a Public Health Crisis";
    document.getElementById("feature3").innerHTML="Register for One of MoMA's Free Online Courses";
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
    document.getElementById("BA").style.background = "#FE653B";
    document.getElementById("contentTitle").style.color = "#FFFFFF";
    document.getElementById("contentAuthor").style.color = "#FFFFFF";
}

function storiesDefault() {
    document.getElementById("BA").style.background = "";
    document.getElementById("contentTitle").style.color="#FE653B";
    document.getElementById("contentAuthor").style.color = "";
}

function storiesHover2() {
    document.getElementById("saveWithStories").style.background = "#FE653B";
    document.getElementById("contentTitleSWS").style.color = "#FFFFFF";
}

function storiesDefault2() {
    document.getElementById("saveWithStories").style.background = "";
    document.getElementById("contentTitleSWS").style.color="#FE653B";
}


function storiesHover3() {
    document.getElementById("lucasSin").style.background = "#FE653B";
    document.getElementById("contentTitleLucas").style.color = "#FFFFFF";
    document.getElementById("contentAuthorLucas").style.color = "#FFFFFF";
}

function storiesDefault3() {
    document.getElementById("lucasSin").style.background = "";
    document.getElementById("contentTitleLucas").style.color="#FE653B";
    document.getElementById("contentAuthorLucas").style.color = "";
}

function storiesHover4() {
    document.getElementById("erinSullivan").style.background = "#FE653B";
    document.getElementById("contentTitleSullivan").style.color = "#FFFFFF";
    document.getElementById("contentAuthorSullivan").style.color = "#FFFFFF";
}

function storiesDefault4() {
    document.getElementById("erinSullivan").style.background = "";
    document.getElementById("contentTitleSullivan").style.color="#FE653B";
    document.getElementById("contentAuthorSullivan").style.color = "";
}

function storiesHover5() {
    document.getElementById("aiga").style.background = "#FE653B";
    document.getElementById("contentTitleAIGA").style.color = "#FFFFFF";
    document.getElementById("contentAuthorAIGA").style.color = "#FFFFFF";
}

function storiesDefault5() {
    document.getElementById("aiga").style.background = "";
    document.getElementById("contentTitleAIGA").style.color="#FE653B";
    document.getElementById("contentAuthorAIGA").style.color = "";
}

function storiesHover6() {
    document.getElementById("trees").style.background = "#FE653B";
    document.getElementById("contentTitleTrees").style.color = "#FFFFFF";
    document.getElementById("contentAuthorTrees").style.color = "#FFFFFF";
}

function storiesDefault6() {
    document.getElementById("trees").style.background = "";
    document.getElementById("contentTitleTrees").style.color="#FE653B";
    document.getElementById("contentAuthorTrees").style.color = "";
}

function storiesHover7() {
    document.getElementById("isolation").style.background = "#FE653B";
    document.getElementById("contentTitleIsolation").style.color = "#FFFFFF";
    document.getElementById("contentAuthorIsolation").style.color = "#FFFFFF";
}

function storiesDefault7() {
    document.getElementById("isolation").style.background = "";
    document.getElementById("contentTitleIsolation").style.color="#FE653B";
    document.getElementById("contentAuthorIsolation").style.color = "";
}

function storiesHover8() {
    document.getElementById("togetherApart").style.background = "#FE653B";
    document.getElementById("contentTitleTogether").style.color = "#FFFFFF";
    document.getElementById("contentAuthorTogether").style.color = "#FFFFFF";
}

function storiesDefault8() {
    document.getElementById("togetherApart").style.background = "";
    document.getElementById("contentTitleTogether").style.color="#FE653B";
    document.getElementById("contentAuthorTogether").style.color = "";
}

function storiesHover9() {
    document.getElementById("fb").style.background = "#FE653B";
    document.getElementById("contentTitleFb").style.color = "#FFFFFF";
    document.getElementById("contentAuthorFb").style.color = "#FFFFFF";
}

function storiesDefault9() {
    document.getElementById("fb").style.background = "";
    document.getElementById("contentTitleFb").style.color="#FE653B";
    document.getElementById("contentAuthorFb").style.color = "";
}

function entertainmentHover() {
    document.getElementById("heart").style.background = "#FE653B";
    document.getElementById("contentTitleHeart").style.color = "#FFFFFF";
}

function entertainmentDefault() {

    document.getElementById("heart").style.background = "";
    document.getElementById("contentTitleHeart").style.color="#FE653B";
}

function entertainmentHover2() {
    document.getElementById("british").style.background = "#FE653B";
    document.getElementById("contentTitleBritish").style.color = "#FFFFFF";
}

function entertainmentDefault2() {

    document.getElementById("british").style.background = "";
    document.getElementById("contentTitleBritish").style.color="#FE653B";
}

function entertainmentHover3() {
    document.getElementById("timeCapsule").style.background = "#FE653B";
    document.getElementById("contentTitleCapsule").style.color = "#FFFFFF";
}

function entertainmentDefault3() {

    document.getElementById("timeCapsule").style.background = "";
    document.getElementById("contentTitleCapsule").style.color="#FE653B";
}