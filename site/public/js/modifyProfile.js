window.addEventListener("load", () => {

    const name = document.querySelector("#name");
    const surname = document.querySelector("#surname");
    const phoneNumber = document.querySelector("#phoneNumber");
    const avatar = document.querySelector("#file");
    
    name.addEventListener("keyup", (e) => {
        if (name.value.length == 0) {
            name.style.border = "1px solid red"
            name.style.boxShadow = "0 2px 5px rgba(255, 0, 0, .3)"
        } else {
            name.style.border = "1px solid green"
            name.style.boxShadow = "0 2px 5px rgba(0, 255, 0, .3)"
        }
    })

    surname.addEventListener("keyup", (e) => {
        if (surname.value.length == 0) {
            surname.style.border = "1px solid red"
            surname.style.boxShadow = "0 2px 5px rgba(255, 0, 0, .3)"
        } else {
            surname.style.border = "1px solid green"
            surname.style.boxShadow = "0 2px 5px rgba(0, 255, 0, .3)"
        }
    })

    phoneNumber.addEventListener("keyup", (e) => {
        if (phoneNumber.value.length < 9 || phoneNumber.value.length > 15) {
            phoneNumber .style.border = "1px solid red"
            phoneNumber .style.boxShadow = "0 2px 5px rgba(255, 0, 0, .3)"
        } else {
            phoneNumber .style.border = "1px solid green"
            phoneNumber .style.boxShadow = "0 2px 5px rgba(0, 255, 0, .3)"
        }
    })
})