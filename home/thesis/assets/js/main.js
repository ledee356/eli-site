$(document).ready(function (){
            $(".lower").click(function (){
                $('html, body').animate({
                    scrollTop: $(".background2").offset().top
                }, 2000);
            });
        });
