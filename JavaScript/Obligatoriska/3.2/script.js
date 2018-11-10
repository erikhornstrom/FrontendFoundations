$(document).ready(function(){

var count = 0;
   $("button").click(function(){
      count++;
      //Ändra en egenskap för ett HTML-elementet
      if(count === 1) {
         $("button").css("background-color", "red");
      }

      //Lägga till nytt innehåll till ett HTML-elementet
      if(count === 2) {
         $("button").text("CLICK ME TO MAKE STUFF HAPPEN WITH JQUERY!");
      }

      if(count === 3) {
         var txt2 = $("<p></p>").text("P-element created with jQuery");
         $("body").append(txt2);
      }

      //Ta bort ett HTML-element
      if(count === 4) {
         $("#elementToBeRemoved").remove();
      }

      //Utvinna information från ett HTML-element
      if(count === 5) {
         var tx3 = $("button").text();
         window.alert("This information was retreived from the Button-element: " + tx3);
      }

      //Lägga till och ta bort ett klass-attribut från ett HTML-element
      if (count === 6) {
         $("button").addClass("boldText");
         $("button").removeClass("normal");
      }

      if (count > 6) {
         count = 0;
      }
   })
});
