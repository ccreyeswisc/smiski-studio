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

const bgImages = [
    "components/backgrounds/bedroom.PNG"
]

let currentIndex = 0;
let currHatIndex = 0
const smiski = document.getElementById("smiski");
const hat = document.getElementById("hat")
const bg = document.getElementById("background")

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

// toggle between backgrounds
document.getElementById("prev_bg").addEventListener("click", () => {
    currBGIndex = (currBGIndex - 1 + bgImages.length) % bgImages.length;
    bg.src = bgImages[currBGIndex];
});

document.getElementById("next_bg").addEventListener("click", () => {
    currBGIndex = (currBGIndex + 1) % bgImages.length;
    bg.src = bgImages[currBGIndex];
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

function saveImg() {
    const container = document.querySelector(".smiski-container");

    // Ask the user for a filename
    const filename = prompt("Enter a name for your Smiski image:", "my_smiski");

    // If the user cancels or enters an empty string, abort
    if (!filename) {
        return;
    }

    // captures everything inside .smiski-container exactly as it appears and download it as an image
    html2canvas(container, {
        useCORS: true
    }).then(canvas => {
        const link = document.createElement('a');
        link.download = `${filename}.png`;
        link.href = canvas.toDataURL("image/png");
        link.click();
    }).catch(err => {
        console.error("Failed to capture canvas:", err);
    });
}
