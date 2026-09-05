
document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".fade-left, .fade-up");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            } else {
                entry.target.classList.remove("show");
            }
        });
    }, {
        threshold: 0.2
    });
    elements.forEach(el => observer.observe(el));
    function animateFade (targetDate) {
        const animator = new Date();
        const target = new Date(targetDate);
        animator.setHours(0, 0, 0, 0);
        target.setHours(0, 0, 0, 0);
        if (animator >= target) {
            const body = document.getElementsByTagName("body");
            document.body.style.display = "none";
        }
    }
    animateFade("2026-09-10");
});
