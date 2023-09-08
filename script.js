function updateDateTime() {
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const currentDate = new Date();
  
  const dayOfWeekElement = document.querySelector('[data-testid="currentDayOfTheWeek"]');
  const utcTimeElement = document.querySelector('[data-testid="currentUTCTime"]');
  
  const dayOfWeek = daysOfWeek[currentDate.getUTCDay()];
  const utcTime = currentDate.getTime();
  
  dayOfWeekElement.innerHTML = dayOfWeek;
  utcTimeElement.innerHTML = utcTime;
}

// update the date and time initially and then every second
updateDateTime();
setInterval(updateDateTime, 1000);