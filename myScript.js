const smiskiImages = [
    "components/smiskis/smiski_1.PNG",
    "components/smiskis/smiski_2.PNG",
    "components/smiskis/smiski_3.PNG"
];

const hatImages = [
    "components/hats/beret.PNG",
    "components/hats/flower.PNG",
    "components/hats/party_hat.PNG",
    "components/hats/top_hat.PNG"
]

let currentIndex = 0;
let currHatIndex = 0
const smiski = document.getElementById("smiski");
const hat = document.getElementById("hat")

// toggle between smiski's
document.getElementById("prev").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + smiskiImages.length) % smiskiImages.length;
    smiski.src = smiskiImages[currentIndex];
    if (currentIndex == 2) {
        smiski.style.transform = "scale(1.3) translateY(100px) translateX(10px)";
    } else {
        smiski.style.transform = "scale(1.1) translateY(100px)";
    }
});

document.getElementById("next").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % smiskiImages.length;
    smiski.src = smiskiImages[currentIndex];
    if (currentIndex == 2) {
        smiski.style.transform = "scale(1.3) translateY(100px) translateX(10px)";
    } else {
        smiski.style.transform = "scale(1.1) translateY(100px)";
    }
});

// toggle between hats
document.getElementById("prev_hat").addEventListener("click", () => {
    currHatIndex = (currHatIndex - 1 + hatImages.length) % hatImages.length;
    hat.src = hatImages[currHatIndex];
    if (currHatIndex ==  0) {
        hat.style.transform = "scale(1.1) translateY(90px)";
    } else {
        hat.style.transform = "scale(1.1) translateY(80px)";
    }
});

document.getElementById("next_hat").addEventListener("click", () => {
    currHatIndex = (currHatIndex + 1) % hatImages.length;
    hat.src = hatImages[currHatIndex];
    if (currHatIndex ==  0) {
        hat.style.transform = "scale(1.1) translateY(90px)";
    } else {
        hat.style.transform = "scale(1.1) translateY(80px)";
    }
});

function randomOutfit() {
    const hat_index = Math.floor(Math.random() * hatImages.length);
    const smiski_index = Math.floor(Math.random() * smiskiImages.length);

    hat.src = hatImages[hat_index];
    smiski.src = smiskiImages[smiski_index];

    if (hat_index ==  0) {
        hat.style.transform = "scale(1.1) translateY(90px)";
    } else {
        hat.style.transform = "scale(1.1) translateY(80px)";
    }

    if (smiski_index == 2) {
        smiski.style.transform = "scale(1.3) translateY(100px) translateX(10px)";
    } else {
        smiski.style.transform = "scale(1.1) translateY(100px)";
    }
}

function changeColor() {
    // Add logic to tint/change the Smiski's color
    alert("Color change logic goes here!");
}