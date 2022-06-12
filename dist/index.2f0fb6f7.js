function salida(event) {
    event.preventDefault();
    let opcion = confirm("¿Estás segurx de que quieres salir de la página?");
    if (opcion) window.location = "https://ca.wikipedia.org/wiki/Hidden_Figures";
}
function load() {
    let el = document.getElementById("salida");
    el.addEventListener("click", salida, false);
}
window.onload = load;

//# sourceMappingURL=index.2f0fb6f7.js.map
