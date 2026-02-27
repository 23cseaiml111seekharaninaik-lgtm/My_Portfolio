const text = "Hi, I'm Seekharani Naik 👩‍💻";
let i = 0;

function typing() {
    if (i < text.length) {
        document.querySelector(".typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, 80);
    }
}

typing();

// Animate Skill Bars
window.addEventListener("load", function () {
    const bars = document.querySelectorAll(".progress-bar");

    bars.forEach((bar, i) => {
        let percentages = [90, 85, 80, 88, 75]; 
        bar.style.width = percentages[i] + "%";
    });
});