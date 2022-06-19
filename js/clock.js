const clock = document.querySelector("h2#clock");

function showTime() {
    const current = new Date();
    
    const hour = String(current.getHours()).padStart(2, "0");
    const min = String(current.getMinutes()).padStart(2, "0");
    const sec = String(current.getSeconds()).padStart(2, "0");

    clock.innerText = `${hour}:${min}:${sec}`;
}

showTime();
setInterval(showTime, 1000);