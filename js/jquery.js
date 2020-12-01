$(document).ready(function() {
    $(".inlineImg").hover(function() {
        $("#rachelImg").toggleClass("show");
        $(".leftContent").toggleClass("hide");
    });

    $("#super").hover(function() {
        $("#superContent1").toggleClass("show");
        $(".leftContent").toggleClass("hide");
    });

    $("#super2").hover(function() {
        $("#superContent2").toggleClass("show");
        $(".leftContent").toggleClass("hide");
    });

    //IMAGE ZOOM ON HOVER
    $(".imgOver").hover(function() {
        $(".over").toggleClass("zoom");
    })

    $(".imgOver2").hover(function() {
        $(".over2").toggleClass("zoom");
    });

    $(".imgOver3").hover(function() {
        $(".over3").toggleClass("zoom");
    });

    // RANDOM HOVER COLOR
    var colorArray = ["#F5550E", "#80CF91", "#2AAEF9", "#FFCCF0"];
    $(".colorChange").hover(function() {
      var colorPick = colorArray[Math.floor(Math.random()*colorArray.length)];
      $(this).css("color", colorPick);
      $(".colorChange").css("cursor","pointer");
      }, function() {
      $(".colorChange").css("color", "");
      $(".colorChange").css("cursor", "");
    });

    //PAGES
    $("#aiga").click(function () {
        window.location.replace("aiga-census.html")
    });

    $("#aiga").hover(function () {
        $("#aiga").css("cursor","pointer");
        }, function() {
        $("#aiga").css("cursor","");
    });

    $("#em").click(function () {
        window.location.replace("em.html")
    })

    $("#em").hover(function () {
        $("#em").css("cursor","pointer");
        }, function() {
        $("#em").css("cursor","");
    });

    $("#lg").click(function () {
        window.location.replace("lg.html")
    });

    $("#lg").hover(function () {
        $("#lg").css("cursor","pointer");
        }, function() {
        $("#lg").css("cursor","");
    });

    //INITIALIZING FLICKITY AND PACKERY
    var $carousel = $('.carousel').flickity()
    .flickity('next')
    .flickity( 'select', 5 );
    });

    $(".js-packery").packery({
      itemSelector: 'gridItem',
      gutter: 50
    });

    var $grid = $('.js-packery').packery({});
    $grid.imagesLoaded().progress( function() {
      $grid.packery();
    });
