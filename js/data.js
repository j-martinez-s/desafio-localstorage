document.addEventListener("DOMContentLoaded", function () {
    const dataElement = document.getElementById("data");
    const storedData = localStorage.getItem("texto");
    if (storedData) {
        dataElement.textContent += storedData;
    }
});