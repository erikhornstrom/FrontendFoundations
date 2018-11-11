$(document).ready(function(){
    var button = $("button");
    var count = 0;
    var elementToBeRemoved = $("<p></p>").text("This P-element will be removed when you click the button!");
    var focusInput = $("<input></input>");

   $("button").click(function(){
      count++;
      console.log(count);
      //Ändra en egenskap för ett HTML-elementet
      if(count === 1) {
         button.css("background-color", "red");
         button.text("2. Lägg till nytt innehåll till ett HTML-element");
      }

      //Lägga till nytt innehåll till ett HTML-elementet
      if(count === 2) {
        button.addClass('normal');
        button.css("background-color", "white");
        button.prop('disabled', true);
        button.text('Lägg till nytt innehåll till ett HTML-element:"Nytt innehåll"');
        setTimeout(function(){
            button.prop('disabled', false);
            button.text("3. Ta bort ett HTML-element");
             $(button).after(elementToBeRemoved);
        },3000);
      }

      //Ta bort ett HTML-element
      if(count === 3) {
         $(elementToBeRemoved).remove();
         button.text("4. Utvinn information från ett HTML-element");
      }

      //Utvinna information från ett HTML-element
      if(count === 4) {
        var tx3 = button.text();
        window.alert("This information was retreived from the Button-element: " + tx3);
        button.text("5. Lägga till och ta bort ett klass-attribut från ett HTML-element");
      }

      //Lägga till och ta bort ett klass-attribut från ett HTML-element
      if (count === 5) {
        button.removeClass("normal");
        button.addClass("boldText");
        setTimeout(function() {
            window.alert('Klassen "normal" togs bort och "boldText" lades till:')
        }, 200);
        button.text("Klicka för att gå till nästa steg");
      }

      //exempel av fönsterhändelsen resize
      if(count === 6) {
        button.removeClass("boldText");
        button.addClass("normal");
        button.text('Ändra storleken på fönstret för att bevittna magi. Klicka på knappen för att gå till nästa steg.')

        //ändrar färgen på knappen beroende på om antalet gångeer funktionen resize() har kallats på är jämnt eller udda.
        let windowResizeCount = 0;
        $(window).resize(function() {
            windowResizeCount++;
            if((windowResizeCount % 2) == 0) {
                button.css('background-color', 'green');
            } else {
                button.css('background-color', 'white');
            }
        })
      }

      //exempel av formulärhändelsen focus
      if (count === 7) {
        button.css('background-color', 'white');
        button.after(focusInput);
        focusInput.css('width', '200px');
        focusInput.prop('value', 'focus()-exempel');

        //ändrar styling på formuläret när man trycker i inputfältet
        focusInput.focus(function() {
            focusInput.css('border','5px solid red');
            focusInput.css('background-color', 'black');
            focusInput.css('color', 'white');
        })
        button.text("Tryck i formuläret nedan för att se förändringar som sker genom metoden focus(). Tryck på knappen för att gå vidare.");
      }
      
      //ändrar färgen på knappen till gul när man trycker på uppåttangenten
      if(count === 8) {
        focusInput.remove();
        button.text("Tryck på uppåtpiltangent för att bevittna ytterligare magi. Tryck på knappen för att gå vidare.");
        button.keyup(function () {
            button.css('background-color', 'yellow');
        });
      }


      //gå tillbaka till start
      if (count > 10) {
         count = 0;
         button.removeClass("boldText");
         button.addClass("normal");
         button.text("1. Ändra en egenskap för ett HTML element");
      }
   })
});
