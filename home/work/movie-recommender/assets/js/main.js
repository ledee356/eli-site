let movies = [];

const datafile = "data.json";

$(function() {

    //get file
    $.getJSON(datafile, function(data) {
      // console.log(data.movieSelections);
        $("input[type='button']").click(function(){
        	var genreValue = $("input[name='genre']:checked").val();
          var languageValue = $("input[name='language']:checked").val();
          var timePeriodValue = $("input[name='timePeriod']:checked").val();
          var focusValue = $("input[name='focus']:checked").val();
            // if(genreValue){
            //     alert("Your are a - " + genreValue + languageValue + timePeriodValue + focusValue);


            // }
            movies = [genreValue, languageValue, timePeriodValue, focusValue];

            console.log(movies);
            let movieData = data.movieSelections;
          //if(genreValue == drama)&&if(languageValue == english)&&
          $.each(movieData,function(i,obj){
            // console.log(obj.genre);
            if (genreValue==obj.genre &&languageValue==obj.language && timePeriodValue==obj.timePeriod && focusValue==obj.focus){
              // console.log(obj.title1, obj.director1);
              console.log(`${i}${obj.title1} <br> ${obj.director1} ${obj.year1} ${obj.cast1} ${obj.plot1} ${obj.streaming1} <img src="${obj.poster1}">`);
              // HERE IS WHERE YOU ARE ADDING THE DIFFERENT MOVIES
              $(".results-1").append(`${obj.title1} <br> ${obj.director1} <br> ${obj.year1} <br> ${obj.cast1} <br> ${obj.plot1} <br> ${obj.streaming1} <br> <img src='${obj.poster1}'> <br> <br> <br>`);
   /*           $(".results-2").append(obj.title2, obj.director2, obj.year2, obj.cast2, obj.plot2, obj.streaming2, obj.poster2);
              $(".results-3").append(obj.title3, obj.director3, obj.year3, obj.cast3, obj.plot3, obj.streaming3, obj.poster3);
   */           //put what you want to have happen with the json
            } else {
              console.log("no match!")
            }
          });


        });
    });
    $("input[type='button']").click(function(){
       $(".submit-button").hide();
       $(".question-1").hide();
       $("h2").hide();
       $(".footer").show();
       $(".refresh").show();
     });

     $(".footer").hide();
     $(".refresh").hide();

     $(".refresh").click(function(){
       window.location.reload();
     });
});
