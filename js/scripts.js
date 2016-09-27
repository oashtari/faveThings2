$(document).ready(function() {
  console.log("cats are freaking rad")
  $("form#questions").submit(function(event) {
    var color = $("input#color").val();
    var animal = $("input#animal").val();
    var food = $("input#food").val();
    var drink = $("input#drink").val();


    var favorites = [color, animal, food, drink];
    var newFavorites = [favorites[1], favorites[0]];
    // newFavorites += [favorites[0]];
    // newFavorites += favorites[2];
    //
    newFavorites.push(favorites[2]);
    // newFavorites = newFavorites.push(favorites.slice(0));
    console.log(newFavorites);
    console.log(favorites);

    $("#list").append("<li>" + newFavorites[0] + "</li>");
    $("#list").append("<li>" + newFavorites[1] + "</li>");
    $("#list").append("<li>" + newFavorites[2] + "</li>");

    $("#response").text(favorites);
    $("#response").show();

    event.preventDefault();

  });
});
