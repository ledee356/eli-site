// class movieSelections{
//   constructor(genre, language, timePeriod, focus, movies){
//     this._genre = genre;
//     this._language = language;
//     this._timePeriod = timePeriod;
//     this._focus = focus;
//   }
// }
//
// let moviesList = [];
//
// const datafile = "data.json";

$(function() {

    //get file
    // $.getJSON(datafile, function(data) {
    //   console.log(data.movieSelections);
    // });
  $("input[type='button']").click( function(){
    $(".results").css("opacity", "1");
  });
});


// var jqxhr = $.getJSON( "assets/json/datafile.json", function() {
//   console.log( "success" );
// })
//   .done(function() {
//     console.log( "second success" );
//   })
//   .fail(function() {
//     console.log( "error" );
//   })
//   .always(function() {
//     console.log( "complete" );
//   });


//
//
// const selectionOne = new movieSelections("Drama", "English", "Recent", "Plot")
// const selectionTwo = new movieSelections("Drama", "English", "Recent", "Character")
//
// const selectionThree = new movieSelections("Drama", "English", "Older", "Plot")
// const selectionFour = new movieSelections("Drama", "English", "Older", "Character")
//
// const selectionFive = new movieSelections("Drama", "International", "Recent", "Plot")
// const selectionSix = new movieSelections("Drama", "International", "Recent", "Character")
//
// const selectionSeven = new movieSelections("Drama", "International", "Older", "Plot")
// const selectionEight = new movieSelections("Drama", "International", "Older", "Plot")
//
//
// const selectionNine = new movieSelections("Comedy", "English", "Recent", "Plot")
// const selectionTen = new movieSelections("Comedy", "English", "Recent", "Character")
//
// const selectionEleven = new movieSelections("Comedy", "English", "Older", "Plot")
// const selectionTwelve = new movieSelections("Comedy", "English", "Older", "Character")
//
// const selectionThirteen = new movieSelections("Comedy", "International", "Recent", "Plot")
// const selectionFourteen = new movieSelections("Comedy", "International", "Recent", "Character")
//
// const selectionFifteen = new movieSelections("Comedy", "International", "Older", "Plot")
// const selectionSixteen = new movieSelections("Comedy", "International", "Older", "Character")
