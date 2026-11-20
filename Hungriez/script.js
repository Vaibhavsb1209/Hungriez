function login(){
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let error=document.getElementById("error-message");

    if(email === "admin@123" && password === "123"){
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("email", email);
        window.location.href = "index.html";
    } else {
        error.textContent = "Invalid email or password";
    }
}