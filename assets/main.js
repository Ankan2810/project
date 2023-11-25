function signUp(e) {
  event.preventDefault();
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var rePass = document.getElementById("confirm-password").value;

  // Check if the passwords match.
  if (password !== rePass) {
    alert("Passwords do not match");
    return;
  }else{
    alert("Sign up successful");
    window.location.href = "/project/signInPage/index.html";

  }

  // Create a new user object.
  var user = {
    username: username,
    password: password,
  };

  // Save the user object to local storage.
  localStorage.setItem(username, JSON.stringify(user));

  // Redirect the user to the sign-in page.
}

function signIn(e) {
  event.preventDefault();
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // Check if the user exists in local storage.
  var user = localStorage.getItem(username);
  if (user === null) {
    alert("Username does not exist");
    return;
  }

  // Parse the user object from JSON.
  var data = JSON.parse(user);

  // Check if the username and password match.
  if (username === data.username && password === data.password) {
    alert("Login successful");
  } else {
    alert("Username or password is incorrect");
  }
}
