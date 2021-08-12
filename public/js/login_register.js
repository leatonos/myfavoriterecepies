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

    //Login with google
    $("#loginGoogle").on("click",function(){
        auth.signInWithPopup(googleProvider);
    });

    //Creating account with email and password
    $("#create_account").on("click", function(){

      let email = $("#newUser_email").val();
      let password = $("#newUser_password").val();

      auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
          // Signed in 
          let user = userCredential.user;
          console.log(user);
          checkUserStatus(user);
          
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
       });

    });

    $("#loginEmail").on("click", function(){

      let email = $("#login_email").val();
      let password = $("#login_password").val();

      auth.signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        let user = userCredential.user;
        checkUserStatus(user);
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
      });
     
    });

    function checkUserStatus(user){
      auth.onAuthStateChanged((user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User

          var uid = user.uid;

          $("#small_userName").text()
          $("#small_profile_pic")


          // ...
        } else {
          // User is signed out
          // ...
        }
      });
    }

});