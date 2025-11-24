document.addEventListener("DOMContentLoaded", () => {
    const burger = document.querySelector(".burger-menu");
    const mobileMenu = document.getElementById("mobile-menu");

    if (!burger || !mobileMenu) return;

    burger.addEventListener("click", () => {
        const isOpen = burger.getAttribute("aria-expanded") === "true";

        burger.setAttribute("aria-expanded", String(!isOpen));

        mobileMenu.classList.toggle("hidden");
    });
});
