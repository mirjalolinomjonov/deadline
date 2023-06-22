const deadline = "2023-08-12";

function getTime(endTime) {
  const total = Date.parse(endTime) - Date.parse(new Date()),
    days = Math.floor(total / (1000 * 60 * 60 * 24)),
    hours = Math.floor(((total / (1000 * 60 * 60)) % 24) - 5),
    minutes = Math.floor((total / (1000 * 60)) % 60),
    seconds = Math.floor((total / 1000) % 60);
  return {
    total: total,
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
  };
}

function getZero(num) {
  if (num >= 0 && num < 10) {
    return "0" + num;
  } else return num;
}

function setClock(selector, endTime) {
  const timer = document.querySelector(selector),
    days = timer.querySelector("#days"),
    hours = timer.querySelector("#hours"),
    minutes = timer.querySelector("#minutes"),
    seconds = timer.querySelector("#seconds"),
    timeInterval = setInterval(updateClock, 1000);

  updateClock();

  function updateClock() {
    const time = getTime(endTime);
    days.innerHTML = getZero(time.days);
    hours.innerHTML = getZero(time.hours);
    minutes.innerHTML = getZero(time.minutes);
    seconds.innerHTML = getZero(time.seconds);
    console.log(time.total);
    if (time.total <= 0) {
      console.log('stop');
      const conguratulation = document.querySelector('.conguratulation')
      timer.style.display = 'none'
      conguratulation.style.display = 'block'

      clearInterval(timeInterval);
    }
  }
}

setClock(".timer", deadline);