const reasons = [
"Because your smile brightens my day.",
"Because your laugh is my favorite sound.",
"Because you're my best friend.",
"Because you always make me feel loved.",
"Because your hugs feel like home.",
"Because your kindness inspires me.",
"Because you're always there for me.",
"Because you're beautiful inside and out.",
"Because life is more colorful with you.",
"Because you believe in me.",

"Because your eyes are my favorite place to look.",
"Because your voice calms me.",
"Because you make me laugh.",
"Because you're patient with me.",
"Because you're caring.",
"Because you're thoughtful.",
"Because you're sweet.",
"Because you're adorable.",
"Because you're amazing.",
"Because you're one of a kind."
];

// Fill up to 100 reasons
while (reasons.length < 100) {
    reasons.push(`Because every day gives me another reason to love you. ❤️ (${reasons.length + 1})`);
}

let currentReason = 0;

const reasonText = document.getElementById("reasonText");
const reasonNumber = document.getElementById("reasonNumber");

function updateReason() {

    reasonText.style.opacity = "0";

    setTimeout(() => {

        reasonText.textContent = reasons[currentReason];
        reasonNumber.textContent = `Reason #${currentReason + 1}`;

        reasonText.style.opacity = "1";

    }, 150);

}

document.getElementById("next").addEventListener("click", () => {

    currentReason++;

    if (currentReason >= reasons.length) {
        currentReason = 0;
    }

    updateReason();

});

document.getElementById("prev").addEventListener("click", () => {

    currentReason--;

    if (currentReason < 0) {
        currentReason = reasons.length - 1;
    }

    updateReason();

});

updateReason();