const exercies ={
    arms:{
        none:["Push-ups", "Arm Circles", "Tricep Dips"],
        dumbbells:["Bicep Curls", "Shoulder Press", "Tricep Kickbacks"],
        resistanceBand:["Band Bicep Curls", "Band Shoulder Press", "Band Tricep Extensions"]
    },
    legs:{
        none:["Squats", "Lunges", "Calf Raises"],
        dumbbells:["Dumbbell Squats", "Weighted Lunges", "Deadlifts"],
        resistanceBand:["Band Squats", "Band Leg Press", "Band Side Steps"]
    },
    fullBody:{
        none: ["Burpees", "Mountain Climbers", "Plank"],
        dumbbells: ["Dumbbell Thrusters", "Renegade Rows", "Deadlifts"],
        resistanceBand: ["Band Burpees", "Band Rows", "Band Squats to Press"]
        
    }

};
let workoutPlan =[];
let currentExercise = 0;
let timerInterval;
document.getElementById("generateBtn").addEventListener("click",generateWorkout);
document.getElementById("nextBtn").addEventListener("click",nextExercise);

function showAlert(message) {
    alert(message);
}

function generateWorkout(){
    const bodyPart = document.getElementById("bodyPart").value;
    const equipment = document.getElementById("equipment").value;

    if(!bodyPart || !equipment){
        showAlert("Please select both the Body Part and Equipment");
        return;
    }
    workoutPlan = [...exercies[bodyPart][equipment]].sort(()=>Math.random() - 0.5);
    currentExercise = 0;
    localStorage.setItem("lastWorkout", JSON.stringify(workoutPlan));
    displayWorkoutPlan();
    startExercise();



}

function displayWorkoutPlan(){
    const plan = document.getElementById("workoutPlan");
    plan.innerHTML = "<h3>Your Workout:</h3><ol>" + workoutPlan.map(ex=>`<li>${ex}</li>`).join('') + "</ol>";
    const items = plan.querySelectorAll('li');
    items.forEach((li, index) => {
        setTimeout(() => li.classList.add('show'), index * 150);
    });

}

function startExercise(){
    const timerContainer = document.getElementById("timeContainer");
    timerContainer.classList.remove("timer-card-hidden");
    showExercise(workoutPlan[currentExercise]);

}
function showExercise(exerciseName){
    document.getElementById("exerciseName").textContent = exerciseName;
    startTimer(30);
}

function startTimer(seconds) {
    clearInterval(timerInterval);
    let timeLeft = seconds;
    updateTimerDisplay(timeLeft);

    timerInterval = setInterval(() => {
        timeLeft--;
        updateTimerDisplay(timeLeft);

        if(timeLeft <= 0) {
            clearInterval(timerInterval);
            showAlert("Time's up! Next exercise.");
        }
    }, 1000);
}
function updateTimerDisplay(time) {
    const minutes = String(Math.floor(time/60)).padStart(2,'0');
    const seconds = String(time % 60).padStart(2,'0');
    document.getElementById("timer").textContent = `${minutes}:${seconds}`;
}

function nextExercise(){
    currentExercise++;
    if(currentExercise < workoutPlan.length){
        showExercise(workoutPlan[currentExercise]);
    }
    else{
        showAlert("Workout Complete. Great Job!");
        document.getElementById("timerContainer").classList.add("timer-card-hidden");
    }
}
