const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");

const USERNAME_KEY = "username"
const HIDDEN_CALSSNAME = "hidden";

function onLoginSubmit(event) {
    // prevent event 
    event.preventDefault();

    const username = loginInput.value;
    console.log(username);
    localStorage.setItem("USERNAME_KEY", username);

    loginForm.classList.add(HIDDEN_CALSSNAME);

    paintGreeting(username);
}

function paintGreeting(username){
    // use [`]
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CALSSNAME);

}

const savedUsername = localStorage.getItem("USERNAME_KEY");

if(savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CALSSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreeting(savedUsername);
}