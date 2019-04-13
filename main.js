// SCROLL SPY

(function() {
  $(document).ready(function() {
    var scrollLink = $(".scroll");

    $(window).scroll(function() {
      var scrollbarLocation = $(this).scrollTop();

      scrollLink.each(function() {
        var sectionOffset = $(this.hash).offset().top - 67;

        if (sectionOffset <= scrollbarLocation) {
          $(this)
            .parent()
            .addClass("active");
          $(this)
            .parent()
            .siblings()
            .removeClass("active");
        }
      });
    });

    // IMG FILTER

    var selectedClass = "";
    var portfolioContent = $("#portfolio-content");

    $(".fil-cat").click(function() {
      selectedClass = $(this).attr("data-rel");

      portfolioContent.fadeTo(100, 0.1);

      portfolioContent
        .find(".img-div")
        .not("." + selectedClass)
        .fadeOut()
        .removeClass("scale-anm");

      setTimeout(function() {
        $("." + selectedClass)
          .fadeIn()
          .addClass("scale-anm");
        portfolioContent.fadeTo(400, 1);
      }, 400);
    });

    // SHOW NAV ON ON SCROLL -300px

    window.onscroll = function() {
      scrollFunction();
    };

    function scrollFunction() {
      if (
        document.body.scrollTop > 150 ||
        document.documentElement.scrollTop > 150
      ) {
        document.getElementById("navcontainer").style.top = "0";
      } else {
        document.getElementById("navcontainer").style.top = "-300px";
      }
    }

    // SMOOTH SCROLL CROSS BROWSER

    $(".header a, .navbar-nav a").on("click", function(e) {
      if (this.hash !== "") {
        e.preventDefault();

        var hash = this.hash;

        $("html, body").animate(
          {
            scrollTop: $(hash).offset().top
          },
          1000
        );
      }
    });

    // SHOW / HIDE

    $("#show").click(function() {
      $(".browse").hide();
      $(".blogContentHidden").show();
    });

    // HIDE NAVIGATION ON CLICK (MOBILE)

    $(function() {
      var navMain = $(".navbar-collapse");

      navMain.on("click", "a", null, function() {
        navMain.collapse("hide");
      });
    });
  });
})();
