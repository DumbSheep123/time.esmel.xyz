const date = document.querySelector(".date");
const time = document.querySelector(".time");

const week = [
    "SUNDAY",
    "MONDAY",
    "TUESDAY",
    "WEDNESDAY",
    "THURSDAY",
    "FRIDAY",
    "SATURDAY",
];

function updateTime() {
    const cd = new Date();
    const date =
        zeroPadding(cd.getFullYear(), 4) +
        "-" +
        zeroPadding(cd.getMonth() + 1, 2) +
        "-" +
        zeroPadding(cd.getDate(), 2) +
        " " +
        week[cd.getDay()];
    const time =
        zeroPadding(cd.getHours(), 2) +
        ":" +
        zeroPadding(cd.getMinutes(), 2) +
        ":" +
        zeroPadding(cd.getSeconds(), 2);

    dateElem.textContent = date;
    timeElem.textContent = time;
}

// Call updateTime function every 100ms
setInterval(updateTime, 100);

function zeroPadding(num, digit) {
    let zero = "";
    for (let i = 0; i < digit; i++) {
        zero += "0";
    }
    return (zero + num).slice(-digit);
}

setInterval(function newtime() {
    document.title = clock.data.time + " " + clock.data.date;
}, 10);