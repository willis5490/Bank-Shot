var config = {
    apiKey: "AIzaSyCqfdA_8p8gRVgn0PKMuqGiObrw6sbwrAE",
    authDomain: "upcoming-shows-a5710.firebaseapp.com",
    databaseURL: "https://upcoming-shows-a5710.firebaseio.com",
    projectId: "upcoming-shows-a5710",
    storageBucket: "upcoming-shows-a5710.appspot.com",
    messagingSenderId: "978194046550"
  };
  firebase.initializeApp(config);

  var database = firebase.database();
  

  var newEmp = {
    name: empName,
    role: empRole,
  };

  
  database.ref().push(newEmp);

  database.ref().on("child_added", function(childSnapshot) {
    console.log(childSnapshot.val());
  
    // Store everything into a variable.
    var empName = childSnapshot.val().name;
    var empRole = childSnapshot.val().role;
  })




$("#mybutton").on("click",function(){
    location.href = "./media.html"
})
$("#carouselExampleIndicators").on("click", function(){
    $("controls").pause();
})