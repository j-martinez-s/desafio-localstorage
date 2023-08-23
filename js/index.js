const boton = document.getElementById("buttonText");
boton.addEventListener("click", function() {
    const texto = document.getElementById("inputText").value;
    setLocalData(texto);
});
function setLocalData(texto) {
    localStorage.setItem("texto", texto);
}