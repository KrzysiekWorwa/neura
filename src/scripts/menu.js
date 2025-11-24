document.addEventListener("DOMContentLoaded", () => {
    const burger = document.getElementById("burger");
    const mobileMenu = document.getElementById("mobile-menu");

    if (!burger || !mobileMenu) return;

    burger.addEventListener("click", () => {
        const isOpen = burger.getAttribute("aria-expanded") === "true";
        burger.setAttribute("aria-expanded", String(!isOpen));

        burger.classList.toggle("open");

        mobileMenu.classList.toggle("hidden");
    });
});
