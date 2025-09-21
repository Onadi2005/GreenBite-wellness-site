const slogans = [
    "Eat well. Live well.",
    "Balance Plate, Balance Day.",
    "Move a little, breathe a lot.",
    "Give your body the best fuel.",
    "Healthy outside starts from inside.",
    "Wellness is a journey, no stops.",
    "Strong Mind, Strong Body.",
    "One Healthy Choice at a Time."
];

let idx = 0;
const rotator = document.getElementById('slogan-rotator');

function showSlogan(i){
    if(rotator) {
        rotator.classList.add("fade");
        setTimeout(() => {
            rotator.textContent = slogans[i];
            rotator.classList.remove("fade");
        }, 800);
    }
}
setInterval(() => {
    idx = (idx + 1) % slogans.length;
    showSlogan(idx);
}, 4000);
showSlogan(0);

const healthTips = [
    "Drink 8 cups of water today.",
    "Take a 10 minute walk after lunch.",
    "Include a colorful vegetable in your every meal.",
    "Try 5 minutes of mindful breathing.",
    "Stretch for 2 minutes every hour at your desk.",
    "Swap sugary drinks for herbal tea.",
    "Go to bed 30 minutes earlier tonight.",
    "Practice gratitude before you sleep.",
    "Eat slowly and enjoy every bite.",
    "Do 15 squats while brushing your teeth."
];

function tipOfDay(){
    const day = new Date().getDate();
    return healthTips[day % healthTips.length];
}

const tipEl = document.getElementById('daily-tip-line');
if(tipEl) tipEl.textContent = tipOfDay();
const newsletterForm = document.getElementById('newletterform');
const newsletterMsg = document.getElementById('newsletter-msg');

function saveToLocal(key, value){
    localStorage.setItem(key, JSON.stringify(value));
}

function loadFromLocal(key, fallback=null){
    const val = localStorage.getItem(key);
    return val ? JSON.parse(val) : fallback;
}
if(newsletterForm){
    newsletterForm.addEventListener('submit', e => {
        e.preventDefault();
        const email = newsletterForm.querySelector('input').value.trim();
        if(!email.includes("@") || !email.includes(".")){
            newsletterMsg.textContent = "Enter a valid email";
            newsletterMsg.classList.remove('success');
            newsletterMsg.classList.add('error');
        } else {
            saveToLocal("newsletter", email);
            newsletterMsg.textContent = "Subscription successful!";
            newsletterMsg.classList.remove('error');
            newsletterMsg.classList.add('success');
            newsletterForm.reset();
        }
    });
}
const scrollElements = document.querySelectorAll('.hero, .tip-section, .slogan-box, .newsletter');
const scrollObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
            entry.target.style.transition = 'all 1s ease';
            observer.unobserve(entry.target); // animate only once
        }
    });
}, { threshold: 0.2 });
scrollElements.forEach(el => {
    el.style.opacity = 0;
    el.style.transform = 'translateY(20px)';
    scrollObserver.observe(el);
});
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js')
        .then(reg => console.log('Service Worker Registered', reg))
        .catch(err => console.log('Service Worker Registration Failed', err));
    });
}
