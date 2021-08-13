var internalDB;
var request = window.indexedDB.open("UserInfo", 1);

request.onerror = function(event) {
    console.log("error: ");
 };
 
 request.onsuccess = function(event) {
    internalDB = request.result;
    console.log("success: "+ internalDB);
 };
 
 request.onupgradeneeded = function(event) {
    var internalDB = event.target.result;
    var objectStore = internalDB.createObjectStore("user", {keyPath: "id"});
    
    for (var i in userData) {
       objectStore.add(userData[i]);
    }
 }


function saveData(userId,userName,userEmail){

    let user = {id: userId, name: userName, email: userEmail}

    var request = internalDB.transaction(["user"], "readwrite")
   .objectStore("user")
   .add({ id: user.id, name: user.name, email: user.email });
   
   request.onsuccess = function(event) {
      console.log("User created");
      console.log(user);
   };
   
   request.onerror = function(event) {
      alert("Unable to add data\r\n User already exists in your database! ");
   }


}

function clearInternalDatabase(){
    indexedDB.deleteDatabase("UserInfo")
}