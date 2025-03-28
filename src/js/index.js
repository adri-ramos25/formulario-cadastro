const input = document.getElementsByTagName("input");
const btnConfirm = document.getElementById("btn-confirm");


// Textos que ficam abaixo dos inputs
const textBelow = document.getElementsByClassName("text-below");
const textWrongPassword = document.getElementById("text-password-wrong");


// Quando um input é preenchido esse array recebe um valor de 0 a 2
let numInputFilled = [];


btnConfirm.addEventListener("click", () => {
    inputName();
    inputEmail();
    inputPassword();

    if (numInputFilled.length === 3) {
        alert("Cadastro realizado com sucesso!");

        location.reload();
    } else {
        alert("Preencha os campos obrigatórios.");
    }
})


function inputName() {
    let textName = document.getElementById("name").value;
       
    if (textName == "") {
        textBelow[0].style.display = "block";

        input[0].style.marginBottom = "0";
        input[0].style.borderColor = "#ff0000";
    } else {
        numInputFilled.push(0);

        textBelow[0].style.display = "none";

        input[0].style.marginBottom = "30px";
        input[0].style.borderColor = "#000";
    }
}


function inputEmail() {
    let email = document.getElementById("email").value;

    if (email == "") {
        textBelow[1].style.display = "block";

        input[1].style.marginBottom = "0";
        input[1].style.borderColor = "#ff0000";
    } else {
        numInputFilled.push(1);

        textBelow[1].style.display = "none";

        input[1].style.marginBottom = "30px";
        input[1].style.borderColor = "#000";
    }
}


function inputPassword() {
    let password = document.getElementById("password").value;

    if (password == "") {
        textBelow[2].style.display = "block";
        input[2].style.marginBottom = "0";
        input[2].style.borderColor = "#ff0000";
    } else {
        numInputFilled.push(2);

        textBelow[2].style.display = "none";
        input[2].style.marginBottom = "30px";
        input[2].style.borderColor = "#000";
    }
}