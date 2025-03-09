const clock = document.querySelector("#clock");
const today = document.querySelector("#today");


function runClock() {
    const date = new Date();

    const hours = String(date.getHours());
    const minutes = String(date.getMinutes());
    const seconds = String(date.getSeconds());
    clock.innerText = `${hours.padStart(2, "0")}:${minutes.padStart(2, "0")}:${seconds.padStart(2, "0")}`
    today.innerText =String(date.toLocaleString("en-US", {year: "numeric", month: "long", day: "numeric", weekday: "long" }));

}

runClock();

setInterval(runClock, 1000);


