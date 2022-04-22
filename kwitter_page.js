//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyDGi4HFDdjDC-GJPNKOWOQLqBZ41Y7UvCM",
      authDomain: "kwitter-7751c.firebaseapp.com",
      databaseURL: "https://kwitter-7751c-default-rtdb.firebaseio.com",
      projectId: "kwitter-7751c",
      storageBucket: "kwitter-7751c.appspot.com",
      messagingSenderId: "655410734197",
      appId: "1:655410734197:web:9492634552a466181d843c"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");

function send()
{
      msg= document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            mesaage:msg,
            like:0
      });
      document.getElementById("msg").value="";

      
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code


//End code
      } });  }); }
getData();

function logout(){
      localstorage.removeItem("user_name");
      localstorage.removeItem("room_name");
                window.location="kwitter.html"
}