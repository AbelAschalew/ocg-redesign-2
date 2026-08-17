document.addEventListener("DOMContentLoaded", () => {
    const title = document.querySelector(".hero-title");
    const text = title.textContent.trim();
    title.innerHTML = "";
    let delay = 0;
    text.split(" ").forEach(word => {
        const wordSpan = document.createElement("span");
        wordSpan.classList.add("word");
        word.split("").forEach(letter => {
            const letterSpan = document.createElement("span");
            letterSpan.textContent = letter;
            letterSpan.style.animationDelay = `${delay}s`;
            wordSpan.appendChild(letterSpan);
            delay += 0.05;
        });
        title.appendChild(wordSpan);
        title.appendChild(document.createTextNode(" "));
    });
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                title.classList.remove("animate");
                void title.offsetWidth;
                title.classList.add("animate");
            }else{
                title.classList.remove("animate");
            }
        });
    }, {
        threshold: 0.5
    });
    observer.observe(title);
});
