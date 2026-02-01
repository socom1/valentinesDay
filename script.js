const dialogue = [
    { 
        text: "Hey babe... so I know you must be wondering why I'm writing you a letter instead of just telling you this in person...", 
        img: "images/cute-cats.gif" 
    },
    { 
        text: "But I wanted to make sure I got everything right and didn't miss anything important that I want to say to you.", 
        img: "images/25bbe87e3fa4fbfe33905772efaabe62.jpg" 
    },
    { 
        text: "I feel like it's nice to show appreciation for things and people in your life, and I feel like I don't do that enough with you.", 
        img: "images/200.gif" 
    },
    { 
        text: "You're such an amazing person and I'm so lucky to have you in my life. You're beautiful, smart, funny, and kind.", 
        img: "images/Two_hugging_cats.jpg" 
    },
    { 
        text: "You're genuinely an amazing girlfriend and I'm so grateful for everything you do for me.", 
        img: "images/f5f8b24b635927b5539c708aac4aa8ac.jpg" 
    },
    { 
        text: "I wish I could give you the world. You genuinely deserve so much. I know that's probably a repetitive thing I say...", 
        img: "images/200.gif" 
    },
    { 
        text: "But god baby, you really do deserve the world and way more <3", 
        img: "images/cute-cats.gif" 
    },
    { 
        text: "I love you so much and I can't wait to see what the future holds for us. I'm so excited to continue growing with you!", 
        img: "images/25bbe87e3fa4fbfe33905772efaabe62.jpg" 
    },
    { 
        text: "You're my best friend, my soulmate, and the love of my life. I'm so grateful to have you by my side.", 
        img: "images/Two_hugging_cats.jpg" 
    },
    { 
        text: "I know I'm not perfect and I know I have my flaws, but I promise you that I will always love you.", 
        img: "images/f5f8b24b635927b5539c708aac4aa8ac.jpg" 
    },
    { 
        text: "You're the most important person in my life and I can't imagine my life without you. I love you more than words can say.", 
        img: "images/Two_hugging_cats.jpg" 
    },
    { 
        text: "I still wonder to this day how I got so lucky to have you in my life.", 
        img: "images/cute-cats.gif" 
    },
    { 
        text: "I never ever had a friend or partner who I could be my true self around without feeling judged or insecure.", 
        img: "images/25bbe87e3fa4fbfe33905772efaabe62.jpg" 
    },
    { 
        text: "You're the first person who has ever made me feel truly loved and accepted for who I am.", 
        img: "images/Two_hugging_cats.jpg" 
    },
    { 
        text: "I love how creative you are and how you always manage to surprise me with all your cute gifts...", 
        img: "images/200.gif" 
    },
    { 
        text: "You're such an inspiration to me and I hope I can be the same for you.", 
        img: "images/cute-cats.gif" 
    },
    { 
        text: "Even if we have dated for two years I still get butterflies in my stomach when I see you.", 
        img: "images/f5f8b24b635927b5539c708aac4aa8ac.jpg" 
    },
    { 
        text: "You're still the most beautiful woman I've ever seen and I fall in love with you more every day.", 
        img: "images/25bbe87e3fa4fbfe33905772efaabe62.jpg" 
    },
    { 
        text: "Now I have a very big question for you...", 
        img: "images/cute-cats.gif" 
    },
    { 
        text: "It may be obvious but I still wanted to make it special and actually reminisce from the past when I made you a website...", 
        img: "images/depositphotos_400991818-stock-photo-beige-cat-worker-vest-helmet.jpg" 
    },
    { 
        text: "But this is a little upgrade :))))", 
        img: "images/depositphotos_400991818-stock-photo-beige-cat-worker-vest-helmet.jpg" 
    },
    { 
        text: "So...............", 
        img: "images/images-4.jpeg" 
    },
    { 
        text: "Soooooooooooooooo", 
        img: "images/images-5.jpeg" 
    },
    { 
        text: "SOOOOOOOOOOOOOOOOOOOOO", 
        img: "images/images-6.jpeg" 
    },
    { 
        text: "Will you be my Valentine?", 
        img: "images/images-3.jpeg", 
        isQuestion: true 
    }
];

let currentStep = 0;
let noClickCount = 0;
let activeImgIndex = 1; // 1 or 2

const textElement = document.getElementById("dialogue-text");
const img1 = document.getElementById("cat-img-1");
const img2 = document.getElementById("cat-img-2");
const nextBtn = document.getElementById("next-btn");
const choiceButtons = document.getElementById("choice-buttons");
const yesBtn = document.getElementById("yes-btn");
const noBtn = document.getElementById("no-btn");
const gameContainer = document.querySelector(".game-container");

function updateGame() {
    const step = dialogue[currentStep];
    textElement.innerText = step.text;
    
    if (step.img) {
        setImage(step.img);
    }

    if (step.isQuestion) {
        nextBtn.classList.add("hidden");
        choiceButtons.classList.remove("hidden");
    } else {
        nextBtn.classList.remove("hidden");
        choiceButtons.classList.add("hidden");
    }
}

// Crossfade logic
function setImage(src) {
    const currentImg = activeImgIndex === 1 ? img1 : img2;
    const nextImg = activeImgIndex === 1 ? img2 : img1;

    // Check if source is actually different to avoid unnecessary fade
    if (currentImg.src.includes(src)) return;

    nextImg.src = src;
    
    nextImg.onload = () => {
        nextImg.classList.add("active");
        currentImg.classList.remove("active");
        activeImgIndex = activeImgIndex === 1 ? 2 : 1;
    };
}

// Initial start
// Execute immediately to avoid "..." text delay
currentStep = 0;
activeImgIndex = 1;
noClickCount = 0;

// Set specific initial state
img1.src = dialogue[0].img;
img1.classList.add("active");
img2.classList.remove("active");
img2.src = ""; // Clear second image

updateGame();

nextBtn.addEventListener("click", () => {
    currentStep++;
    if (currentStep < dialogue.length) {
        updateGame();
    }
});

yesBtn.addEventListener("click", () => {
    textElement.innerText = "YAY!!! I love you so much baby!! 💖💖💖 Happy Valentine's Day!!";
    setImage("images/Two_hugging_cats.jpg"); 
    choiceButtons.innerHTML = ""; 
    createConfetti();
});

noBtn.addEventListener("click", () => {
    noClickCount++;
    gameContainer.classList.add("shake");
    setTimeout(() => {
        gameContainer.classList.remove("shake");
    }, 500);

    if (noClickCount === 1) {
        textElement.innerText = "Wait... what? You clicked no? Try again. 🤨";
        setImage("images/images-2.jpeg"); 
    } else if (noClickCount === 2) {
        textElement.innerText = "Hey! Stop clicking that! 😠";
        setImage("images/noFilter.webp"); 
    } else if (noClickCount === 3) {
        textElement.innerText = "I'm getting really icky now...!";
        setImage("images/very angry cat.webp"); 
    } else if (noClickCount === 4) {
        textElement.innerText = "STOP IT! SAY YES! 😡";
        setImage("images/very angry cat.webp"); 
    } else if (noClickCount >= 5) {
        textElement.innerText = "ACCEPPPPPTTTT MY LOVEEEEEEE!!!! 🔥🔥🔥";
        const currentSize = parseFloat(window.getComputedStyle(yesBtn).fontSize);
        yesBtn.style.fontSize = (currentSize * 1.5) + "px";
        yesBtn.style.padding = "20px 50px";
    }
});

function createConfetti() {
    for (let i = 0; i < 50; i++) {
        const heart = document.createElement("div");
        heart.innerHTML = "❤️";
        heart.style.position = "fixed";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.top = "-10vh";
        heart.style.zIndex = "1000"; // Ensure hearts are above images
        heart.style.fontSize = Math.random() * 20 + 20 + "px";
        heart.style.animation = `fall ${Math.random() * 3 + 2}s linear forwards`;
        document.body.appendChild(heart);
    }
    
    const style = document.createElement("style");
    style.innerHTML = `
        @keyframes fall {
            to { transform: translateY(110vh) rotate(360deg); }
        }
    `;
    document.head.appendChild(style);
}
