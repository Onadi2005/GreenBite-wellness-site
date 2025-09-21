const breathingCircle = document.getElementById("breathingCircle");
const breathingText = document.getElementById("breathingText");
const startBreathing = document.getElementById("startBreathing");
let breathingInterval;

startBreathing.addEventListener("click", () => {
    clearInterval(breathingInterval);
    let state = "inhale";
    breathingText.textContent = "Inhale...";
    breathingCircle.classList.add("grow");
    breathingInterval = setInterval(() => {
        if (state === "inhale") {
            state = "hold";
            breathingText.textContent = "Hold...";
        } else if (state === "hold") {
            state = "exhale";
            breathingText.textContent = "Exhale...";
            breathingCircle.classList.remove("grow");
            breathingCircle.classList.add("shrink");
        } else {
            state = "inhale";
            breathingText.textContent = "Inhale...";
            breathingCircle.classList.remove("shrink");
            breathingCircle.classList.add("grow");
        }
    }, 4000);
});
window.addEventListener("beforeunload", () => clearInterval(breathingInterval));

const timerDisplay = document.getElementById("timerDisplay");
const startTimer = document.getElementById("startTimer");
const pauseTimer = document.getElementById("pauseTimer");
const resetTimer = document.getElementById("resetTimer");
let timer;
let timeLeft = 25 * 60; 
let isRunning = false;

function updateTimerDisplay() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    timerDisplay.textContent = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}

startTimer.addEventListener("click", () => {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(() => {
            if (timeLeft > 0) {
                timeLeft--;
                updateTimerDisplay();
            } else {
                clearInterval(timer);
                isRunning = false;
                incrementSession();
                alert("Session complete! Great job 🌿");
            }
        }, 1000);
    }
});

pauseTimer.addEventListener("click", () => {
    clearInterval(timer);
    isRunning = false;
});

resetTimer.addEventListener("click", () => {
    clearInterval(timer);
    timeLeft = 25 * 60;
    isRunning = false;
    updateTimerDisplay();
});

updateTimerDisplay();

const playNature = document.getElementById("playNature");
const playWaves = document.getElementById("playWaves");
const stopSound = document.getElementById("stopSound");

let currentAudio;

playNature.addEventListener("click", () => {
    playSound("images/nature.mp3");
});
playWaves.addEventListener("click", () => {
    playSound("images/waves.mp3");
});
stopSound.addEventListener("click", () => {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }
});

function playSound(src) {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }
    currentAudio = new Audio(src);
    currentAudio.loop = true;
    currentAudio.play();
}

const sessionCount = document.getElementById("sessionCount");

function incrementSession() {
    let count = localStorage.getItem("sessions") || 0;
    count++;
    localStorage.setItem("sessions", count);
    sessionCount.textContent = count;
}

function loadSessions() {
    let count = localStorage.getItem("sessions") || 0;
    sessionCount.textContent = count;
}
loadSessions();

const exerciseSelect = document.getElementById("mindfulnessExercise");
if (exerciseSelect) {
    exerciseSelect.addEventListener("change", () => {
        const selectedExercise = exerciseSelect.value;
        localStorage.setItem("selectedMindfulnessExercise", selectedExercise);
    });

    window.addEventListener("load", () => {
    const savedExercise = localStorage.getItem("selectedMindfulnessExercise");
    if (savedExercise) {
        exerciseSelect.value = savedExercise;
    }
    });
}

const sections = document.querySelectorAll("section");
window.addEventListener("scroll", () => {
    sections.forEach(sec => {
        const top = sec.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) sec.classList.add("show-section");
    });
});


