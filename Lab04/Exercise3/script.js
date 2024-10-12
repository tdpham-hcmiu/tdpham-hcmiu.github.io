setInterval(() => {
    var currentTime = new Date(Date.now());
    var currentTime = new Date(currentTime.toLocaleString("en-US"));

    var AM_PM = currentTime.getHours() <= 12 ? "AM" : "PM";

    var H = currentTime.getHours() - 12;
    var M = currentTime.getMinutes() < 10 ? `0${currentTime.getMinutes()}` : currentTime.getMinutes();
    var S = currentTime.getSeconds() < 10 ? `0${currentTime.getSeconds()}` : currentTime.getSeconds();

    var timeString = `${H}:${M}:${S} ${AM_PM}`;
    document.getElementById("time").innerText = timeString;

    var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

    var dayName = days[currentTime.getDay()];
    var monthName = months[currentTime.getMonth()];
    var d = currentTime.getDate() < 10 ? `0${currentTime.getDate()}` : currentTime.getDate(); 
    var Y = currentTime.getFullYear();

    var timeString = `${dayName} ${monthName} ${d} ${Y}`;
    document.getElementById("date").innerText = timeString;
}, 1000);
