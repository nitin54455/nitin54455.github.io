const loginForm = () => {
    const str = `
        <div>
            <h3>Login Form</h3>
            <p>
                <label>Email:</label><br/>
                <input type="email" id="email" placeholder="Enter your email" />
            </p>
            <p>
                <label>Password:</label><br/>
                <input type="password" id="password" placeholder="Enter your password" />
            </p>
            <p><button onclick='showHome()'>Submit</button></p>
            <p><button onclick='registerForm()'>Create Account</button></p>
        </div>
    `;
    root.innerHTML = str;
};


const registerForm = () => {
    const str = `
        <div>
            <h3>Registration Form</h3>
            <p>
                <label>Name:</label><br/>
                <input type="text" id="regName" placeholder="Enter your name" />
            </p>
            <p>
                <label>Email:</label><br/>
                <input type="email" id="regEmail" placeholder="Enter your email" />
            </p>
            <p>
                <label>Password:</label><br/>
                <input type="password" id="regPassword" placeholder="Enter your password" />
            </p>
            <p><button onclick='loginForm()'>Submit</button></p>
            <p><button onclick='loginForm()'>Already a member? Login here...</button></p>
        </div>
    `;
    root.innerHTML = str;
};


const showHome = () => {
     const str = `<div>
    <h3>Welcome</h3>
    <p><button onclick='loginForm()'>Logout</button></p>
    `
    root.innerHTML = str + "</div>"
}