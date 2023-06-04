const [date, time, week] = [document.getElementById("date"), document.getElementById("time"), ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"]];

function updateTime() {
  const d = new Date();
  date.textContent = `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')} ${week[d.getDay()]}`;
  time.textContent = `${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}:${String(d.getSeconds()).padStart(2, '0')}`;
}

setInterval(updateTime, 100);
setInterval(() => document.title = `${time.textContent} ${date.textContent}`, 10);