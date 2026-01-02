let contactForm = document.getElementById("contactForm");
let uname = document.getElementById("uname");
let nameError = document.getElementById("nameError");
let email = document.getElementById("email");
let emailError = document.getElementById("emailError");
let message = document.getElementById("message");
let messageError = document.getElementById("messageError");

uname.addEventListener("blur", () => {
    if (uname.value === "") {
        nameError.textContent = "Name Is Required"

    } else {
        nameError.textContent = ""
    }

})
email.addEventListener("blur", () => {
    if (email.value === "") {
        emailError.textContent = "Email Is Required"

    } else {
        emailError.textContent = ""
    }

})

message.addEventListener("blur", () => {
    if (message.value === "") {
        messageError.textContent = "Message Is Required"

    } else {
        messageError.textContent = ""
    }

})

uname.addEventListener("input", () => {
    if (uname.value === "") {
        nameError.textContent = "Name Is Required"

    } else {
        nameError.textContent = ""
    }

})
email.addEventListener("input", () => {
    if (email.value === "") {
        emailError.textContent = "Email Is Required"

    } else {
        emailError.textContent = ""
    }

})

message.addEventListener("input", () => {
    if (message.value === "") {
        messageError.textContent = "Message Is Required"

    } else {
        messageError.textContent = ""
    }

})

contactForm.addEventListener("submit", (e) => {
    e.preventDefault()
    let check = true;

    if (uname.value === "") {
        nameError.textContent = "Name Is Required"
        check = false

    } else {
        nameError.textContent = ""
    }

    if (email.value === "") {
        emailError.textContent = "Email Is Required"
        check = false

    } else {
        emailError.textContent = ""
    }

    if (message.value === "") {
        messageError.textContent = "Message Is Required"
        check = false

    } else {
        messageError.textContent = ""
    }

    if (check) {
        alert("Your Submit is Successful")
        contactForm.reset()
    }
})

