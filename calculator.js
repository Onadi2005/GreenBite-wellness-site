const form = document.getElementById('calc-form');
const ageInput = document.getElementById('age');
const genderInputs = document.getElementsByName('gender');
const heightInput = document.getElementById('height');
const weightInput = document.getElementById('weight');
const activityInput = document.getElementById('activity');

const resultsSection = document.querySelector('.results-hidden');
const tdeeValue = document.getElementById('tdee-value');
const carbsBar = document.getElementById('carbs-bar');
const proteinBar = document.getElementById('protein-bar');
const fatBar = document.getElementById('fat-bar');
const carbsValue = document.getElementById('carbs-value');
const proteinValue = document.getElementById('protein-value');
const fatValue = document.getElementById('fat-value');

window.addEventListener('load', () => {
    const savedData = JSON.parse(localStorage.getItem('lastCalc'));
    if(savedData){
        ageInput.value = savedData.age;
        heightInput.value = savedData.height;
        weightInput.value = savedData.weight;
        activityInput.value = savedData.activity;
        genderInputs.forEach(g => g.checked = g.value === savedData.gender);
        form.dispatchEvent(new Event('submit'));
    }
});

function getSelectGender(){
    for(const g of genderInputs){
        if(g.checked) return g.value;
    }
    return null;
}

function animateProgressBar(barEl, targetPercent){
    let width = 0;
    barEl.style.width = '0%';
    const step = targetPercent / 100;
    const interval = setInterval(() => {
        if (width >= targetPercent) {
            barEl.style.width = targetPercent + '%';
            clearInterval(interval);
        } else {
            width += step;
            barEl.style.width = width + '%';
        }
    }, 10);

}

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const age = parseFloat(ageInput.value);
    const gender = getSelectGender();
    const height = parseFloat(heightInput.value);
    const weight = parseFloat(weightInput.value);
    const activityFactor = parseFloat(activityInput.value);

    if(!age || !gender || !height || !weight || !activityFactor){
        alert("Please fill all fields correctly.");
        return;
    }
    let bmr;
    if(gender === 'male'){
        bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    }
    else{
        bmr = 10 * weight + 6.25 * height - 5 * age - 161;

    }
    const tdee = bmr * activityFactor;

    const carbs = Math.round((tdee * 0.5) / 4);
    const protein = Math.round((tdee * 0.2) / 4);
    const fat = Math.round((tdee * 0.3) / 9);
    const carbsPercent = Math.round((carbs * 4 / tdee) * 100);
    const proteinPercent = Math.round((protein * 4 / tdee) * 100);
    const fatPercent = Math.round((fat * 9 / tdee) * 100);

function animateBarsOnScroll() {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                animateProgressBar(carbsBar, carbsPercent);
                animateProgressBar(proteinBar, proteinPercent);
                animateProgressBar(fatBar, fatPercent);
                observer.unobserve(resultsSection); 
            }
        });
    }, { threshold: 0.5 });

    observer.observe(resultsSection);
}


    resultsSection.classList.add('results-visible');
    tdeeValue.textContent = Math.round(tdee);
    carbsValue.textContent = `${carbs} g`;
    proteinValue.textContent = `${protein} g`;
    fatValue.textContent = `${fat} g`;
    animateBarsOnScroll();
    const calcData = {age, gender, height, weight, activity: activityFactor};
    localStorage.setItem('lastCalc', JSON.stringify(calcData));

});
