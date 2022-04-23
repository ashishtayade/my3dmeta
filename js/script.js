	$(window).scroll(function() {    
          var scroll = $(window).scrollTop();

           //>=, not <=
          if (scroll >= 100) {
              //clearHeader, not clearheader - caps H
              $(".navbar").addClass("bg-white");
          } else {
              $(".navbar").removeClass("bg-white");
          }
      });