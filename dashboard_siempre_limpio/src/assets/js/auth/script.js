export default
    window.addEventListener("load", () => {
        const btnSignIn = document.getElementById("sign-in"),
            btnSignUp = document.getElementById("sign-up"),
            containerFormRegister = document.querySelector(".register"),
            containerFormLogin = document.querySelector(".login");

        btnSignIn.addEventListener("click", e => {
            containerFormLogin.classList.remove("hide")
            containerFormRegister.classList.add("hide");
        })


        btnSignUp.addEventListener("click", e => {
            containerFormRegister.classList.remove("hide")
            containerFormLogin.classList.add("hide");

        })
    })