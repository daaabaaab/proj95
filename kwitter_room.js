var firebaseConfig = {
    apiKey: "AIzaSyCMnvF1d-yqNDrwHch1KEdzSS-51HOZqKg",
    authDomain: "proj94-9934d.firebaseapp.com",
    databaseURL: "https://proj94-9934d-default-rtdb.firebaseio.com",
    projectId: "proj94-9934d",
    storageBucket: "proj94-9934d.appspot.com",
    messagingSenderId: "390847937536",
    appId: "1:390847937536:web:ac7b75bcaf7868e14bace5"
  };
  
  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
 function addRoom()
 {
 var o=document.getElementById("k").value;
firebase.database().ref("/").child(o).update({
purpose:"test"    
}); 
 }
 
var user= localStorage.getItem("inp");
 document.getElementById("user_name").innerHTML="Hello" + user + "!";

 function addRoom()
 {
room_name=document.getElementById("room_name").value;
firebase.database().ref("/").child("room_name").update({
 purpose:"room name"     
});
window.location("kwitter_page.html")
 }

 function getData()
 {
  function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
row="<div class='room_name' id="+room_name_+"onclick='RedirectToRoomName (this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;
//End code
});});}
getData();
 }

 function RedirectToRoomName()
 {
  localStorage.getItem("room_name",room_name);
 }