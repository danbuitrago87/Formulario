// script.js
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Evitar el envío del formulario

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    if (username === "" || password === "") {
        errorMessage.textContent = "Por favor, completa todos los campos.";
        errorMessage.style.display = "block";
    } else {
        errorMessage.style.display = "none";
        alert(`Usuario: ${username}\nContraseña: ${password}`);
        // Aquí puedes añadir el envío de datos a un servidor o cualquier otra lógica.
    }
});
