document.addEventListener("DOMContentLoaded", function () {
    const userForm = document.getElementById("userForm");
    const usernameInput = document.getElementById("username");
    const navIcons = document.getElementById("navIcons");

    // Comprova si l'usuari està loguejat
    if (sessionStorage.getItem("loggedIn") === "true") {
        navIcons.style.display = "flex";
    }

    navIcons.style.display = "flex";

    // Carrega el nom d'usuari des de la memòria
    const savedUsername = localStorage.getItem("username");
    if (savedUsername) {
        usernameInput.value = savedUsername;
    }

    userForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Evita l'enviament del formulari per defecte

        // Guarda el nom d'usuari a la memòria
        const username = usernameInput.value;
        localStorage.setItem("username", username);

        alert("Canvis guardats!");
    });

    // Navegació de les icones
    const homeIcon = document.getElementById("homeIcon");
    const paymentIcon = document.getElementById("paymentIcon");
    const userIcon = document.getElementById("userIcon");
    const menuToggle = document.getElementById("menuToggle");
    const sidebar = document.getElementById("sidebar");
    const logo = document.getElementById("logo");
    
    
    
    // Comprova si l'usuari està loguejat
    if (sessionStorage.getItem("loggedIn") === "true") {
        document.getElementById("navIcons").style.display = "flex";
    }
    document.getElementById("navIcons").style.display = "flex";

    menuToggle.addEventListener("click", function (event) {
        sidebar.classList.toggle("open");
        event.stopPropagation(); // Evita que l'event es propagui al document
    });

    logo.addEventListener("click", function () {
        window.location.href = "index.html";
    });


    homeIcon.addEventListener("click", function () {
        window.location.href = "index.html";
    });

    paymentIcon.addEventListener("click", function () {
        window.location.href = "cards.html";
    });

    userIcon.addEventListener("click", function () {
        window.location.href = "user.html";
    });

    document.addEventListener("click", function (event) {
        if (sidebar.classList.contains("open") && !sidebar.contains(event.target) && !menuToggle.contains(event.target)) {
            sidebar.classList.remove("open");
        }
    });
});
