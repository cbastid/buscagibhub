let btnEjecutar = document.querySelector(".ejecutar");
let nombre = document.querySelector(".name");
btnEjecutar.addEventListener("click", function () { BuscaGibhub(); })

function BuscaGibhub() {
    $.get("https://api.github.com/users/cbastid", function(data){     
        console.log(data);
        nombre.innerHTML = data['name'];
    });
}

