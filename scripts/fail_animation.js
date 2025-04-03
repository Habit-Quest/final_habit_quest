let fail_button = document.getElementById("unfinishedAnimation");
fail_button.addEventListener("click", fail);

let succeed_button = document.getElementById("finishedAnimation");
succeed_button.addEventListener("click", succeed);

let progress_percent = 100;
// const key
// on load

function fail() {
// onclick
    let heart_img = document.querySelector(".heart_img");
    let progress_bar = document.querySelector(".progress_bar");
    let flash_animation = document.querySelector(".flash_animation");
    fail_button.classList.add("fail_animation")
    flash_animation.classList.add("red_flash");
    heart_img.classList.add("heart_hurt");

    while (progress_percent !== 0) {
        progress_percent = progress_percent - 10
        progress_bar.style.width = progress_percent + "%"
        setTimeout((n) => {
            flash_animation.classList.remove("red_flash");
            heart_img.classList.remove("heart_hurt");
        }, 100)
    // in miliseconds
        break
    }

    while (progress_percent == 0) {
        heart_img.classList.add("heart_sad");
        break
    }
  
}

function succeed() {
// onclick
    fail_button.classList.add("succeed_animation")

    while (progress_percent != 100) {
        let progress_bar = document.querySelector(".progress_bar");
        progress_percent = progress_percent + 10
        progress_bar.style.width = progress_percent + "%"

        let heart_img = document.querySelector(".heart_sad");
        heart_img.classList.remove("heart_sad");
        break
    }
}