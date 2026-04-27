const heroTitle = document.querySelector(".title");
const reveals = document.querySelectorAll(".reveal");
const monsterHolders = document.querySelectorAll(".monster-holder");

function handleScroll() {
    const scrollY = window.scrollY;
    const heroFade = Math.max(0, 1 - scrollY / 350);

    heroTitle.style.opacity = heroFade;
    heroTitle.style.transform = `translateY(${scrollY * 0.15}px) scale(${1 + scrollY * 0.0004})`;

    reveals.forEach((item) => {
        const rect = item.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (rect.top < windowHeight * 0.85 && rect.bottom > windowHeight * 0.15) {
            item.classList.add("show");
        } else {
            item.classList.remove("show");
        }
    });

    monsterHolders.forEach((monster, index) => {
        const rect = monster.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const trigger = windowHeight * (0.9 - index * 0.08);

        if (rect.top < trigger && rect.bottom > windowHeight * 0.1) {
            monster.classList.add("show");
        } else {
            monster.classList.remove("show");
        }
    });
}

window.addEventListener("scroll", handleScroll);
window.addEventListener("load", handleScroll);