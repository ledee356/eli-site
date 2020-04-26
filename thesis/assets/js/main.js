$(document).ready(function (){
            $(".lower").click(function (){
                $('html, body').animate({
                    scrollTop: $(".background2").offset().top
                }, 2000);
            });
        });


        (function($){

          $(document).ready(function(){

            $('.main-carousel').flickity({
              cellAlign: 'left',
              wrapAround: true

            });

          });


        })(jQuery)
