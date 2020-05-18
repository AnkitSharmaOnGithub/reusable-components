// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBkTuj5s_UFNy31UZIzQaxN00SwES-9f8A",
  authDomain: "fir-test-bf344.firebaseapp.com",
  databaseURL: "https://fir-test-bf344.firebaseio.com",
  projectId: "fir-test-bf344",
  storageBucket: "fir-test-bf344.appspot.com",
  messagingSenderId: "796502243563",
  appId: "1:796502243563:web:f02110e6d62703690526ae",
  measurementId: "G-P5GQW6YQG2",
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
