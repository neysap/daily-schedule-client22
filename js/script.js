var currentDayEl = document.querySelector("#currentDay");
var currentDay = moment ().format("dddd, MMMMM Do");
currentDayEl.textContent = currentDay;