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

// Enhanced contact form handling
document.querySelector(".contact-form")
.addEventListener("submit", function(e){
    const submitBtn = this.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    
    // Show loading state
    submitBtn.textContent = "Sending...";
    submitBtn.disabled = true;
    
    // FormSubmit will handle the actual submission
    // Reset button after a delay (form will redirect)
    setTimeout(() => {
        submitBtn.textContent = "Message Sent! ✓";
        submitBtn.style.background = "linear-gradient(135deg, #10b981 0%, #059669 100%)";
    }, 500);
});



