$(document).ready(function(){


    //Shows Login form
    $("#login_bnt").on("click",function(){

        $("#shadowBG").fadeIn();
        $("#login_box").fadeIn();
        $("#login_form").fadeIn();

    });

    //Shows Register form
    $("#register_btn").on("click",function(){

        $("#shadowBG").fadeIn(300);
        $("#login_box").fadeIn(400);
        $("#register_form").fadeIn(600);

    });
   
    //Hide Everything
    $("#shadowBG").on("click",function(){

        $("#shadowBG,#login_box,#login_form,#register_form").fadeOut();
        
    });

    const auth = firebase.auth();

    const googleProvider = new firebase.auth.GoogleAuthProvider();


    //Shows Register form
    $("#loginGoogle").on("click",function(){

        auth.signInWithPopup(googleProvider);

    });

});