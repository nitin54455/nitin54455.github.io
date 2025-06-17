let users = [];

const loginForm = () => {
  const html = `
    <div>
      <h3>Login Form</h3>
      <p id="errorTxt" style="color:red;"></p>
      <p>Email:<br><input type="text" id="txtEmail1"></p>
      <p>Password:<br><input type="password" id="txtPass1"></p>
      <p><button onclick="validateUser()">Submit</button></p>
      <p><button onclick="registerForm()">Create Account</button></p>
    </div>
  `;
  updateRoot(html);
};

const registerForm = () => {
  const html = `
    <div>
      <h3>Registration Form</h3>
      <p>Name:<br><input type="text" id="txtName"></p>
      <p>Email:<br><input type="text" id="txtEmail"></p>
      <p>Password:<br><input type="password" id="txtPass"></p>
      <p><button onclick="saveUser()">Submit</button></p>
      <p><button onclick="loginForm()">Already a member? Login here</button></p>
    </div>
  `;
  updateRoot(html);
};

const showHome = () => {
  const html = `
    <div>
      <h3>Welcome</h3>
      <p><button onclick="loginForm()">Logout</button></p>
    </div>
  `;
  updateRoot(html);
};

const validateUser = () => {
  const email = document.getElementById("txtEmail1").value;
  const pass = document.getElementById("txtPass1").value;
  const found = users.find(u => u.email === email && u.pass === pass);
  if (found) {
    showHome();
  } else {
    document.getElementById("errorTxt").innerText = "Access Denied";
  }
};

const saveUser = () => {
  const name = document.getElementById("txtName").value;
  const email = document.getElementById("txtEmail").value;
  const pass = document.getElementById("txtPass").value;
  if (!name || !email || !pass) return alert("All fields required.");
  users.push({ name, email, pass });
  loginForm();
};

const updateRoot = (formHtml) => {
  let list = "<ul>";
  users.forEach(u => {
    list += `<li>Email: ${u.email}<br>Pass: ${u.pass}</li>`;
  });
  list += "</ul>";

  document.getElementById("root").innerHTML = `
    <div style="display: flex; gap: 20px;">
      <div style="flex: 2;">${formHtml}</div>
      <div style="flex: 1; background: #eee; padding: 10px;">
        <h4>Registered Users</h4>
        ${users.length ? list : "<p>No users</p>"}
      </div>
    </div>
  `;
};
