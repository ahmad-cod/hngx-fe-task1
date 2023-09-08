function updateDateTime() {
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const currentDate = new Date();
  
  const dayOfWeekElement = document.querySelector('[data-testid="currentDayOfTheWeek"]');
  const utcTimeElement = document.querySelector('[data-testid="currentUTCTime"]');
  
  const dayOfWeek = daysOfWeek[currentDate.getUTCDay()];
  const utcTime = currentDate.toISOString().substr(11, 8); // Extract HH:MM:SS from ISO string
  
  dayOfWeekElement.innerHTML = `Day of the week: ${dayOfWeek}`;
  utcTimeElement.innerHTML = `<h4>UTC Time: ${utcTime}</h4>`;
}

// Call the function to update the date and time initially and then every second
updateDateTime();
setInterval(updateDateTime, 1000);