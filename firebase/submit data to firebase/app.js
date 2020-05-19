// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "apiKey",
  authDomain: "authDomain",
  databaseURL: "databaseURL",
  projectId: "projectId",
  storageBucket: "storageBucket",
  messagingSenderId: "messagingSenderId",
  appId: "appId",
  measurementId: "measurementId",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

//Set Data to be send to firebase
var messageRef = firebase.database().ref("messages");

document.getElementById("contact-form").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getInputValue("name");
  var address = getInputValue("address");
  var email = getInputValue("email");
  var message = getInputValue("message");

  saveMessage(name, address, email, message);
}

function getInputValue(el) {
  return document.getElementById(el).value;
}

//Save message to firebase
function saveMessage(name, address, email, message) {
  var newMessageRef = messageRef.push();
  newMessageRef.set({
    name: name,
    address: address,
    email: email,
    message: message,
  });
}
