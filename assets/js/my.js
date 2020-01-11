$(document).ready(function (){
            $(".lower").click(function (){
                $('html, body').animate({
                    scrollTop: $(".home-footer1").offset().top
                }, 2000);
            });
        });
