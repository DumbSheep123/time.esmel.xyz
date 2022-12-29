var clock = new Vue({
    el: "#clock",
    data: {
        time: "",
        date: ""
    }
});

var week = [
    "SUNDAY",
    "MONDAY",
    "TUESDAY",
    "WEDNESDAY",
    "THURSDAY",
    "FRIDAY",
    "SATURDAY"
];
var timerID = setInterval(updateTime, 100);
updateTime();
function updateTime() {
    var cd = new Date();
    clock.time =
        zeroPadding(cd.getHours(), 2) +
        ":" +
        zeroPadding(cd.getMinutes(), 2) +
        ":" +
        zeroPadding(cd.getSeconds(), 2);
    clock.date =
        zeroPadding(cd.getFullYear(), 4) +
        " " +
        zeroPadding(cd.getMonth() + 1, 2) +
        " " +
        zeroPadding(cd.getDate(), 2) +
        " " +
        week[cd.getDay()];
}

function zeroPadding(num, digit) {
    var zero = "";
    for (var i = 0; i < digit; i++) {
        zero += "0";
    }
    return (zero + num).slice(-digit);
}


setInterval(function newtime(){
    document.title = clock.time + " " + clock.date + "";
}, 10); 