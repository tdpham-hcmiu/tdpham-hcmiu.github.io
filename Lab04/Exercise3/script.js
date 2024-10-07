setInterval(() => {
    var currentTime = new Date(Date.now());
    var currentTime = new Date(currentTime.toLocaleString("en_US"));

    var AM_PM = currentTime.getHours() <= 12 ? "AM" : "PM";

    var H = currentTime.getHours() - 12;
    var M = currentTime.getMinutes() < 10 ? `0${currentTime.getMinutes()}` : currentTime.getMinutes();
    var S = currentTime.getSeconds() < 10 ? `0${currentTime.getSeconds()}` : currentTime.getSeconds();

    var timeString = `${H}:${M}:${S} ${AM_PM}`;
    document.getElementById("time").innerText = timeString;

    var D = currentTime.getDate();
    var m = currentTime.getMonth();
    var Y = currentTime.getFullYear();

    var timeString = `${D} ${m} ${Y}`;
    document.getElementById("date").innerText = timeString;
}, 1000);
