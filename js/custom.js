

  /*-------------------------------------------------------------------------------
    PRE LOADER
  -------------------------------------------------------------------------------*/

  $(window).load(function(){
    $('.preloader').fadeOut(1000); // set duration in brackets
  });



  /* HTML document is loaded. DOM is ready.
  -------------------------------------------*/

  $(document).ready(function() {


  /*-------------------------------------------------------------------------------
    Navigation - Hide mobile menu after clicking on a link
  -------------------------------------------------------------------------------*/

    $('.navbar-collapse a').click(function(){
        $(".navbar-collapse").collapse('hide');
    });


    $(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
  });



  /*-------------------------------------------------------------------------------
    Contact Form
  -------------------------------------------------------------------------------*/

  $("#contact").submit(function (e) {
    e.preventDefault();
    var name = $("#cf-name").val();
    var email = $("#cf-email").val();
    var subject = $("#cf-subject").val();
    var message = $("#cf-message").val();
    var dataString = 'name=' + name + '&email=' + email + '&subject=' + subject + '&message=' + message;

    function isValidEmail(emailAddress) {
        var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
        return pattern.test(emailAddress);
    };
    if (isValidEmail(email) && (message.length > 1) && (name.length > 1)) {
        $.ajax({
            type: "POST",
            url: "php/contact.php",
            data: dataString,
            success: function () {
                $('.text-success').fadeIn(1000);
                $('.text-danger').fadeOut(500);
            }
        });
    }
    else {
        $('.text-danger').fadeIn(1000);
        $('.text-success').fadeOut(500);
    }
    return false;
  });



  /*-------------------------------------------------------------------------------
    jQuery Parallax
  -------------------------------------------------------------------------------*/

    function initParallax() {
    $('#home').parallax("100%", 0.1);
    $('#portfolio').parallax("100%", 0.3);
    $('#about').parallax("100%", 0.2);
    $('#skills').parallax("100%", 0.3);
    $('#service').parallax("100%", 0.1);
    $('#team').parallax("100%", 0.3);
    $('#testimonial').parallax("100%", 0.2);
    $('#contact').parallax("100%", 0.1);
    }
  initParallax();



  /*-------------------------------------------------------------------------------
    Owl Carousel
  -------------------------------------------------------------------------------*/

   $(document).ready(function() {
    $("#owl-testimonial").owlCarousel({
      autoPlay: 10000,
      items : 1,
      itemsDesktop : [1199,1],
      itemsDesktopSmall : [979,1],
      itemsTablet: [768,1],
      itemsTabletSmall: false,
      itemsMobile : [479,1],
      Speedfast: 600,
    });
  });



  /*-------------------------------------------------------------------------------
    Simple text rotator
  -------------------------------------------------------------------------------*/

  $(".rotate").textrotator();


  /*-------------------------------------------------------------------------------
    Charts js
  -------------------------------------------------------------------------------*/

  var ctx = document.getElementById("myChart").getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Первый фильм", "Фильм на двух языках", "Запуск двух фильмов", "Оба фильма на двух языках"],
        datasets: [{
            label: 'Бюджет в $',
            data: [200000, 250000, 500000, 650000],
            backgroundColor: [
                'rgba(250, 54, 53, 0.7)',
                'rgba(250, 54, 53, 0.7)',
                'rgba(250, 54, 53, 0.7)',
                'rgba(250, 54, 53, 0.7)'
            ],
            borderColor: [
                'rgba(250, 54, 53,1)',
                'rgba(250, 54, 53, 1)',
                'rgba(250, 54, 53, 1)',
                'rgba(250, 54, 53, 1)'
            ],
            borderWidth: 2
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});

  /*-------------------------------------------------------------------------------
    smoothScroll js
  -------------------------------------------------------------------------------*/

    $(function() {
        $('.custom-navbar a, #home a').bind('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 49
            }, 1000);
            event.preventDefault();
        });
    });



  /*-------------------------------------------------------------------------------
    wow js - Animation js
  -------------------------------------------------------------------------------*/

  new WOW({ mobile: false }).init();


  });
