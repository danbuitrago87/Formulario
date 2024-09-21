document.getElementById('loginForm').addEventListener('submit', function(event) {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    event.preventDefault(); // Evitar que se recargue la página
    // Redirigir a la página hola.html con los datos como parámetros en la URL
    window.location.href = `warning.html?username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`;
});


