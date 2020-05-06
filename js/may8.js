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
    document.getElementById("quest").style.background = "#FE653B";
    document.getElementById("contentTitle").style.color = "#FFFFFF";
    document.getElementById("contentAuthor").style.color = "#FFFFFF";
}

function storiesDefault() {
    document.getElementById("quest").style.background = "";
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
    document.getElementById("cactus").style.background = "#FE653B";
    document.getElementById("contentTitleCactus").style.color = "#FFFFFF";
    document.getElementById("contentAuthorCactus").style.color = "#FFFFFF";
}

function storiesDefault7() {
    document.getElementById("cactus").style.background = "";
    document.getElementById("contentTitleCactus").style.color="#FE653B";
    document.getElementById("contentAuthorCactus").style.color = "";
}

function storiesHover8() {
    document.getElementById("instagram").style.background = "#FE653B";
    document.getElementById("contentTitleInstagram").style.color = "#FFFFFF";
    document.getElementById("contentAuthorInstagram").style.color = "#FFFFFF";
}

function storiesDefault8() {
    document.getElementById("instagram").style.background = "";
    document.getElementById("contentTitleInstagram").style.color="#FE653B";
    document.getElementById("contentAuthorInstagram").style.color = "";
}

function storiesHover9() {
    document.getElementById("doodle").style.background = "#FE653B";
    document.getElementById("contentTitleDoodle").style.color = "#FFFFFF";
    document.getElementById("contentAuthorDoodle").style.color = "#FFFFFF";
}

function storiesDefault9() {
    document.getElementById("doodle").style.background = "";
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

function entertainmentHover() {
    document.getElementById("anno").style.background = "#FE653B";
    document.getElementById("contentTitleAnno").style.color = "#FFFFFF";
}

function entertainmentDefault() {

    document.getElementById("anno").style.background = "";
    document.getElementById("contentTitleAnno").style.color="#FE653B";
}

function entertainmentHover2() {
    document.getElementById("test").style.background = "#FE653B";
    document.getElementById("contentTitleTest").style.color = "#FFFFFF";
}

function entertainmentDefault2() {

    document.getElementById("test").style.background = "";
    document.getElementById("contentTitleTest").style.color="#FE653B";
}

function entertainmentHover3() {
    document.getElementById("louise").style.background = "#FE653B";
    document.getElementById("contentTitleLouise").style.color = "#FFFFFF";
}

function entertainmentDefault3() {

    document.getElementById("louise").style.background = "";
    document.getElementById("contentTitleLouise").style.color="#FE653B";
}

function entertainmentHover4() {
    document.getElementById("book").style.background = "#FE653B";
    document.getElementById("contentTitleBook").style.color = "#FFFFFF";
}

function entertainmentDefault4() {

    document.getElementById("book").style.background = "";
    document.getElementById("contentTitleBook").style.color="#FE653B";
}

function entertainmentHover5() {
    document.getElementById("umbrella").style.background = "#FE653B";
    document.getElementById("contentTitleUmbrella").style.color = "#FFFFFF";
}

function entertainmentDefault5() {

    document.getElementById("umbrella").style.background = "";
    document.getElementById("contentTitleUmbrella").style.color="#FE653B";
}

function entertainmentHover6() {
    document.getElementById("kids").style.background = "#FE653B";
    document.getElementById("contentTitleKids").style.color = "#FFFFFF";
}

function entertainmentDefault6() {

    document.getElementById("kids").style.background = "";
    document.getElementById("contentTitleKids").style.color="#FE653B";
}