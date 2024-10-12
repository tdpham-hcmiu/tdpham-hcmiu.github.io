document.getElementById("questions").style.display = "none";
document.getElementById("time-ended").style.display = "none";

function startClock() {
    var countdownTime = 60;
    var display = document.getElementById("cd-btn");

    document.getElementById("questions").style.display = "block";

    function updateClock() {
        var minutes = Math.floor(countdownTime / 60);
        var seconds = countdownTime % 60;

        display.innerText = "The remaining time: " +
                        (minutes < 10 ? "0" : "") + minutes + ":" +
                        (seconds < 10 ? "0" : "") + seconds;

        if (countdownTime > 0) {
            countdownTime--;
            setTimeout(updateClock, 1000);
        } else {
            document.getElementById("questions").style.display = "none";
            document.getElementById("time-ended").style.display = "block";
        }
    }

    updateClock();
}
