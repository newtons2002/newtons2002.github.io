const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting")
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    paintGreeting(username)
    localStorage.setItem(USERNAME_KEY, username);
};
function paintGreeting(username){
    greeting.innerText = `Hello! ${username}`
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUserName = localStorage.getItem(USERNAME_KEY);

if(savedUserName == null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
}else{
    paintGreeting(savedUserName);
}

loginForm.addEventListener("submit", onLoginSubmit);