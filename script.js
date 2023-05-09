const date = document.getElementById("date");
const time = document.getElementById("time");

const week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

function updateTime() {
    const cd = new Date();
    const currentDate = `${cd.getFullYear()}-${zeroPadding(cd.getMonth() + 1, 2)}-${zeroPadding(cd.getDate(), 2)} ${week[cd.getDay()]}`;
    const currentTime = `${zeroPadding(cd.getHours(), 2)}:${zeroPadding(cd.getMinutes(), 2)}:${zeroPadding(cd.getSeconds(), 2)}`;
    date.textContent = currentDate;
    time.textContent = currentTime;
}

setInterval(updateTime, 100);

function zeroPadding(num, digit) {
    return String(num).padStart(digit, '0');
}

setInterval(() => document.title = `${time.textContent} ${date.textContent}`, 10);