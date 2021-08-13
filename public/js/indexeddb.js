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

function readData(){
    
        var transaction = db.transaction(["user"]);
        var objectStore = transaction.objectStore("user");
        var request = objectStore.get(localStorage.getItem("userId"));
        
        request.onerror = function(event) {
           alert("Unable to retrieve user from internal database!");
        };
        
        request.onsuccess = function(event) {
           if(request.result) {
            console.log("Internal Storage:")
             console.log(request.result)
           } else {
            console.log("Could not retrieve information")
           }
        };
     
}

function clearInternalDatabase(){
     // open a read/write db transaction, ready for clearing the data
  var transaction = db.transaction(["UserInfo"], "readwrite");

  // report on the success of the transaction completing, when everything is done
  transaction.oncomplete = function(event) {
    console.log("Database cleared")
  };

  transaction.onerror = function(event) {
    console.log(transaction.error);

  // create an object store on the transaction
  var objectStore = transaction.objectStore("UserInfo");

  // Make a request to clear all the data out of the object store
  var objectStoreRequest = objectStore.clear();

  objectStoreRequest.onsuccess = function(event) {
  };
}