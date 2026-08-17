document.addEventListener("DOMContentLoaded", () => {
    const statsSection = document.querySelector(".stats");
    const counters = document.querySelectorAll(".counter");
    function animateCounter(counter){
        const target = parseFloat(counter.dataset.target);
        const isDecimal = target % 1 !== 0;
        let current = 0;
        const increment = target / 80;
        function updateCounter(){
            current += increment;
            if(current >= target){
                counter.textContent = isDecimal
                    ? target.toFixed(1)
                    : target.toLocaleString();
                return;
            }
            counter.textContent = isDecimal
                ? current.toFixed(1)
                : Math.floor(current).toLocaleString();
            requestAnimationFrame(updateCounter);
        }
        updateCounter();
    }
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                counters.forEach(counter => {
                    counter.textContent = "0";
                    animateCounter(counter);
                });
            }else{
                counters.forEach(counter => {
                    counter.textContent = "0";
                });
            }
        });
    }, {
        threshold: 0.4
    });
    observer.observe(statsSection);
});