const botao = document.querySelector("button");

botao.addEventListener("click", function () {

    const email = document.querySelector('input[type="email"]').value;
    const senha = document.querySelector('input[type="password"]').value;

    if(email === "joao@email.com" && senha === "123456"){
        window.location.href = "home.html";
    }else{
        alert("E-mail ou senha incorretos.");
    }

});
