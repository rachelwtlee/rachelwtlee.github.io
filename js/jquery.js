$(document).ready(function() {
    $(".inlineImg").hover(function() {
        $("#rachelImg").toggleClass("show");
        $(".leftContent").toggleClass("hide");
    })

    $("#super").hover(function() {
        $("#superContent1").toggleClass("show");
        $(".leftContent").toggleClass("hide");
    })

    $("#super2").hover(function() {
        $("#superContent2").toggleClass("show");
        $(".leftContent").toggleClass("hide");
    })

    //Image zoom on hover
    $(".imgOver").hover(function() {
        $(".over").toggleClass("zoom");
    })

    $(".imgOver2").hover(function() {
        $(".over2").toggleClass("zoom");
    });

    $(".imgOver3").hover(function() {
        $(".over3").toggleClass("zoom");
    });

    //Randomly change hover color on zoom
    var colorArray = ["#F5550E", "#80CF91", "#2AAEF9", "#FFCCF0"];
    $(".colorChange").hover(function() {
      var colorPick = colorArray[Math.floor(Math.random()*colorArray.length)];
      $(this).css("color", colorPick);
      $(".colorChange").css("cursor","pointer");
      }, function() {
      $(".colorChange").css("color", "");
      $(".colorChange").css("cursor", "");
    });

    //Navigate to new pages on click
    $("#aiga").click(function () {
        window.location.replace("aiga-census.html")
    });

    $("#em").click(function () {
        window.location.replace("em.html")
    })

    $("#lg").click(function () {
        window.location.replace("lg.html")
    });

    //INITIALIZING MASONRY AND PACKERY LIBRARIES
    var $carousel = $('.carousel').flickity()
    .flickity('next')
    .flickity( 'select', 5 );
    });

    var $grid = $('.grid').masonry({
      itemSelector: '.gridItem',
      percentPosition: true
    });

    $grid.imagesLoaded().progress( function() {
      $grid.masonry();
      $carousel.flikity();
    });
