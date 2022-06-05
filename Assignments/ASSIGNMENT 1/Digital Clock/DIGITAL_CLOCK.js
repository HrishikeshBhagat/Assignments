        let Today = new Date();
let liveTime = Today.toLocaleTimeString();
let liveDate = Today.toLocaleDateString()
document.getElementById("currentTime").innerHTML = liveTime;
document.getElementById("todaysDate").innerHTML = liveDate;
let CurrentDate;
function start() {
    CurrentDate = setInterval(() => {
        let CurrentTime = new Date();
        document.getElementById("currentTime").innerHTML = CurrentTime.toLocaleTimeString();

    }, 1000);
}
function stop() {
    clearInterval(CurrentDate);
}
