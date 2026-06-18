const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

window.addEventListener("scroll", reveal);

function reveal() {
    const reveals = document.querySelectorAll(".reveal");

    reveals.forEach((element) => {
        const windowHeight = window.innerHeight;
        const revealTop = element.getBoundingClientRect().top;

        if (revealTop < windowHeight - 100) {
            element.classList.add("active");
        }
    });
}

reveal();

document.querySelector(".contact-form")
.addEventListener("submit", function(e){
    e.preventDefault();

    alert("Message Sent Successfully!");
});