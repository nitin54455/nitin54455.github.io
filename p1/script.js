let users = [];
let user = {};

const validateUser = () => {
  let email = document.getElementById("txtEmail1").value;
  let pass = document.getElementById("txtPass1").value;
  const found = users.find(
    (value) => value.email === email && value.pass === pass
  );
  if (found) {
    showHome();
  } else {
    document.getElementById("errorTxt").innerHTML = "Access Denied";
  }
};

const loginForm = () => {
  const str = `<div>
    <h3>Login Form</h3>
    <p id='errorTxt' style='color: red;'></p>
    <p>
      <label for='txtEmail1'>Email:</label><br>
      <input type='text' id='txtEmail1'>
    </p>
    <p>
      <label for='txtPass1'>Password:</label><br>
      <input type='password' id='txtPass1'>
    </p>
    <p><button onclick='validateUser()'>Submit</button></p>
    <p><button onclick='registerForm()'>Create Account</button></p>
  </div>`;
  
  root.innerHTML = str;
};


const saveUser = () => {
  let name = document.getElementById("txtName").value;
  let email = document.getElementById("txtEmail").value;
  let pass = document.getElementById("txtPass").value;
  users.push({
    name,
    email,
    pass,
  });
  loginForm();
};

const registerForm = () => {
  const str = `<div>
    <h3>Registration Form</h3>
    <p>
      <label for='txtName'>Name:</label><br>
      <input type='text' id='txtName'>
    </p>
    <p>
      <label for='txtEmail'>Email:</label><br>
      <input type='text' id='txtEmail'>
    </p>
    <p>
      <label for='txtPass'>Password:</label><br>
      <input type='password' id='txtPass'>
    </p>
    <p><button onclick='saveUser()'>Submit</button></p>
    <p><button onclick='loginForm()'>Already a member? Login here...</button></p>
  </div>`;
  
  root.innerHTML = str;
};


const showHome = () => {
  const str = `<div>
    <h3>Welcome</h3>
    <p><button onclick='loginForm()'>Logout</button></p>
    `;
  root.innerHTML = str + "</div>";
};