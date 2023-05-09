const date = document.getElementsByClassName("date");
const time = document.getElementsByClassName("time");

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
    const currentDate =
        zeroPadding(cd.getFullYear(), 4) +
        "-" +
        zeroPadding(cd.getMonth() + 1, 2) +
        "-" +
        zeroPadding(cd.getDate(), 2) +
        " " +
        week[cd.getDay()];
    const currentTime =
        zeroPadding(cd.getHours(), 2) +
        ":" +
        zeroPadding(cd.getMinutes(), 2) +
        ":" +
        zeroPadding(cd.getSeconds(), 2);

    date[0].textContent = currentDate;
    time[0].textContent = currentTime;
}

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