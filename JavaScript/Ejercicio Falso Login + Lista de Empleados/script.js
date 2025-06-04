const hardPassword = "admin";
const hardUser = "admin";

const logOut   = document.getElementById("log-out");
const loginBtn = document.getElementById("login-btn");
const errorMsg = document.getElementById("error-msg");

logOut.addEventListener("click", () => {
   localStorage.removeItem("sessionActive");
   alert("sesion cerrada.")

   location.reload();
});

loginBtn.addEventListener("click", () =>  {
    const username =document.getElementById("user").value;
    const password =document.getElementById("pw").value;

    if (username === hardUser && password === hardPassword){
        localStorage.setItem("sessionActive", "true");
        alert("Login correcto! Ahora hay sesion guardada.")
    }else{
        errorMsg.style.display = "block";
    }
});