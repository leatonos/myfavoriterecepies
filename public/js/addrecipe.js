$(document).ready(function(){


    //Add ingridient
    let ingridient_container = '<div class="ingridient_container"><button type="button" id="removeIngridient">-</button><input type="text" class="ingridient"><br></div>'

    $("#addIngridient").click(function(){
        $(".ingridient_container:last").after(ingridient_container);
    });

    //Remove ingridient
    $(document).on("click","#removeIngridient",function(){
        $(this).parent().remove();
    });

    //Create array of ingridients
    $("#create_recipe_btn").click(function(){
        var ingridients = [];
        var time;

        let recipeName = $("#rname").val();
        let recipeDiff = $("#difficulty").val();
        let hours = $("#hours").val();
        let minutes = $("#minutes").val();
        let howTo = $("#how").val();

        let authorName = getInternalUsername();
        let authorId = getInternalUserId();
        
        
        $(".ingridient").each(function(i){
            let newIngridient = $(this).val();
            ingridients.push(newIngridient)
        });
        if(hours == "" || hours == 0){
            time = minutes+"m"
        }else if(minutes == "" || minutes == 0){
            time = hours+"h"
        }else{
            time = hours+"h "+minutes+"m"
        }

        console.log(recipeName);
        console.log(recipeDiff);
        console.log(ingridients);
        console.log(time);
        console.log(howTo);
        console.log(authorName);
        console.log(authorId);

        addNewRecipe(recipeName,recipeDiff,ingridients,"",time,howTo,authorName,authorId);
    });

    function addNewRecipe(name,dif,ingridientsArray,photoLink,timeItTakes,howToMakeit,creatorName,creatorId){

        db.collection("Recepies").add({
          recipeName: name,
          difficulty:dif,
          ingridients:ingridientsArray,
          recipePhoto:photoLink,
          time:timeItTakes,
          howToDo:howToMakeit,
          author :creatorName,
          authorId: creatorId
      })
      .then((docRef) => {
          console.log("Document written with ID: ", docRef.id);
          console.error("Error adding document: ", error);
      });
    }

});