window.addEventListener("load", () => {

    const form = document.querySelector("#form-register")
    const nameValue = document.querySelector("[name='name']")
    const errName = document.querySelector(".errName")
    const surnameValue = document.querySelector("[name='surname']")
    const errSurName = document.querySelector(".errSurName")
    const emailValue = document.querySelector("[name='email']")
    const errEmail = document.querySelector(".errEmail")
    const passwordValue = document.querySelector(".passwordInput")
    const errPassword = document.querySelector(".errPassword")
    const passwordRepeatValue = document.querySelector(".passwordRepeatInput")
    const errPasswordRepeat = document.querySelector(".errPasswordRepeat")
    const errForm = document.querySelector(".errForm")
    const labelInput = document.querySelectorAll(".label-input")
    const allInputs = document.querySelectorAll(".inputRegister")
    const checkIcon = document.querySelectorAll(".check-icon")
    const containerFormRegister = document.querySelector(".register")
    const containerFormLogin = document.querySelector(".login")
    const errorLogin = document.querySelector("#errorLogin")
    const successRegister = document.querySelector("#successRegister")
    const emailLoginValue = document.querySelector("[name='emailLogin']")
    const errEmailLogin = document.querySelector(".errEmailLogin")
    const passwordLoginValue = document.querySelector("[name='passwordLogin']")
    const errPasswordLogin = document.querySelector(".errPasswordLogin")



    let errors = [];

    if (errorLogin.textContent == "true" || successRegister.textContent == "true") {
        containerFormRegister.classList.add("hide");
        containerFormLogin.classList.remove("hide")
    }

    for (let i = 0; i < checkIcon.length; i++) {
        checkIcon[i].style.color = "transparent"
    }

    for (let i = 0; i < allInputs.length; i++) {
        allInputs[i].addEventListener("focus", function (e) {
            if (allInputs[i].value.length == 0) {
                labelInput[i].style.border = "1px solid red"
                labelInput[i].style.boxShadow = "0 2px 5px rgba(255, 0, 0, .3)"
            }
        })
    }


    nameValue.addEventListener("keyup", function (event) {

        const value = this.value.trim()

        switch (true) {

            case value.length === 0:
                errName.innerHTML = "Campo requerido."
                errors.push("El campo nombre es Requerido.")
                labelInput[0].style.border = "1px solid red"
                labelInput[0].style.boxShadow = "0 2px 5px rgba(255, 0, 0, .3)"
                checkIcon[0].style.color = "transparent"
                break;

            case value.length < 3:
                errName.innerHTML = "Debe tener un minimo de 3 caracteres."
                errors.push("El campo nombre debe tener un minimo de 3 caracteres.")
                labelInput[0].style.border = "1px solid red"
                labelInput[0].style.boxShadow = "0 2px 5px rgba(255, 0, 0, .3)"
                checkIcon[0].style.color = "transparent"
                break;

            default:
                labelInput[0].style.border = "1px solid green"
                labelInput[0].style.boxShadow = "0 2px 5px rgba(0, 255, 0, .3)"
                checkIcon[0].style.color = "green"
                errName.innerHTML = null
                errors = [];
                break
        }

    })


    surnameValue.addEventListener("keyup", function (event) {


        const value = this.value.trim()

        switch (true) {

            case value.length === 0:
                errSurName.innerHTML = "Campo requerido."
                errors.push("El campo apellido es Requerido.")
                labelInput[1].style.border = "1px solid red"
                labelInput[1].style.boxShadow = "0 2px 5px rgba(255, 0, 0, .3)"
                checkIcon[1].style.color = "transparent"
                break;

            case value.length < 3:
                errSurName.innerHTML = "Debe tener un minimo de 3 caracteres!"
                errors.push("El campo apellido debe tener un minimo de 3 caracteres.")
                labelInput[1].style.border = "1px solid red"
                labelInput[1].style.boxShadow = "0 2px 5px rgba(255, 0, 0, .3)"
                checkIcon[1].style.color = "transparent"
                break;


            default:
                labelInput[1].style.border = "1px solid green"
                labelInput[1].style.boxShadow = "0 2px 5px rgba(0, 255, 0, .3)"
                checkIcon[1].style.color = "green"
                errSurName.innerHTML = null
                errors = [];
                break
        }

    })


    emailValue.addEventListener("keyup", function (event) {

        const value = this.value.trim()
        const expregEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,8}$/


        switch (true) {

            case value.length === 0:
                errEmail.innerHTML = "Campo requerido."
                errors.push("El campo email es requerido.")
                labelInput[2].style.border = "1px solid red"
                labelInput[2].style.boxShadow = "0 2px 5px rgba(255, 0, 0, .3)"
                checkIcon[2].style.color = "transparent"
                break;

            case !expregEmail.test(value):
                errEmail.innerHTML = "Formato invalido"
                errors.push("El campo email tiene un formato invalido")
                labelInput[2].style.border = "1px solid red"
                labelInput[2].style.boxShadow = "0 2px 5px rgba(255, 0, 0, .3)"
                checkIcon[2].style.color = "transparent"
                break;

            default:
                labelInput[2].style.border = "1px solid green"
                labelInput[2].style.boxShadow = "0 2px 5px rgba(0, 255, 0, .3)"
                checkIcon[2].style.color = "green"
                errEmail.innerHTML = null
                errors = [];
                break
        }

    })


    passwordValue.addEventListener("keyup", function (e) {

        const value = this.value

        const lower = new RegExp('(?=.*[a-z])');
        const upper = new RegExp('(?=.*[A-Z])');
        const number = new RegExp('(?=.*[0-9])');
        const special = new RegExp('(?=.*[!@#\$%\^&\*])');
        const length = new RegExp('(?=.{8,30})');


        switch (true) {
            case !lower.test(value):
                errPassword.innerHTML = "La contraseña debe tener una minuscula"
                errors.push("La contraseña debe tener una minuscula")
                labelInput[3].style.border = "1px solid red"
                labelInput[3].style.boxShadow = "0 2px 5px rgba(255, 0, 0, .3)"
                checkIcon[3].style.color = "transparent"
                break;
            case !upper.test(value):
                errPassword.innerHTML = "La contraseña debe tenerz una Mayuscula"
                errors.push("La contraseña debe tener una Mayuscula")
                labelInput[3].style.border = "1px solid red"
                labelInput[3].style.boxShadow = "0 2px 5px rgba(255, 0, 0, .3)"
                checkIcon[3].style.color = "transparent"
                break;
            case !number.test(value):
                errPassword.innerHTML = "La contraseña debe tener un numero"
                errors.push("La contraseña debe tener un numero")
                labelInput[3].style.border = "1px solid red"
                labelInput[3].style.boxShadow = "0 2px 5px rgba(255, 0, 0, .3)"
                checkIcon[3].style.color = "transparent"
                break;
            case !special.test(value):
                errPassword.innerHTML = "La contraseña debe tener un caracter especial"
                errors.push("La contraseña debe tener un caracter especial")
                labelInput[3].style.border = "1px solid red"
                labelInput[3].style.boxShadow = "0 2px 5px rgba(255, 0, 0, .3)"
                break;
            case !length.test(value):
                errPassword.innerHTML = "Longitud invalida"
                errors.push("Longitud de contraseña invalida")
                labelInput[3].style.border = "1px solid red"
                labelInput[3].style.boxShadow = "0 2px 5px rgba(255, 0, 0, .3)"
                checkIcon[3].style.color = "transparent"
                break;
            default:
                labelInput[3].style.border = "1px solid green"
                labelInput[3].style.boxShadow = "0 2px 5px rgba(0, 255, 0, .3)"
                checkIcon[3].style.color = "green"
                errPassword.innerHTML = null
                errors = [];
                break;
        }
    })

    passwordRepeatValue.addEventListener("keyup", function (e) {
        const value = this.value

        switch (true) {
            case value !== passwordValue.value:
                errPasswordRepeat.innerHTML = "Las contraseñas no coinciden"
                labelInput[4].style.border = "1px solid red"
                labelInput[4].style.boxShadow = "0 2px 5px rgba(255, 0, 0, .3)"
                checkIcon[4].style.color = "transparent"
                break;

            default:
                labelInput[4].style.border = "1px solid green"
                labelInput[4].style.boxShadow = "0 2px 5px rgba(0, 255, 0, .3)"
                checkIcon[4].style.color = "green"
                errPasswordRepeat.innerHTML = null
                errors = [];
                break;
        }
    })


    form.addEventListener("submit", function (event) {
        if (errors.length > 0 ||
            nameValue.value.length < 3 ||
            surnameValue.value.length < 3 ||
            emailValue.value.length < 3) {
            event.preventDefault()
            errForm.innerHTML = "Todos los campos son requeridos!"
            errors = []
        }
    })

    emailLoginValue.addEventListener("keyup", function (event) {

        const value = this.value.trim()
        const expregEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,8}$/

        switch (true) {

            case value.length === 0:
                errEmailLogin.innerHTML = "Campo requerido."
                errors.push("El campo nombre es Requerido.")
                labelInput[5].style.border = "1px solid red"
                labelInput[5].style.boxShadow = "0 2px 5px rgba(255, 0, 0, .3)"
                checkIcon[5].style.color = "transparent"
                break;
            case !expregEmail.test(value):
                errEmailLogin.innerHTML = "Formato invalido"
                errors.push("El campo email tiene un formato invalido")
                labelInput[5].style.border = "1px solid red"
                labelInput[5].style.boxShadow = "0 2px 5px rgba(255, 0, 0, .3)"
                checkIcon[5].style.color = "transparent"
                break;

            default:
                labelInput[5].style.border = "1px solid green"
                labelInput[5].style.boxShadow = "0 2px 5px rgba(0, 255, 0, .3)"
                checkIcon[5].style.color = "green"
                errEmailLogin.innerHTML = null
                errors = [];
                break
        }

    })

    passwordLoginValue.addEventListener("keyup", function (e) {
        const value = this.value
        const length = new RegExp('(?=.{8,30})');


        switch (true) {

        case !length.test(value):
            errPasswordLogin.innerHTML = "Longitud invalidou"
            errors.push("Longitud de contraseña invalida")
            labelInput[6].style.border = "1px solid red"
            labelInput[6].style.boxShadow = "0 2px 5px rgba(255, 0, 0, .3)"
            checkIcon[6].style.color = "transparent"
            break;
        default:
            labelInput[6].style.border = "1px solid green"
            labelInput[6].style.boxShadow = "0 2px 5px rgba(0, 255, 0, .3)"
            checkIcon[6].style.color = "green"
            errPasswordLogin.innerHTML = null
            errors = [];
            break;
    }})


});
