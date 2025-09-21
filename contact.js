const feedbackForm = document.getElementById("feedbackForm");
const confirmationMessage = document.getElementById("confirmationMessage");

function showConfirmationMessage(message, duration = 3000) {
    confirmationMessage.textContent = message;
    confirmationMessage.style.display = "block";
    setTimeout(() => {
        confirmationMessage.style.display = "none";
    }, duration);
}

feedbackForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const feedback = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            message: document.getElementById("message").value,
            timestamp: new Date().toISOString()
        };

        let feedbacks = JSON.parse(localStorage.getItem("feedbacks")) || [];
        feedbacks.push(feedback);
        localStorage.setItem("feedbacks", JSON.stringify(feedbacks));
        showConfirmationMessage("Thank you! Your feedback has been saved.");
        feedbackForm.reset();
});

const faqQuestions = document.querySelectorAll(".faq-question");
faqQuestions.forEach((question) => {
  question.addEventListener("click", () => {
    const answer = question.nextElementSibling;
    document.querySelectorAll(".faq-answer").forEach(a => {
      if (a !== answer) a.classList.remove("show");
    });
    answer.classList.toggle("show");
  });
})

const scrollElements = document.querySelectorAll(".form-wrapper, .image-wrapper, .faq-item");
function elementInView(el, offset = 100) {
    const elementTop = el.getBoundingClientRect().top;
    return elementTop <= (window.innerHeight - offset);
}

function displayScrollElement(el) {
    el.classList.add("scrolled");
}

function handleScrollAnimation() {
    scrollElements.forEach(el => {
        if (elementInView(el, 100)) {
            displayScrollElement(el);
        }
    });
}

window.addEventListener("scroll", handleScrollAnimation);
window.addEventListener("load", handleScrollAnimation);
