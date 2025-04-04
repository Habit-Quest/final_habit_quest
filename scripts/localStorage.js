
document.addEventListener("DOMContentLoaded", () => {

    const habitNameInput = document.querySelector("#habit-name-editor");
    const frequencyInput = document.querySelector("#frequency-editor");
    const descriptionInput = document.querySelector("#description-editor");

    habitNameInput.innerHTML = localStorage.getItem("habitName") || "";
    frequencyInput.innerHTML = localStorage.getItem("habitFrequency") || "";
    descriptionInput.innerHTML = localStorage.getItem("habitDescription") || "";
    console.log(habitNameInput)

    habitNameInput.addEventListener("input", () => {
        console.log("TEST")
        localStorage.setItem("habitName", habitNameInput.innerHTML);
    }, false);
    
    frequencyInput.addEventListener("input", () => {
        localStorage.setItem("habitFrequency", frequencyInput.innerHTML);
        console.log("TEST2")
    }, false);
    
    descriptionInput.addEventListener("input", () => {
        localStorage.setItem("habitDescription", descriptionInput.innerHTML);
        console.log("TEST3")
    }, false);

    const urlParams = new URLSearchParams(window.location.search);
    const habitCategory = urlParams.get("habit");

    if (habitCategory) {
        console.log("Habit Category:", habitCategory);
        document.querySelector("h1").textContent = `${habitCategory} Habits`;
    }
});
