function showSection(id) {
    document.querySelectorAll('.section').forEach(sec => {
        sec.classList.remove('active');
    });

    const target = document.getElementById(id);
    if (target) {
        target.classList.add('active');
        window.scrollTo(0, 0);
    }
}

function toggleMenu() {
    const nav = document.getElementById("mobileNav");
    nav.style.display = nav.style.display === "flex" ? "none" : "flex";
}

