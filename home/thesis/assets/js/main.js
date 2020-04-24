$(document).ready(function (){
            $(".lower").click(function (){
                $('html, body').animate({
                    scrollTop: $(".home-synopsis").offset().top
                }, 2000);
            });
        });
