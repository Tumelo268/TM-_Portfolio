// Initialize Firebase (ADD YOUR OWN DATA)

var config = {
    apiKey: "AIzaSyBa_wLrFF29xNt33cu-c_OddDoaMYSxYGw",
    authDomain: "contact-form-74f92.firebaseapp.com",
    databaseURL: "https://contact-form-74f92.firebaseio.com",
    projectId: "contact-form-74f92",
    storageBucket: "contact-form-74f92.appspot.com",
    messagingSenderId: "591422648529",
    appId: "1:591422648529:web:27b905781177b5d75695f0",
    measurementId: "G-1F42FLXL5Z"
  };
  
  firebase.initializeApp(config);
  
  // Reference messages collection
  var messagesRef = firebase.database().ref('messages');
  
  // Listen for form submit
  document.getElementById('contactForm').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
    e.preventDefault();
  
    // Get values
    var Firstname = getInputVal('Firstname');
    var Lastname = getInputVal('Lastname');
    var contactnumber = getInputVal('contact number');
  
    // Save message
    saveMessage(name,contactnumber , Lastname);
  
    // Show alert
    document.querySelector('.alert').style.display = 'block';
  
    // Hide alert after 3 seconds
    setTimeout(function(){
      document.querySelector('.alert').style.display = 'none';
    },3000);
  
    // Clear form
    document.getElementById('contactForm').reset();
  }
  
  // Function to get get form values
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(firstname, Lastname, contactnumber){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        Firstname:Firstname
      Lastname: Lastname,
      contactnumber:contactnumber,
      message:message
    });
  }