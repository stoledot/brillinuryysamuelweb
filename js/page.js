
const buscador = document.getElementById("searchInput");
const tarjetas = document.querySelectorAll(".service-card");

buscador.addEventListener("keyup", function () {

    const texto = buscador.value.toLowerCase();

tarjetas.forEach(function (tarjeta) {

        const contenido = tarjeta.textContent.toLowerCase();

if (contenido.includes(texto)) {
    tarjeta.style.display = "block";
        } else {
    tarjeta.style.display = "none";
        }

    });

});

